'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './Features.module.css';

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'AI Code Generation',
    desc: 'Generate production-ready code from plain English descriptions — functions, components, APIs, and entire modules. Understands your project conventions and existing patterns.',
    stat: '10x faster',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: 'AI Code Review',
    desc: 'Automated reviews that catch bugs, enforce style guides, and suggest optimizations before your PR ever reaches a human reviewer. Integrates with GitHub, GitLab, and Bitbucket.',
    stat: '87% fewer bugs',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'One-Click Deploy',
    desc: 'Push to production with a single command. Built-in CI/CD pipeline handles build, test, security scan, and deployment. Rollback is instant with zero downtime.',
    stat: '5 min average deploy',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'AI Documentation',
    desc: 'Auto-generate and maintain docstrings, API references, architecture docs, and user guides — always in sync with your codebase. Supports Markdown, OpenAPI, and more.',
    stat: '100% coverage',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'AI Test Generation',
    desc: 'Automatically create unit, integration, and E2E tests from your code. Detects edge cases, generates mocks, and maintains test coverage as your code evolves.',
    stat: '95% coverage out-of-box',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h2" /><path d="M6 12h2" /><path d="M12 12h2" /><path d="M16 12h2" /><path d="M20 12h2" /><path d="M12 2v2" /><path d="M12 6v2" /><path d="M12 12v2" /><path d="M12 16v2" /><path d="M12 20v2" />
      </svg>
    ),
    title: 'AI Refactoring',
    desc: 'Modernize legacy code, migrate between frameworks, and optimize performance automatically. Supports language upgrades, framework migrations, and pattern standardization.',
    stat: '70% less tech debt',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: 'Smart Code Search',
    desc: 'Semantic search across your entire codebase using natural language. Find functions, patterns, and vulnerabilities instantly — no more grep through thousands of files.',
    stat: '0.3s average search',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
    title: 'Team Insights',
    desc: 'Real-time analytics on code health, deployment frequency, review velocity, and team productivity. Identify bottlenecks and improve your engineering workflows.',
    stat: '40% faster delivery',
  },
];

export default function Features() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="features" style={{ background: '#0d0d0d' }}>
      <div className="container">
        <p className="section-label">Features</p>
        <h2 className="section-title">Built for how developers actually work</h2>
        <p className="section-sub">
          Code.ai integrates directly into your existing workflow — no context switching, no setup friction.
        </p>
        <div className={styles.grid} ref={ref}>
          {features.map((f, i) => (
            <div key={i} className={`${styles.card} reveal`}>
              <div className={styles.icon}>{f.icon}</div>
              <div className={styles.stat}>{f.stat}</div>
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
