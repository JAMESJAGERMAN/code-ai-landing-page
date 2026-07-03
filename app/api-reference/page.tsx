import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const endpoints = [
  {
    method: 'POST', path: '/v1/generate',
    color: '#00d4aa',
    desc: 'Generate code from a natural language prompt.',
    params: [
      ['prompt', 'string (required)', 'Description of what to generate'],
      ['language', 'string', 'Target language: typescript, python, go, rust'],
      ['framework', 'string', 'Target framework: react, next, vue, express'],
      ['options.temperature', 'number', 'Creativity level (0-1, default: 0.2)'],
      ['options.maxTokens', 'number', 'Max output tokens (default: 4096)'],
    ],
  },
  {
    method: 'POST', path: '/v1/review',
    color: '#569cd6',
    desc: 'Submit code for AI-powered review.',
    params: [
      ['code', 'string (required)', 'Source code or diff to review'],
      ['language', 'string', 'Language for syntax-aware analysis'],
      ['strict', 'boolean', 'Enable stricter checks (default: false)'],
      ['format', 'string', 'Output: markdown, json, html'],
    ],
  },
  {
    method: 'POST', path: '/v1/deploy',
    color: '#dcdcaa',
    desc: 'Trigger a deployment to your configured environment.',
    params: [
      ['environment', 'string (required)', 'production, staging, or preview'],
      ['region', 'string', 'Target deployment region'],
      ['skipTests', 'boolean', 'Skip test suite (default: false)'],
      ['autoRollback', 'boolean', 'Auto-rollback on failure (default: true)'],
    ],
  },
  {
    method: 'POST', path: '/v1/test',
    color: '#ce9178',
    desc: 'Auto-generate tests for your code.',
    params: [
      ['target', 'string (required)', 'File or directory to generate tests for'],
      ['framework', 'string', 'jest, vitest, pytest (auto-detected)'],
      ['coverage', 'number', 'Target coverage percentage (0-100)'],
    ],
  },
  {
    method: 'GET', path: '/v1/analytics',
    color: '#6a9955',
    desc: 'Retrieve team analytics and usage data.',
    params: [
      ['period', 'string', '7d, 30d, 90d (default: 30d)'],
      ['teamId', 'string', 'Team ID (Enterprise only)'],
      ['format', 'string', 'json or csv (default: json)'],
    ],
  },
  {
    method: 'POST', path: '/v1/api-keys',
    color: '#c586c0',
    desc: 'Create and manage API keys.',
    params: [
      ['name', 'string (required)', 'Label for the API key'],
      ['env', 'string', 'Environment: development, staging, production'],
      ['permissions', 'string[]', 'Comma-separated: generate,review,deploy,test'],
    ],
  },
];

export default function ApiReferencePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <p className="section-label">API Reference</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              REST API
            </h1>
            <p className="section-sub">
              All endpoints require authentication via <code style={{ padding: '0.15rem 0.4rem', background: 'rgba(0,212,170,0.08)', borderRadius: '4px', color: '#00d4aa', fontSize: '0.9rem' }}>Authorization: Bearer</code> header.
            </p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '2rem',
            }}>
              <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Base URL</h3>
              <code style={{ fontSize: '0.9rem', color: '#00d4aa' }}>https://api.code.ai</code>
            </div>
            {endpoints.map((ep, i) => (
              <div key={i} style={{
                padding: '1.5rem', marginBottom: '1rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.55rem',
                    borderRadius: '4px', background: ep.color, color: '#0a0a0a',
                  }}>
                    {ep.method}
                  </span>
                  <code style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{ep.path}</code>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', lineHeight: 1.6 }}>{ep.desc}</p>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Parameter</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Type</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ep.params.map(([param, type, desc], j) => (
                      <tr key={j}>
                        <td style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}><code style={{ color: '#00d4aa', fontSize: '0.8rem' }}>{param}</code></td>
                        <td style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}><span style={{ fontSize: '0.75rem', padding: '0.1rem 0.45rem', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', color: 'rgba(255,255,255,0.5)' }}>{type}</span></td>
                        <td style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.5)' }}>{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
