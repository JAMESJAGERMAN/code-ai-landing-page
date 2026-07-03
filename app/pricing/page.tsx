import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'free forever',
    desc: 'Perfect for individual developers exploring AI-assisted coding.',
    features: ['100 generations/month', '500 reviews/month', '5 deployments/month', 'Community support', 'VS Code extension', 'Basic context engine'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    desc: 'For professional developers who want to ship faster every day.',
    features: ['Unlimited generations', 'Unlimited reviews', 'Unlimited deployments', 'Priority support', 'Advanced context engine', 'Multi-model AI access', 'Auto test generation', 'Team analytics'],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$149',
    period: 'per team / month',
    desc: 'For teams that need security, control, and dedicated support.',
    features: ['Everything in Pro', 'SSO & SCIM', 'RBAC & audit logs', 'Dedicated AI models', 'On-premise option', 'SLA guarantee', 'Custom integrations', 'Account manager'],
    cta: 'Contact Sales',
    featured: false,
  },
  {
    name: 'Custom',
    price: 'Custom',
    period: 'tailored pricing',
    desc: 'For organizations with unique requirements and large-scale needs.',
    features: ['Everything in Enterprise', 'Custom AI model training', 'White-label option', 'Private cloud deployment', 'Custom SLAs', '24/7 dedicated support', 'Executive sponsor', 'Volume discounts'],
    cta: 'Talk to Us',
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <div className="container">
            <p className="section-label">Pricing</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              Simple, transparent pricing
            </h1>
            <p className="section-sub">
              Start free, upgrade when you need more power. No hidden fees.
            </p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}>
              {plans.map((p, i) => (
                <div key={i} style={{
                  padding: '2rem 1.5rem',
                  background: p.featured ? 'linear-gradient(135deg, rgba(0,212,170,0.06), rgba(0,153,255,0.04))' : 'rgba(255,255,255,0.02)',
                  border: p.featured ? '1px solid rgba(0,212,170,0.2)' : '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {p.featured && (
                    <div style={{
                      position: 'absolute', top: '0.75rem', right: '-1.75rem',
                      background: 'linear-gradient(135deg, #00d4aa, #0099ff)',
                      color: '#0a0a0a', fontSize: '0.65rem', fontWeight: 700,
                      padding: '0.25rem 2rem', transform: 'rotate(45deg)',
                    }}>
                      POPULAR
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{p.name}</h3>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '0.15rem' }}>{p.price}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>{p.period}</div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{p.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem' }}>
                    {p.features.map((f, j) => (
                      <li key={j} style={{
                        padding: '0.35rem 0', fontSize: '0.82rem',
                        color: 'rgba(255,255,255,0.6)',
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                      }}>
                        <span style={{ color: '#00d4aa' }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={i === 3 ? 'mailto:sales@code.ai' : '#contact'} className="btn-primary" style={{
                    display: 'block', textAlign: 'center', padding: '0.75rem',
                    fontSize: '0.85rem',
                  }}>
                    {p.cta}
                  </a>
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
