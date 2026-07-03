'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const channels = [
  { name: 'Discord', members: '12,400+', desc: 'Real-time chat with the Code.ai team and community. Get help, share tips, and showcase your work.', icon: '♪', link: '#', color: '#5865F2' },
  { name: 'GitHub', members: '8,200+', desc: 'Star us on GitHub, report issues, contribute to open-source, and follow development.', icon: 'GH', link: '#', color: '#fff' },
  { name: 'Twitter / X', members: '24,500+', desc: 'Follow @code_ai for product updates, tips, and community highlights.', icon: 'X', link: '#', color: '#fff' },
  { name: 'Stack Overflow', members: '3,100+', desc: 'Ask and answer questions tagged with code-ai. Community-powered support.', icon: 'SO', link: '#', color: '#F58025' },
  { name: 'Reddit', members: '5,800+', desc: 'Join r/codeai for discussions, showcases, and feature requests.', icon: 'R', link: '#', color: '#FF4500' },
  { name: 'LinkedIn', members: '9,600+', desc: 'Connect with the Code.ai team and follow company updates.', icon: 'in', link: '#', color: '#0A66C2' },
];

const resources = [
  { title: 'Community Forum', desc: 'Discussion boards for feature requests, tips, and troubleshooting.' },
  { title: 'Showcase', desc: 'Share what you built with Code.ai. Get featured on our homepage.' },
  { title: 'Templates', desc: 'Community-contributed generation templates for every framework.' },
  { title: 'Events', desc: 'Webinars, hackathons, and meetups. Join the next community event.' },
];

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <div className="container">
            <p className="section-label">Community</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              Join the Code.ai community
            </h1>
            <p className="section-sub">
              Connect with thousands of developers building faster with AI.
            </p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
              gap: '1rem',
              marginBottom: '3rem',
            }}>
              {channels.map((c, i) => (
                <a key={i} href={c.link} style={{
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,170,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', fontWeight: 700, color: c.color,
                    }}>
                      {c.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>{c.name}</h3>
                      <span style={{ fontSize: '0.75rem', color: '#00d4aa' }}>{c.members} members</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, flex: 1 }}>{c.desc}</p>
                </a>
              ))}
            </div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Community Resources</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '0.85rem',
            }}>
              {resources.map((r, i) => (
                <div key={i} style={{
                  padding: '1.25rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.35rem', color: 'rgba(255,255,255,0.85)' }}>{r.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{r.desc}</p>
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
