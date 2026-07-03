import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const stats = [
  { value: '5M+', label: 'Generations' },
  { value: '50K+', label: 'Teams' },
  { value: '98%', label: 'Uptime SLA' },
  { value: '15+', label: 'Languages' },
];

const values = [
  { title: 'Ship with Confidence', desc: 'We believe AI should remove fear from shipping, not add to it. Every generation passes through safety checks.' },
  { title: 'Developer-First', desc: 'Code.ai is built by developers, for developers. No black box. You own your code and your workflow.' },
  { title: 'Privacy by Design', desc: 'Your code never leaves your infrastructure without encryption. We never train on your private code.' },
  { title: 'Open by Default', desc: 'We publish our roadmap, our status, and our pricing. No hidden agendas, no enterprise bait-and-switch.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <p className="section-label">About</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              We believe AI should make developers faster, not replace them
            </h1>
            <p className="section-sub" style={{ maxWidth: '600px', marginBottom: '0' }}>
              Code.ai was founded in 2024 with a simple mission: give every developer a senior engineer on every PR.
            </p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: '2rem' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              marginBottom: '3rem',
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #00d4aa, #0099ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Meet the Co-Founders</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{
                  padding: '2rem', textAlign: 'center',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '16px', transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    width: '120px', height: '120px', margin: '0 auto 1.25rem',
                    borderRadius: '50%', overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(0,212,170,0.1), rgba(0,153,255,0.1))',
                    border: '2px solid rgba(0,212,170,0.2)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg viewBox="0 0 100 100" width="80" height="80" fill="none">
                      <circle cx="50" cy="55" r="28" fill="#3a3a4a" />
                      <circle cx="50" cy="55" r="25" fill="#4a4a5a" />
                      <circle cx="42" cy="48" r="4" fill="#FFD700" />
                      <circle cx="58" cy="48" r="4" fill="#FFD700" />
                      <circle cx="42" cy="47" r="2" fill="#111" />
                      <circle cx="58" cy="47" r="2" fill="#111" />
                      <ellipse cx="50" cy="55" rx="3" ry="2" fill="#FFB6C1" />
                      <path d="M47 58 Q50 62 53 58" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      <path d="M30 35 L38 25 L45 38" fill="#3a3a4a" />
                      <path d="M70 35 L62 25 L55 38" fill="#3a3a4a" />
                      <path d="M31 36 L38 27 L44 37" fill="#FFB6C1" />
                      <path d="M69 36 L62 27 L56 37" fill="#FFB6C1" />
                      <line x1="25" y1="50" x2="35" y2="52" stroke="#fff" strokeWidth="1" opacity="0.5" />
                      <line x1="25" y1="55" x2="35" y2="55" stroke="#fff" strokeWidth="1" opacity="0.5" />
                      <line x1="65" y1="52" x2="75" y2="50" stroke="#fff" strokeWidth="1" opacity="0.5" />
                      <line x1="65" y1="55" x2="75" y2="55" stroke="#fff" strokeWidth="1" opacity="0.5" />
                      <circle cx="38" cy="42" r="6" fill="#FFB6C1" opacity="0.3" />
                      <circle cx="62" cy="42" r="6" fill="#FFB6C1" opacity="0.3" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>Kucing Pungut</h3>
                  <p style={{ fontSize: '0.8rem', color: '#00d4aa', fontWeight: 600, marginBottom: '0.75rem' }}>Chief Executive Officer (CEO)</p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '1rem' }}>
                    Ditemukan di depan kantor tahun 2023, Kucing Pungut naik dari status kucing liar menjadi CEO Code.ai.
                    Kecerdasannya dalam menemukan bug (dan mengejar laser pointer) tidak tertandingi.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '100px', background: 'rgba(0,212,170,0.08)', color: '#00d4aa', border: '1px solid rgba(0,212,170,0.15)' }}>🐛 Bug Hunter</span>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '100px', background: 'rgba(86,156,214,0.08)', color: '#569cd6', border: '1px solid rgba(86,156,214,0.15)' }}>⌨️ Keyboard Warmer</span>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '100px', background: 'rgba(206,145,120,0.08)', color: '#ce9178', border: '1px solid rgba(206,145,120,0.15)' }}>😴 Nap Manager</span>
                  </div>
                </div>
                <div style={{
                  padding: '2rem', textAlign: 'center',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '16px', transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    width: '120px', height: '120px', margin: '0 auto 1.25rem',
                    borderRadius: '50%', overflow: 'hidden',
                    background: 'linear-gradient(135deg, rgba(0,153,255,0.1), rgba(0,212,170,0.1))',
                    border: '2px solid rgba(0,153,255,0.2)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg viewBox="0 0 100 100" width="80" height="80" fill="none">
                      <circle cx="50" cy="55" r="28" fill="#8B4513" />
                      <circle cx="50" cy="55" r="25" fill="#A0522D" />
                      <ellipse cx="50" cy="70" rx="12" ry="8" fill="#D2691E" />
                      <circle cx="42" cy="48" r="4" fill="#fff" />
                      <circle cx="58" cy="48" r="4" fill="#fff" />
                      <circle cx="43" cy="47" r="2.5" fill="#111" />
                      <circle cx="59" cy="47" r="2.5" fill="#111" />
                      <ellipse cx="50" cy="55" rx="4" ry="3" fill="#111" />
                      <path d="M46 59 Q50 64 54 59" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      <path d="M32 32 L40 18 L46 35" fill="#8B4513" />
                      <path d="M68 32 L60 18 L54 35" fill="#8B4513" />
                      <path d="M33 33 L40 20 L45 34" fill="#DEB887" />
                      <path d="M67 33 L60 20 L55 34" fill="#DEB887" />
                      <path d="M35 75 Q30 90 20 95" stroke="#8B4513" strokeWidth="5" fill="none" strokeLinecap="round" />
                      <path d="M65 75 Q70 90 80 95" stroke="#8B4513" strokeWidth="5" fill="none" strokeLinecap="round" />
                      <path d="M35 75 Q30 90 20 95" stroke="#A0522D" strokeWidth="3" fill="none" strokeLinecap="round" />
                      <path d="M65 75 Q70 90 80 95" stroke="#A0522D" strokeWidth="3" fill="none" strokeLinecap="round" />
                      <circle cx="38" cy="42" r="5" fill="#DEB887" opacity="0.3" />
                      <circle cx="62" cy="42" r="5" fill="#DEB887" opacity="0.3" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>Rakaputu</h3>
                  <p style={{ fontSize: '0.8rem', color: '#0099ff', fontWeight: 600, marginBottom: '0.75rem' }}>Chief Technology Officer (CTO)</p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '1rem' }}>
                    Rakaputu adalah anjing yang selalu setia menemani tim coding sampai larut malam.
                    Dia bertanggung jawab memastikan server tetap online (dengan cara mengencingi kabel server).
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '100px', background: 'rgba(0,153,255,0.08)', color: '#0099ff', border: '1px solid rgba(0,153,255,0.15)' }}>🛡️ Uptime Guardian</span>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '100px', background: 'rgba(206,145,120,0.08)', color: '#ce9178', border: '1px solid rgba(206,145,120,0.15)' }}>🍕 Pizza Tester</span>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '100px', background: 'rgba(0,212,170,0.08)', color: '#00d4aa', border: '1px solid rgba(0,212,170,0.15)' }}>🐾 Deploy Specialist</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>Our Story</h2>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Code.ai started as an internal tool at a fast-growing tech company. The engineering team was spending 40% of their time in code review — catching the same issues over and over. We built a machine learning model fine-tuned on 10 million real PRs and turned it into an automated review bot.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '1rem' }}>
                The results were immediate: review time dropped from 2 days to 15 minutes, and the team shipped 3x faster. Other teams at the company asked for access, then other companies. By 2025, Code.ai was processing over 5 million generations per month.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
                Today, Code.ai is used by over 50,000 teams worldwide, from solo developers to Fortune 500 enterprises. We&rsquo;re backed by leading VCs and have offices in Jakarta, Singapore, and San Francisco.
              </p>
            </div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Our Values</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}>
              {values.map((v, i) => (
                <div key={i} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', color: 'rgba(255,255,255,0.85)' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{v.desc}</p>
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
