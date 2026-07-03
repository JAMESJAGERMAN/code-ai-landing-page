import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const releases = [
  { version: 'v2.5.1', date: 'June 28, 2026', tag: 'Latest', items: ['Fixed monorepo context resolution for pnpm workspaces', 'Improved code review accuracy on React Server Components', 'Reduced memory usage in context engine by 40%'] },
  { version: 'v2.5.0', date: 'June 15, 2026', tag: 'Major', items: ['New: GitLab CI native integration', 'New: Multi-model AI with automatic fallback', 'Improved: Deployment rollback now completes in under 2s', 'Fixed: SSO token refresh handling', 'Deprecated: Legacy v1 API — migrate to v2'] },
  { version: 'v2.4.2', date: 'June 1, 2026', tag: '', items: ['Fixed: PR review comments not appearing on GitHub Checks tab', 'Fixed: Auth token expiry causing silent failures', 'Improved: Test generation now covers 15% more edge cases'] },
  { version: 'v2.4.1', date: 'May 20, 2026', tag: '', items: ['Added --dry-run flag to generate command', 'Improved error messages for misconfigured projects', 'Fixed: VS Code extension not activating on remote SSH sessions'] },
  { version: 'v2.4.0', date: 'May 5, 2026', tag: 'Major', items: ['New: JetBrains IDE plugin (IntelliJ, WebStorm, PyCharm, GoLand)', 'New: Team analytics dashboard', 'New: Custom AI model training (Enterprise)', 'Improved: Generation speed improved by 3x', 'Updated: Minimum Node.js version is now 18'] },
  { version: 'v2.3.1', date: 'April 22, 2026', tag: '', items: ['Fixed: Context engine not detecting Next.js app router', 'Fixed: Code blocks in reviews were missing syntax highlighting', 'Improved: Login flow now supports device authorization'] },
  { version: 'v2.3.0', date: 'April 8, 2026', tag: 'Major', items: ['New: GitHub Actions auto-review on every PR', 'New: Security sandbox for generated code', 'New: Integration with Discord bot', 'Improved: CLI output now includes progress indicators'] },
  { version: 'v2.2.0', date: 'March 20, 2026', tag: '', items: ['New: Auto test generation (Jest, Vitest, Pytest)', 'New: One-click deploy with auto-rollback', 'Improved: Context engine now supports Turborepo'] },
  { version: 'v2.1.0', date: 'March 1, 2026', tag: '', items: ['New: Config file format updated with new options', 'New: Experimental Rust code generation', 'Fixed: Windows path resolution issues'] },
  { version: 'v2.0.0', date: 'February 10, 2026', tag: 'Major', items: ['Complete rewrite of the code generation engine', 'New: Context engine with full project awareness', 'New: Multi-step generation with refinement', 'New: VS Code extension with inline completions', 'Breaking: Config file format changed'] },
];

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            <p className="section-label">Changelog</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              Release notes
            </h1>
            <p className="section-sub">
              Every release of Code.ai is documented here.
            </p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container" style={{ maxWidth: '720px' }}>
            {releases.map((r, i) => (
              <div key={i} style={{
                padding: '1.5rem 0',
                borderBottom: i < releases.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <code style={{ fontSize: '0.95rem', fontWeight: 700, color: '#00d4aa' }}>{r.version}</code>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>{r.date}</span>
                  {r.tag && (
                    <span style={{
                      fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase',
                      padding: '0.15rem 0.6rem', borderRadius: '100px',
                      background: 'rgba(0,212,170,0.1)', color: '#00d4aa',
                      border: '1px solid rgba(0,212,170,0.2)',
                    }}>
                      {r.tag}
                    </span>
                  )}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {r.items.map((item, j) => (
                    <li key={j} style={{
                      padding: '0.25rem 0', fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.6)', lineHeight: 1.6,
                      display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                    }}>
                      <span style={{ color: '#00d4aa', flexShrink: 0 }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
