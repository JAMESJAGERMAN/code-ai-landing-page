'use client';

import { useEffect, useRef } from 'react';
import CodeShowcase from './CodeShowcase';
import styles from './Hero.module.css';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0;
    const particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number = 0; y: number = 0; size: number = 0;
      speedX: number = 0; speedY: number = 0; opacity: number = 0;
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < -10 || this.x > w + 10 || this.y < -10 || this.y > h + 10) this.reset();
      }
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 212, 170, ${this.opacity})`;
        ctx!.fill();
      }
    }

    const count = Math.min(Math.floor((w * h) / 12000), 100);
    for (let i = 0; i < count; i++) particles.push(new Particle());

    const onMouse = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMouse);

    const glow = () => {
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
      grad.addColorStop(0, 'rgba(0, 212, 170, 0.04)');
      grad.addColorStop(0.5, 'rgba(0, 153, 255, 0.02)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    };

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) { p.update(); p.draw(); }
      glow();
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.content}>
        <div className={styles.badge}>Now in beta</div>
        <h1 className={styles.logo}>
          <span className={styles.logoCode}>code</span>
          <span className={styles.logoDot}>.</span>
          <span className={styles.logoAi}>ai</span>
        </h1>
        <p className={styles.tagline}>AI that writes your code</p>
        <p className={styles.sub}>
          Ship faster with AI that writes, reviews, and deploys your code.<br />
          Inside the tools you already use.
        </p>
        <div className={styles.ctaGroup}>
          <a href="#" className="btn-primary">Get Early Access</a>
          <a href="#" className="btn-secondary">Watch Demo</a>
        </div>
        <div className={styles.links}>
          <a href="mailto:hello@code.ai">hello@code.ai</a>
          <span className={styles.dot}>&middot;</span>
          <a href="#">GitHub</a>
          <span className={styles.dot}>&middot;</span>
          <a href="#">Docs</a>
        </div>
        <CodeShowcase />
      </div>
    </section>
  );
}
