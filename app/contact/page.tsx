'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <>
        <Navbar />
        <main>
          <section className="section" style={{ paddingTop: '10rem', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '500px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
              <h1 className="section-title" style={{ marginBottom: '1rem' }}>Message sent!</h1>
              <p className="section-sub" style={{ marginBottom: '2rem' }}>We&rsquo;ll get back to you within 24 hours.</p>
              <a href="/" className="btn-primary">Back to Home</a>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <p className="section-label">Contact</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              Get in touch
            </h1>
            <p className="section-sub" style={{ marginBottom: '2rem' }}>
              Have a question, need help, or want to talk about enterprise pricing? We&rsquo;re here.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem' }}>Email</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                    <a href="mailto:hello@code.ai" style={{ color: '#00d4aa' }}>hello@code.ai</a>
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem' }}>Sales</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                    <a href="mailto:sales@code.ai" style={{ color: '#00d4aa' }}>sales@code.ai</a>
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem' }}>Support</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                    <a href="mailto:support@code.ai" style={{ color: '#00d4aa' }}>support@code.ai</a>
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem' }}>Location</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
                    Jakarta, Indonesia<br />
                    Singapore<br />
                    San Francisco, CA
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.3rem', display: 'block' }}>Name</label>
                  <input
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={{
                      width: '100%', padding: '0.7rem 0.9rem',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px', color: '#fff', fontSize: '0.9rem',
                      fontFamily: 'inherit', outline: 'none',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(0,212,170,0.3)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.3rem', display: 'block' }}>Email</label>
                  <input
                    required type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
                      width: '100%', padding: '0.7rem 0.9rem',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px', color: '#fff', fontSize: '0.9rem',
                      fontFamily: 'inherit', outline: 'none',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(0,212,170,0.3)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.3rem', display: 'block' }}>Message</label>
                  <textarea
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={5}
                    style={{
                      width: '100%', padding: '0.7rem 0.9rem',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px', color: '#fff', fontSize: '0.9rem',
                      fontFamily: 'inherit', outline: 'none', resize: 'vertical',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'rgba(0,212,170,0.3)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.8rem', fontSize: '0.9rem' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
