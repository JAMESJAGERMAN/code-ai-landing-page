'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const posts = [
  { title: 'How Code.ai Achieves 98% Review Accuracy', excerpt: 'Behind the scenes of our review engine: synthetic data generation, fine-tuning strategy, and the 10M PR dataset.', date: 'Jun 25, 2026', readTime: '8 min', author: 'Arya R.', tag: 'Engineering' },
  { title: 'Shipping 3x Faster with AI-Assisted Code Review', excerpt: 'How the engineering team at NexSoft reduced their sprint cycle from 2 weeks to 4 days using Code.ai.', date: 'Jun 18, 2026', readTime: '6 min', author: 'Sari N.', tag: 'Case Study' },
  { title: 'Introducing Multi-Model AI: GPT-4o, Claude 4, and Beyond', excerpt: 'Code.ai now supports multiple AI backends with automatic fallback. Swap models without changing your workflow.', date: 'Jun 10, 2026', readTime: '5 min', author: 'Dimas K.', tag: 'Product' },
  { title: 'Monorepo Support Is Here', excerpt: 'Code.ai now understands Turborepo, Nx, Lerna, and pnpm workspaces. Generated code lands in the right package every time.', date: 'Jun 2, 2026', readTime: '4 min', author: 'Rina W.', tag: 'Product' },
  { title: 'Security First: Our Sandbox Architecture', excerpt: 'Every generation runs through a security sandbox. Here\'s how we prevent secrets, vulnerabilities, and license issues.', date: 'May 25, 2026', readTime: '10 min', author: 'Andi F.', tag: 'Engineering' },
  { title: 'The State of AI Code Generation in 2026', excerpt: 'An analysis of the AI coding tools landscape, benchmark results, and predictions for the rest of the year.', date: 'May 15, 2026', readTime: '12 min', author: 'Maya L.', tag: 'Industry' },
  { title: 'JetBrains Plugin: Now Available', excerpt: 'Code.ai now works inside IntelliJ IDEA, WebStorm, PyCharm, GoLand, and all JetBrains IDEs.', date: 'May 5, 2026', readTime: '3 min', author: 'Budi H.', tag: 'Product' },
  { title: 'Enterprise SSO and RBAC: A Technical Deep Dive', excerpt: 'How we implemented SAML, OIDC, SCIM, and fine-grained role-based access control for enterprise teams.', date: 'Apr 28, 2026', readTime: '9 min', author: 'Dewi N.', tag: 'Engineering' },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <div className="container">
            <p className="section-label">Blog</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              Latest from Code.ai
            </h1>
            <p className="section-sub">
              Product updates, engineering deep dives, and industry insights.
            </p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
              {posts.map((p, i) => (
                <div key={i} style={{
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex', flexDirection: 'column',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em',
                    padding: '0.2rem 0.6rem', borderRadius: '100px',
                    background: 'rgba(0,212,170,0.08)', color: '#00d4aa',
                    border: '1px solid rgba(0,212,170,0.15)', alignSelf: 'flex-start',
                    marginBottom: '0.75rem',
                  }}>
                    {p.tag}
                  </span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.4 }}>{p.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, flex: 1 }}>{p.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>{p.date} · {p.readTime}</span>
                    <span style={{ fontSize: '0.78rem', color: '#00d4aa' }}>{p.author}</span>
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
