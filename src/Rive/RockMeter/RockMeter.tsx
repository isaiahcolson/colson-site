import { useEffect, useRef, useState } from "react";
import { RockMeterRiveComponent } from "./RockMeterRiveComponent";

function RockMeter() {
  const [boltLevel, setBoltLevel] = useState(0);
  const [rockLevel, setRockLevel] = useState(0);
  const [threshold, setThreshold] = useState(7);
  console.log(rockLevel);

  const GROWTH_RATE = 3; // units per second
  const DECAY_RATE = 6; // units per second
  const MAX = 101;
  const MIN = 0;

  const boltLevelRef = useRef(0);
  const thresholdRef = useRef(threshold);

  function getBoltLevel(db: number) {
    if (db <= 0) return 0;
    if (db <= 1) return 1;
    if (db <= 3) return 2;
    if (db <= 6) return 3;
    if (db <= 11) return 4;
    if (db <= 17) return 5;
    if (db <= 24) return 6;
    if (db <= 32) return 7;
    if (db <= 41) return 8;
    if (db <= 51) return 9;
    return 10;
  }

  useEffect(() => {
    boltLevelRef.current = boltLevel;
  }, [boltLevel]);

  useEffect(() => {
    thresholdRef.current = threshold;
  }, [threshold]);

  useEffect(() => {
    let animationId = 0;

    async function start() {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          autoGainControl: false,
          noiseSuppression: false,
          echoCancellation: false,
        },
      });
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
        const NOISE_FLOOR = 0.01;

        const adjustedRms = rms < NOISE_FLOOR ? 0 : rms;

        // 1. Convert to "db-like"
        const db = 20 * Math.log10(adjustedRms || 0.0001);

        // 2. Normalize to 0–60 range
        const normalizedDb = Math.min(Math.max(db + 60, 0), 60);

        // 3. Apply curve (this is the "hockey stick")
        const curvedDb = Math.pow(normalizedDb / 60, 1.5) * 60;

        // 4. Smooth it
        smoothedLevel = smoothedLevel * 0.8 + curvedDb * 0.2;

        // 5. Snap very low values to 0
        if (smoothedLevel < 1) smoothedLevel = 0;

        // 6. Map to bolt levels
        const stepped = getBoltLevel(smoothedLevel);

        const now = Date.now();
        if (now - lastUpdate > throttleMs) {
          setBoltLevel(stepped);
          lastUpdate = now;
        }

        console.log("threshold in loop:", thresholdRef.current);

        animationId = requestAnimationFrame(loop);
      }

      let lastTime = performance.now();

      function update(now: number) {
        const delta = (now - lastTime) / 1000;
        lastTime = now;

        setRockLevel((prev) => {
          let next = prev;

          if (boltLevelRef.current >= thresholdRef.current) {
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
      <RockMeterRiveComponent
        boltLevel={boltLevel}
        rockLevel={rockLevel}
        onThresholdChange={setThreshold}
      />
    </div>
  );
}

export { RockMeter };
