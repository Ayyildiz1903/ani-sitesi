"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  angle: number;
  va: number;        // angular velocity
  vx: number;
  vy: number;
  alpha: number;
  drift: number;
  driftSpeed: number;
  colorIdx: number;
}

const COLORS = [
  "rgba(74,21,85,",
  "rgba(107,45,139,",
  "rgba(61,10,82,",
  "rgba(201,169,110,",
  "rgba(155,89,182,",
];

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Spawn petals
    const COUNT = 22;
    petalsRef.current = Array.from({ length: COUNT }, () => spawnPetal(canvas));

    function spawnPetal(c: HTMLCanvasElement): Petal {
      return {
        x:          Math.random() * c.width,
        y:          -60 - Math.random() * c.height,
        size:       5 + Math.random() * 13,
        angle:      Math.random() * Math.PI * 2,
        va:         (Math.random() - 0.5) * 0.018,
        vx:         (Math.random() - 0.5) * 0.45,
        vy:         0.28 + Math.random() * 0.45,
        alpha:      0.12 + Math.random() * 0.3,
        drift:      Math.random() * Math.PI * 2,
        driftSpeed: 0.004 + Math.random() * 0.009,
        colorIdx:   Math.floor(Math.random() * COLORS.length),
      };
    }

    function drawPetal(p: Petal) {
      ctx!.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.angle);
      ctx!.globalAlpha = p.alpha;

      // Petal = pointed ellipse
      ctx!.beginPath();
      ctx!.ellipse(0, 0, p.size * 0.38, p.size, 0, 0, Math.PI * 2);
      ctx!.fillStyle = `${COLORS[p.colorIdx]}${p.alpha * 0.9})`;
      ctx!.fill();

      // Center vein
      ctx!.beginPath();
      ctx!.moveTo(0, -p.size * 0.9);
      ctx!.lineTo(0, p.size * 0.9);
      ctx!.strokeStyle = `rgba(201,169,110,${p.alpha * 0.28})`;
      ctx!.lineWidth = 0.4;
      ctx!.stroke();

      ctx!.restore();
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      petalsRef.current.forEach((p, i) => {
        p.drift += p.driftSpeed;
        p.x += p.vx + Math.sin(p.drift) * 0.28;
        p.y += p.vy;
        p.angle += p.va;

        if (p.y > canvas!.height + 80) {
          petalsRef.current[i] = spawnPetal(canvas!);
        }

        drawPetal(p);
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      aria-hidden="true"
    />
  );
}
