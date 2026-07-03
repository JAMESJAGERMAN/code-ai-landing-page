'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const roles = [
  {
    title: 'Senior Software Engineer — AI/ML',
    dept: 'Engineering',
    location: 'Jakarta / Remote',
    type: 'Full-time',
    desc: 'Build and improve the code generation engine. Work on LLM fine-tuning, prompt engineering, and evaluation pipelines.',
  },
  {
    title: 'Frontend Engineer',
    dept: 'Engineering',
    location: 'Jakarta / Remote',
    type: 'Full-time',
    desc: 'Build our VS Code extension, web dashboard, and JetBrains plugin. React, TypeScript, and WebExtensions experience needed.',
  },
  {
    title: 'Product Designer',
    dept: 'Design',
    location: 'Jakarta / Remote',
    type: 'Full-time',
    desc: 'Design developer tools that are intuitive and delightful. Experience with developer workflows and complex UI is a plus.',
  },
  {
    title: 'Developer Advocate',
    dept: 'Marketing',
    location: 'Jakarta / Remote',
    type: 'Full-time',
    desc: 'Create content, speak at events, and build relationships with the developer community. Strong technical writing skills required.',
  },
  {
    title: 'Solutions Engineer',
    dept: 'Sales',
    location: 'Jakarta / Singapore',
    type: 'Full-time',
    desc: 'Help enterprise customers adopt Code.ai. Run technical demos, handle integrations, and provide feedback to product.',
  },
  {
    title: 'Infrastructure Engineer',
    dept: 'Engineering',
    location: 'Jakarta / Remote',
    type: 'Full-time',
    desc: 'Scale our infrastructure to handle millions of generations per day. Kubernetes, AWS, and CI/CD experience required.',
  },
];

const perks = [
  'Competitive salary and equity', 'Remote-first culture', 'Health insurance', 'Unlimited PTO', 'Annual learning budget', 'Home office setup stipend', 'Quarterly team retreats', 'Stock options',
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <p className="section-label">Careers</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              Join us in building the future of software development
            </h1>
            <p className="section-sub" style={{ marginBottom: '0' }}>
              We&rsquo;re a distributed team of builders, designers, and dreamers. Remote-first, Jakarta-rooted.
            </p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '3rem' }}>
              {perks.map((p, i) => (
                <div key={i} style={{ padding: '0.85rem', background: 'rgba(0,212,170,0.04)', border: '1px solid rgba(0,212,170,0.08)', borderRadius: '8px', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>
                  <span style={{ color: '#00d4aa', marginRight: '0.35rem' }}>✓</span>
                  {p}
                </div>
              ))}
            </div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem' }}>Open Positions</h2>
            {roles.map((r, i) => (
              <div key={i} style={{
                padding: '1.25rem', marginBottom: '0.75rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.15)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{r.title}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                      <span style={{ fontSize: '0.75rem', padding: '0.1rem 0.45rem', borderRadius: '100px', background: 'rgba(86,156,214,0.08)', color: '#569cd6', border: '1px solid rgba(86,156,214,0.15)' }}>{r.dept}</span>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{r.location}</span>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{r.type}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '1.2rem', color: '#00d4aa' }}>→</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            ))}
            <div style={{ textAlign: 'center', marginTop: '2rem', padding: '2rem', background: 'rgba(0,212,170,0.04)', borderRadius: '12px', border: '1px solid rgba(0,212,170,0.1)' }}>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>Don&rsquo;t see a role that fits?</p>
              <a href="mailto:careers@code.ai" style={{ color: '#00d4aa', fontWeight: 600 }}>Send us your resume →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
