'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'What languages does Code.ai support?',
    a: 'Code.ai supports all major languages including JavaScript, TypeScript, Python, Go, Rust, Java, Kotlin, Swift, C#, Ruby, and PHP. We\'re adding more every month based on user demand.',
  },
  {
    q: 'Can Code.ai work with my existing projects?',
    a: 'Yes. Code.ai reads your existing codebase, understands your project structure, conventions, and dependencies — so generated code fits naturally into what you already have.',
  },
  {
    q: 'Is my code safe with Code.ai?',
    a: 'Absolutely. Your code never leaves your environment unless you explicitly choose cloud features. We offer SOC 2 compliance, end-to-end encryption, and on-premise deployment for Enterprise plans.',
  },
  {
    q: 'How is Code.ai different from GitHub Copilot?',
    a: 'While Copilot focuses on inline code completion, Code.ai is a complete AI development platform — we generate full features, review PRs, auto-document, and handle deployments. It\'s your AI teammate, not just an autocomplete.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No lock-in contracts. You can cancel your subscription at any time, and you\'ll retain access to your data. We even help you export everything if you decide to leave.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="container">
        <p className="section-label">FAQ</p>
        <h2 className="section-title">Frequently asked questions</h2>
        <div className={styles.list}>
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${openIdx === i ? styles.open : ''}`}
            >
              <button className={styles.question} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                {item.q}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={styles.answer}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
