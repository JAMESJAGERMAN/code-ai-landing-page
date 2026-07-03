'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const features = [
  {
    icon: '⚡',
    title: 'AI Code Generation',
    desc: 'Describe what you want in plain English and Code.ai generates production-ready code. Supports TypeScript, Python, Go, Rust, and 15+ languages.',
  },
  {
    icon: '🔍',
    title: 'Smart Code Review',
    desc: 'Automated PR reviews that catch bugs, security issues, and anti-patterns before they reach production. Fine-tuned on 10M+ real PRs.',
  },
  {
    icon: '🚀',
    title: 'One-Click Deploy',
    desc: 'Deploy to staging, preview, or production with zero-config CI/CD. Auto-rollback on failure and instant rollback with a single command.',
  },
  {
    icon: '🧪',
    title: 'Auto Test Generation',
    desc: 'Generate unit tests, integration tests, and E2E suites that actually cover your code. Target 90%+ coverage out of the box.',
  },
  {
    icon: '📖',
    title: 'Context Engine',
    desc: 'Code.ai reads your entire project structure, understands imports, conventions, and architecture. Generated code fits perfectly every time.',
  },
  {
    icon: '🛡️',
    title: 'Security Sandbox',
    desc: 'Every generation passes through a sandbox that checks for hardcoded secrets, SQL injection, XSS, dependency CVEs, and license compliance.',
  },
  {
    icon: '🔌',
    title: 'VS Code Extension',
    desc: 'Inline completions, side panel, and command palette integration. Works with Cmd+Shift+P. Supports JetBrains IDEs too.',
  },
  {
    icon: '🔄',
    title: 'CI/CD Integration',
    desc: 'GitHub Actions, GitLab CI, and Bitbucket Pipelines support. Automated review and deploy on every push and PR.',
  },
  {
    icon: '🤖',
    title: 'Multi-Model AI',
    desc: 'Supports GPT-4o, Claude 4, Code-Llama, and custom models. Automatic fallback ensures zero downtime.',
  },
  {
    icon: '📊',
    title: 'Team Analytics',
    desc: 'Dashboard with generation stats, review metrics, deployment history, and team productivity insights. Enterprise-grade reporting.',
  },
  {
    icon: '🏗️',
    title: 'Monorepo Support',
    desc: 'Works with Turborepo, Nx, Lerna, and pnpm workspaces. Understands your monorepo structure and generates code for the right packages.',
  },
  {
    icon: '🔐',
    title: 'SSO & RBAC',
    desc: 'SAML, OIDC, and SCIM support. Role-based access control with granular permissions. Audit logs for every action.',
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <div className="container">
            <p className="section-label">Features</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              Everything you need to ship faster
            </h1>
            <p className="section-sub">
              From code generation to deployment, Code.ai covers the entire development lifecycle.
            </p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}>
              {features.map((f, i) => (
                <div key={i} style={{
                  padding: '1.75rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: 'rgba(255,255,255,0.9)' }}>{f.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{f.desc}</p>
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
