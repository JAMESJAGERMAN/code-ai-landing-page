'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './WhyCodeAI.module.css';

const stats = [
  { value: '10x', desc: 'Faster code delivery' },
  { value: '87%', desc: 'Fewer bugs in production' },
  { value: '4.9/5', desc: 'Developer satisfaction rating' },
  { value: '15k+', desc: 'Active developers' },
];

export default function WhyCodeAI() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section why" id="why" style={{ background: '#0d0d0d' }}>
      <div className="container">
        <p className="section-label">Why Code.AI</p>
        <h2 className="section-title">The numbers speak for themselves</h2>
        <div className={styles.grid} ref={ref}>
          {stats.map((s, i) => (
            <div key={i} className={`${styles.card} reveal`}>
              <div className={styles.stat}>{s.value}</div>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
