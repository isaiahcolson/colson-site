import { useEffect, useRef, useState } from "react";
import { RockMeterRiveComponent } from "./RockMeterRiveComponent";

function RockMeter() {
  const [boltLevel, setBoltLevel] = useState(0);
  const [rockLevel, setRockLevel] = useState(0);

  const THRESHOLD = 2; // when rock starts building
  const GROWTH_RATE = 3; // units per second
  const DECAY_RATE = 6; // units per second
  const MAX = 100;
  const MIN = 0;

  const boltLevelRef = useRef(0);

  useEffect(() => {
    boltLevelRef.current = boltLevel;
  }, [boltLevel]);

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

      let smoothedLevel = 0;
      let lastUpdate = 0;
      const throttleMs = 200;

      function loop() {
        analyser.getByteTimeDomainData(samples);

        let sumOfSquares = 0;
        for (let i = 0; i < samples.length; i++) {
          const normalized = (samples[i] - 128) / 128;
          sumOfSquares += normalized * normalized;
        }

        const rms = Math.sqrt(sumOfSquares / samples.length);
        const boosted = rms * 5;
        const level01 = Math.min(Math.max(boosted, 0), 1);

        smoothedLevel = smoothedLevel * 0.8 + level01 * 0.2;

        const stepped = Math.round(smoothedLevel * 10);

        const now = Date.now();
        if (now - lastUpdate > throttleMs) {
          setBoltLevel(stepped);
          lastUpdate = now;
        }

        animationId = requestAnimationFrame(loop);
      }

      let lastTime = performance.now();

      function update(now: number) {
        const delta = (now - lastTime) / 1000;
        lastTime = now;

        setRockLevel((prev) => {
          let next = prev;

          if (boltLevelRef.current >= THRESHOLD) {
            next += GROWTH_RATE * delta;
          } else {
            next -= DECAY_RATE * delta;
          }

          return Math.max(MIN, Math.min(MAX, next));
        });

        requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      loop();
    }

    start();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div>
      <RockMeterRiveComponent boltLevel={boltLevel} rockLevel={rockLevel} />
    </div>
  );
}

export { RockMeter };
