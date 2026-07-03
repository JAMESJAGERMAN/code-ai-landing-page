'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    stars: '★★★★★',
    quote: '"Code.ai cut our feature delivery time by 70%. What used to take a week now ships in a day. It\'s like having a senior engineer on every PR."',
    initials: 'AR',
    name: 'Arya R.',
    role: 'Lead Engineer, TechCorp',
  },
  {
    stars: '★★★★★',
    quote: '"We integrated Code.ai into our CI pipeline. Review time dropped from 2 days to 15 minutes. Our team ships faster and with more confidence."',
    initials: 'SN',
    name: 'Sari N.',
    role: 'CTO, NexSoft',
  },
  {
    stars: '★★★★★',
    quote: '"I was skeptical about AI coding tools until I tried Code.ai. It doesn\'t just generate code — it understands the architecture behind what you\'re building."',
    initials: 'DK',
    name: 'Dimas K.',
    role: 'Senior Developer, Freelance',
  },
  {
    stars: '★★★★★',
    quote: '"Code.ai helps our junior developers write production-quality code from day one. The code review feature catches issues our manual review used to miss."',
    initials: 'RW',
    name: 'Rina W.',
    role: 'Engineering Manager, Bukalapak',
  },
  {
    stars: '★★★★★',
    quote: '"The context engine is mind-blowing. It reads our entire monorepo and generates code that matches our exact patterns and conventions."',
    initials: 'AF',
    name: 'Andi F.',
    role: 'Principal Engineer, Gojek',
  },
  {
    stars: '★★★★★',
    quote: '"We reduced our sprint cycle from 2 weeks to 4 days after adopting Code.ai. The deploy integration alone saved us countless hours."',
    initials: 'ML',
    name: 'Maya L.',
    role: 'VP of Engineering, Traveloka',
  },
  {
    stars: '★★★★☆',
    quote: '"The AI-generated tests are surprisingly thorough. It covers edge cases I wouldn\'t have thought of. Our code coverage went from 45% to 92% in a month."',
    initials: 'BH',
    name: 'Budi H.',
    role: 'QA Lead, Tokopedia',
  },
  {
    stars: '★★★★★',
    quote: '"Code.ai is the first AI tool that actually understands our microservices architecture. It generates API handlers that respect our existing patterns."',
    initials: 'DN',
    name: 'Dewi N.',
    role: 'Staff Engineer, BNI',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<number | null>(null);

  const goTo = useCallback((i: number) => {
    setIdx((i + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    timerRef.current = window.setInterval(() => goTo(idx + 1), 5000);
    return () => { if (timerRef.current !== null) window.clearInterval(timerRef.current); };
  }, [idx, goTo]);

  return (
    <section className="section" id="testimonials" style={{ background: '#0d0d0d' }}>
      <div className="container">
        <p className="section-label">Testimonials</p>
        <h2 className="section-title">Loved by developers</h2>
        <div className={styles.carousel}
          onMouseEnter={() => { if (timerRef.current !== null) window.clearInterval(timerRef.current); }}
          onMouseLeave={() => { timerRef.current = window.setInterval(() => goTo(idx + 1), 5000); }}
        >
          <div className={styles.track} style={{ transform: `translateX(-${idx * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.stars}>{t.stars}</div>
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{t.initials}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.controls}>
            <button onClick={() => goTo(idx - 1)} aria-label="Previous">←</button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button onClick={() => goTo(idx + 1)} aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
