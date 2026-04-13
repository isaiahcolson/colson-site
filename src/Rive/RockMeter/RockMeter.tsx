import { useEffect, useState } from "react";
import { LightningBoltGroup } from "./LightningBoltGroup";

function RockMeter() {
  const [dbLevel, setDbLevel] = useState(0);

  useEffect(() => {
    let animationId = 0;

    async function start() {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);

      analyser.fftSize = 512;
      source.connect(analyser);

      const samples = new Uint8Array(analyser.fftSize);

      let smoothedLevel = 0; // keeps things from jumping

      // 👇 throttle control
      let lastUpdate = 0;
      const throttleMs = 200; // update every 100ms (~10 fps)

      function loop() {
        analyser.getByteTimeDomainData(samples);

        // 1. Convert waveform → signal strength (RMS)
        let sumOfSquares = 0;
        for (let i = 0; i < samples.length; i++) {
          const normalized = (samples[i] - 128) / 128;
          sumOfSquares += normalized * normalized;
        }

        const rms = Math.sqrt(sumOfSquares / samples.length);
        // 2. Scale it (this is your "sensitivity control")
        const boosted = rms * 5;
        // 3. Clamp to 0–1
        const level01 = Math.min(Math.max(boosted, 0), 1);

        // 4. Smooth it (prevents jitter)
        smoothedLevel = smoothedLevel * 0.8 + level01 * 0.2;

        // 5. Convert to 0–10 steps for your icons
        const stepped = Math.round(smoothedLevel * 10);

        const now = Date.now();

        if (now - lastUpdate > throttleMs) {
          console.log("stepped:", stepped); // ✅ log THIS instead
          setDbLevel(stepped);
          lastUpdate = now;
        }

        animationId = requestAnimationFrame(loop);
      }

      loop();
    }

    start();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div>
      <LightningBoltGroup boltLevel={dbLevel} />
    </div>
  );
}

export { RockMeter };
