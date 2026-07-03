import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo}>
              <span style={{ color: '#fff' }}>code</span>
              <span style={{ color: '#00d4aa' }}>.</span>
              <span style={{
                background: 'linear-gradient(135deg, #00d4aa, #0099ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>ai</span>
            </a>
            <p>AI that writes your code. Inside the tools you already use.</p>
            <div className={styles.social}>
              <a href="#" aria-label="GitHub">GH</a>
              <a href="#" aria-label="Twitter">X</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Discord">DC</a>
            </div>
          </div>
          <div className={styles.col}>
            <h4>Product</h4>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/changelog">Changelog</a>
            <a href="/roadmap">Roadmap</a>
          </div>
          <div className={styles.col}>
            <h4>Resources</h4>
            <a href="/docs">Documentation</a>
            <a href="/api-reference">API Reference</a>
            <a href="/guides">Guides</a>
            <a href="/community">Community</a>
          </div>
          <div className={styles.col}>
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2026 Code.ai. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
