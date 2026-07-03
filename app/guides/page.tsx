'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const guides = [
  {
    icon: '📘',
    title: 'Getting Started with Code.ai',
    desc: 'Set up Code.ai in your project and generate your first piece of AI-powered code in under 5 minutes.',
    readTime: '5 min',
    level: 'Beginner',
  },
  {
    icon: '🔄',
    title: 'Integrating with CI/CD',
    desc: 'Add Code.ai to your GitHub Actions, GitLab CI, or Bitbucket Pipelines for automated review and deploy.',
    readTime: '10 min',
    level: 'Intermediate',
  },
  {
    icon: '🧪',
    title: 'Mastering Test Generation',
    desc: 'Learn how to generate comprehensive test suites that cover edge cases, mocks, and integrations.',
    readTime: '12 min',
    level: 'Intermediate',
  },
  {
    icon: '🏗️',
    title: 'Working with Monorepos',
    desc: 'Configure Code.ai for Turborepo, Nx, Lerna, and pnpm workspaces with proper context resolution.',
    readTime: '8 min',
    level: 'Advanced',
  },
  {
    icon: '🔐',
    title: 'Security Best Practices',
    desc: 'Configure the security sandbox, set up custom rules, and integrate with your existing security workflow.',
    readTime: '10 min',
    level: 'Intermediate',
  },
  {
    icon: '⚙️',
    title: 'Advanced Configuration',
    desc: 'Deep dive into code-ai.config.ts — custom rules, AI providers, project context, and more.',
    readTime: '15 min',
    level: 'Advanced',
  },
  {
    icon: '🎨',
    title: 'Custom Code Generation Patterns',
    desc: 'Define reusable generation templates for your team. Standardize API handlers, components, and more.',
    readTime: '10 min',
    level: 'Advanced',
  },
  {
    icon: '🚀',
    title: 'Deployment Strategies',
    desc: 'Blue-green, canary, and rolling deployments with Code.ai. Zero-downtime deployment patterns.',
    readTime: '8 min',
    level: 'Intermediate',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    desc: 'Set up RBAC, shared prompts, review templates, and team analytics for your organization.',
    readTime: '7 min',
    level: 'Beginner',
  },
];

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <div className="container">
            <p className="section-label">Guides</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              Learn how to use Code.ai
            </h1>
            <p className="section-sub">
              Step-by-step guides for every skill level.
            </p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1rem',
            }}>
              {guides.map((g, i) => (
                <div key={i} style={{
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{g.icon}</div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.35rem', color: 'rgba(255,255,255,0.9)' }}>{g.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '0.75rem' }}>{g.desc}</p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>{g.readTime}</span>
                    <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.5rem', borderRadius: '100px', background: getLevelBg(g.level), color: getLevelColor(g.level), border: `1px solid ${getLevelBorder(g.level)}` }}>{g.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function getLevelBg(level: string) {
  if (level === 'Beginner') return 'rgba(0,212,170,0.08)';
  if (level === 'Intermediate') return 'rgba(86,156,214,0.08)';
  return 'rgba(206,145,120,0.08)';
}
function getLevelColor(level: string) {
  if (level === 'Beginner') return '#00d4aa';
  if (level === 'Intermediate') return '#569cd6';
  return '#ce9178';
}
function getLevelBorder(level: string) {
  if (level === 'Beginner') return 'rgba(0,212,170,0.15)';
  if (level === 'Intermediate') return 'rgba(86,156,214,0.15)';
  return 'rgba(206,145,120,0.15)';
}
