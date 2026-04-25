import { useEffect, useRef, useState } from "react";
import "./cursor-trail.css";

const CONFIG = {
  density: 1 / 18000,
  minParticles: 30,
  maxParticles: 110,
  linkDistance: 130,
  repelRadius: 140,
  repelForce: 0.55,
  damping: 0.96,
  maxVelocity: 1.6,
  jitter: 0.02,
  dprCap: 2,
  particleAlphaBase: 0.35,
  particleAlphaDepth: 0.5,
  linkAlphaScale: 0.22,
  cursorLinkAlphaScale: 0.35,
} as const;

type RGB = readonly [number, number, number];
const GOLD: RGB = [244, 194, 0] as const;
const PRIMARY: RGB = [13, 64, 104] as const;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  depth: number;
  color: RGB;
};

const rgba = ([r, g, b]: RGB, alpha: number) =>
  `rgba(${r}, ${g}, ${b}, ${alpha})`;

const matchesTouch = () =>
  typeof window !== "undefined" &&
  (("ontouchstart" in window) ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches);

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    if (matchesTouch()) return false;
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setEnabled(!matchesTouch() && !mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const state = {
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: Math.min(window.devicePixelRatio || 1, CONFIG.dprCap),
      particles: [] as Particle[],
      mouseX: -9999,
      mouseY: -9999,
      mouseActive: false,
      running: true,
      rafId: 0,
    };

    const targetCount = () => {
      const area = state.width * state.height;
      const raw = Math.round(area * CONFIG.density);
      return Math.max(CONFIG.minParticles, Math.min(CONFIG.maxParticles, raw));
    };

    const makeParticle = (x?: number, y?: number): Particle => {
      const depth = 0.3 + Math.random() * 0.7;
      return {
        x: x ?? Math.random() * state.width,
        y: y ?? Math.random() * state.height,
        vx: (Math.random() - 0.5) * 0.2 * depth,
        vy: (Math.random() - 0.5) * 0.2 * depth,
        size: 0.6 + Math.random() * 1.8 * depth,
        depth,
        color: Math.random() < 0.3 ? GOLD : PRIMARY,
      };
    };

    const resizeCanvas = () => {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
      state.dpr = Math.min(window.devicePixelRatio || 1, CONFIG.dprCap);
      canvas.width = state.width * state.dpr;
      canvas.height = state.height * state.dpr;
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    };

    const reconcileParticles = () => {
      const count = targetCount();
      const list = state.particles;

      for (const p of list) {
        if (p.x < 0) p.x = 0;
        else if (p.x > state.width) p.x = state.width;
        if (p.y < 0) p.y = 0;
        else if (p.y > state.height) p.y = state.height;
      }

      if (list.length < count) {
        while (list.length < count) list.push(makeParticle());
      } else if (list.length > count) {
        list.length = count;
      }
    };

    const step = () => {
      const { width, height, particles, mouseActive, mouseX, mouseY } = state;
      const repelR = CONFIG.repelRadius;
      const repelRSq = repelR * repelR;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.vx += (Math.random() - 0.5) * CONFIG.jitter;
        p.vy += (Math.random() - 0.5) * CONFIG.jitter;

        if (mouseActive) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const distSq = dx * dx + dy * dy;
          if (distSq < repelRSq && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const falloff = 1 - dist / repelR;
            const force = falloff * falloff * CONFIG.repelForce;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx *= CONFIG.damping;
        p.vy *= CONFIG.damping;
        if (p.vx > CONFIG.maxVelocity) p.vx = CONFIG.maxVelocity;
        else if (p.vx < -CONFIG.maxVelocity) p.vx = -CONFIG.maxVelocity;
        if (p.vy > CONFIG.maxVelocity) p.vy = CONFIG.maxVelocity;
        else if (p.vy < -CONFIG.maxVelocity) p.vy = -CONFIG.maxVelocity;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;
      }
    };

    const drawLinks = () => {
      const { particles, mouseActive, mouseX, mouseY } = state;
      const linkD = CONFIG.linkDistance;
      const linkDSq = linkD * linkD;

      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq >= linkDSq) continue;
          const dist = Math.sqrt(distSq);
          const opacity = (1 - dist / linkD) * CONFIG.linkAlphaScale;
          ctx.strokeStyle = rgba(PRIMARY, opacity);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      if (!mouseActive) return;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distSq = dx * dx + dy * dy;
        if (distSq >= linkDSq) continue;
        const dist = Math.sqrt(distSq);
        const opacity = (1 - dist / linkD) * CONFIG.cursorLinkAlphaScale;
        ctx.strokeStyle = rgba(GOLD, opacity);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      const { particles } = state;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const alpha = CONFIG.particleAlphaBase + p.depth * CONFIG.particleAlphaDepth;
        ctx.fillStyle = rgba(p.color, alpha);
        ctx.shadowColor = rgba(p.color, 0.55);
        ctx.shadowBlur = 8 * p.depth;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const render = () => {
      if (!state.running) return;
      ctx.clearRect(0, 0, state.width, state.height);
      step();
      drawLinks();
      drawParticles();
      state.rafId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      resizeCanvas();
      reconcileParticles();
    };

    const handlePointerMove = (event: PointerEvent) => {
      state.mouseX = event.clientX;
      state.mouseY = event.clientY;
      state.mouseActive = true;
    };

    const handlePointerOut = () => {
      state.mouseActive = false;
    };

    const handleVisibility = () => {
      if (document.hidden) {
        state.running = false;
        cancelAnimationFrame(state.rafId);
      } else if (!state.running) {
        state.running = true;
        state.rafId = requestAnimationFrame(render);
      }
    };

    resizeCanvas();
    reconcileParticles();
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerOut);
    document.addEventListener("visibilitychange", handleVisibility);

    state.rafId = requestAnimationFrame(render);

    return () => {
      state.running = false;
      cancelAnimationFrame(state.rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />;
};

export default CursorTrail;
