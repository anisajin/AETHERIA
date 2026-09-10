"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  baseAlpha: number;
  speed: number;
  pulseSpeed: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  decay: number;
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Color palettes for stars
    const starColors = ["#ffffff", "#f6c564", "#c77dff", "#00f5d4", "#ffdf8d"];

    // Generate stars
    const starCount = Math.min(Math.floor((width * height) / 9000), 180);
    const stars: Star[] = Array.from({ length: starCount }, () => {
      const radius = Math.random() * 1.8 + 0.4;
      const alpha = Math.random() * 0.7 + 0.2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        baseRadius: radius,
        alpha,
        baseAlpha: alpha,
        speed: Math.random() * 0.2 + 0.05,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      };
    });

    // Magic cursor sparkle particles
    const particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
      // Spawn magic dust trail
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 12,
          y: mouse.y + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          size: Math.random() * 2.8 + 1,
          alpha: 1,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          decay: Math.random() * 0.02 + 0.02,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Render loop
    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Render stars & constellation connections
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Slowly drift upward
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Pulse alpha
        star.alpha = star.baseAlpha + Math.sin(tick * star.pulseSpeed) * 0.25;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = star.color;
        ctx.fill();

        // Connect nearby stars with delicate starlight threads
        for (let j = i + 1; j < stars.length; j++) {
          const other = stars[j];
          const dx = star.x - other.x;
          const dy = star.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 95) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = "rgba(168, 85, 247, 0.12)";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Render mouse magic sparkles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="celestial-canvas"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
