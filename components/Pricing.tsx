'use client';

import { useReveal } from '@/hooks/useReveal';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Starter',
    price: '0',
    currency: '$',
    period: '/month',
    badge: null,
    desc: 'For individual developers',
    features: [
      '500 code generations / month',
      'AI code review (basic)',
      'Community support',
      'VS Code & JetBrains extension',
      'Public community access',
    ],
    cta: 'Get Started Free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '29',
    currency: '$',
    period: '/month',
    badge: 'Most Popular',
    desc: 'For professional developers',
    features: [
      '5,000 code generations / month',
      'Advanced AI code review',
      'Priority email support',
      'CI/CD integration',
      'Auto-documentation',
      'AI test generation',
      'Team collaboration (up to 5)',
    ],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '149',
    currency: '$',
    period: '/team /month',
    badge: null,
    desc: 'For teams scaling delivery',
    features: [
      'Unlimited code generations',
      'Advanced AI code review',
      'CI/CD pipeline integration',
      'Auto-documentation & test gen',
      'SSO / SAML / SCIM',
      'Audit logs & role-based access',
      'Priority chat & phone support',
    ],
    cta: 'Start Free Trial',
    featured: false,
  },
  {
    name: 'Custom',
    price: 'Custom',
    currency: '',
    period: null,
    badge: null,
    desc: 'For organizations with unique needs',
    features: [
      'Everything in Enterprise',
      'Dedicated AI model fine-tuning',
      'On-premise deployment option',
      'Custom integrations & API',
      'SLA guarantee (99.99%)',
      'Dedicated success manager',
      'Volume licensing',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
];

export default function Pricing() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="section" id="pricing" style={{ background: '#0d0d0d' }}>
      <div className="container">
        <p className="section-label">Pricing</p>
        <h2 className="section-title">Simple, transparent pricing</h2>
        <p className="section-sub">Start free. Scale as you grow. No hidden fees.</p>
        <div className={styles.grid} ref={ref}>
          {plans.map((p, i) => (
            <div
              key={i}
              className={`${styles.card} ${p.featured ? styles.featured : ''} reveal`}
            >
              {p.badge && <div className={styles.badge}>{p.badge}</div>}
              <h3>{p.name}</h3>
              <div className={styles.amount}>
                {p.currency && <span className={styles.currency}>{p.currency}</span>}
                <span className={styles.price}>{p.price}</span>
                {p.period && <span className={styles.period}>{p.period}</span>}
              </div>
              <p className={styles.desc}>{p.desc}</p>
              <ul className={styles.features}>
                {p.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <a href="#" className={p.featured ? 'btn-primary' : 'btn-secondary'} style={{ width: '100%' }}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
