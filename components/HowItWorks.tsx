'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    title: 'Describe',
    desc: 'Tell Code.ai what you need in plain language. "Build a login page with Google auth" — it understands intent, not just keywords.',
  },
  {
    num: '02',
    title: 'Review',
    desc: 'See the generated code live. Preview, tweak, and iterate with natural language feedback — just like pair programming with AI.',
  },
  {
    num: '03',
    title: 'Deploy',
    desc: 'Ship with confidence. Code.ai runs tests, checks for vulnerabilities, and deploys — all in one step. Rollback is instant if needed.',
  },
];

export default function HowItWorks() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <p className="section-label">How It Works</p>
        <h2 className="section-title">From idea to production in 3 steps</h2>
        <div className={styles.steps} ref={ref}>
          {steps.map((s, i) => (
            <div key={i} className={`${styles.step} reveal`}>
              <div className={styles.num}>{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
