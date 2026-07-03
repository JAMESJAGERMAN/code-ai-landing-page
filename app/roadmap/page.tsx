import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const phases = [
  {
    phase: 'Q3 2026',
    status: 'In Progress',
    items: [
      { title: 'Custom AI Model Training', desc: 'Train Code.ai on your private codebase for organization-specific patterns.', progress: 60 },
      { title: 'GitLab CI Deep Integration', desc: 'Native CI/CD templates and auto-review for GitLab MRs.', progress: 85 },
      { title: 'Multi-Region Deployments', desc: 'Deploy to multiple cloud regions simultaneously.', progress: 30 },
      { title: 'Performance Dashboard', desc: 'Real-time metrics for generation quality, review time, and deploy success rates.', progress: 45 },
    ],
  },
  {
    phase: 'Q4 2026',
    status: 'Planned',
    items: [
      { title: 'VS Code Chat Panel', desc: 'Conversational AI assistant inside VS Code with full project context.', progress: 10 },
      { title: 'On-Premise Deployment', desc: 'Self-hosted Code.ai for air-gapped environments and compliance.', progress: 5 },
      { title: 'API Version 2.0', desc: 'New REST API with streaming, webhooks, and enhanced endpoints.', progress: 20 },
      { title: 'Security Audit Automation', desc: 'Automated security audits integrated into the review pipeline.', progress: 15 },
    ],
  },
  {
    phase: 'Q1 2027',
    status: 'Planned',
    items: [
      { title: 'Mobile SDK Generation', desc: 'Generate Swift, Kotlin, and Flutter code with platform-specific best practices.', progress: 0 },
      { title: 'Architecture Diagram Generation', desc: 'Auto-generate architecture diagrams from your codebase.', progress: 0 },
      { title: 'Natural Language Queries', desc: 'Ask questions about your codebase in plain English.', progress: 0 },
      { title: 'Team Collaboration Features', desc: 'Shared prompts, review templates, and team knowledge base.', progress: 5 },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <p className="section-label">Roadmap</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              What&rsquo;s coming next
            </h1>
            <p className="section-sub">
              Our public roadmap. Priorities and timelines may shift based on feedback.
            </p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            {phases.map((p, i) => (
              <div key={i} style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{p.phase}</h2>
                  <span style={{
                    fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase',
                    padding: '0.2rem 0.7rem', borderRadius: '100px',
                    background: p.status === 'In Progress' ? 'rgba(0,212,170,0.1)' : 'rgba(255,255,255,0.04)',
                    color: p.status === 'In Progress' ? '#00d4aa' : 'rgba(255,255,255,0.35)',
                    border: `1px solid ${p.status === 'In Progress' ? 'rgba(0,212,170,0.2)' : 'rgba(255,255,255,0.06)'}`,
                  }}>
                    {p.status}
                  </span>
                </div>
                {p.items.map((item, j) => (
                  <div key={j} style={{
                    padding: '1.25rem', marginBottom: '0.75rem',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.35rem' }}>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{item.title}</h3>
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 600, color: item.progress > 0 ? '#00d4aa' : 'rgba(255,255,255,0.2)',
                        whiteSpace: 'nowrap', marginLeft: '1rem',
                      }}>
                        {item.progress}%
                      </span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '0.6rem' }}>{item.desc}</p>
                    <div style={{
                      width: '100%', height: '4px', background: 'rgba(255,255,255,0.04)',
                      borderRadius: '2px', overflow: 'hidden',
                    }}>
                      <div style={{
                        width: `${item.progress}%`, height: '100%',
                        background: 'linear-gradient(90deg, #00d4aa, #0099ff)',
                        borderRadius: '2px', transition: 'width 1s ease',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
