import styles from './TrustedBy.module.css';

interface LogoItem {
  label: string;
  svg: React.ReactNode;
}

const logos: LogoItem[] = [
  {
    label: 'Google',
    svg: (
      <svg viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="white" />
        <path d="M22.5 16.5c0-.6-.05-1.18-.15-1.73H16.3v3.28h3.48a3.9 3.9 0 0 1-1.69 2.56v2.13h2.74c1.6-1.47 2.52-3.64 2.52-6.24z" fill="#4285F4" />
        <path d="M16.3 23c2.28 0 4.2-.76 5.6-2.06l-2.73-2.13c-.76.5-1.73.8-2.87.8-2.2 0-4.06-1.49-4.73-3.49H8.75v2.2A8.42 8.42 0 0 0 16.3 23z" fill="#34A853" />
        <path d="M11.57 18.12a5.07 5.07 0 0 1-.27-1.62c0-.56.1-1.1.27-1.62v-2.2H8.75a8.46 8.46 0 0 0 0 7.64l2.82-2.2z" fill="#FBBC05" />
        <path d="M16.3 10.37c1.24 0 2.35.43 3.23 1.27l2.42-2.42A8.38 8.38 0 0 0 16.3 7a8.42 8.42 0 0 0-7.55 4.67l2.82 2.2c.67-2 2.53-3.5 4.73-3.5z" fill="#EA4335" />
        <text x="40" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600" fontSize="16" fill="currentColor">Google</text>
      </svg>
    ),
  },
  {
    label: 'BNI',
    svg: (
      <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#005B3A" />
        <text x="16" y="22" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="16" fill="#FFD700">BNI</text>
        <text x="40" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="16" fill="currentColor">BNI</text>
      </svg>
    ),
  },
  {
    label: 'Mandiri',
    svg: (
      <svg viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#003DA5" />
        <path d="M16 8l4 8h-8l4-8z" fill="#FFD700" />
        <text x="40" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="16" fill="currentColor">Mandiri</text>
      </svg>
    ),
  },
  {
    label: 'Gojek',
    svg: (
      <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#00AA13" />
        <path d="M16 9c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 11.5A4.5 4.5 0 1 1 16 16a4.5 4.5 0 0 1 0 4.5z" fill="#fff" />
        <path d="M16 16m-2.5 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" fill="#00AA13" />
        <text x="40" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="16" fill="currentColor">Gojek</text>
      </svg>
    ),
  },
  {
    label: 'Tokopedia',
    svg: (
      <svg viewBox="0 0 170 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#4AB459" />
        <circle cx="16" cy="16" r="7" fill="#fff" />
        <path d="M16 10v12M10 16h12" stroke="#4AB459" strokeWidth="2.5" strokeLinecap="round" />
        <text x="40" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="16" fill="currentColor">Tokopedia</text>
      </svg>
    ),
  },
  {
    label: 'Traveloka',
    svg: (
      <svg viewBox="0 0 170 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#2D3E50" />
        <path d="M16 8l4 8H12l4-8z" fill="#00D4AA" />
        <rect x="12" y="17" width="8" height="3" rx="1" fill="#00D4AA" />
        <text x="40" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="16" fill="currentColor">Traveloka</text>
      </svg>
    ),
  },
  {
    label: 'Biks.AI',
    svg: (
      <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#201E1A" />
        <path d="M22 11H10a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1.5l2.5 2.5V23H22a2 2 0 0 0 2-2V13a2 2 0 0 0-2-2z" fill="#A8B8BC" />
        <circle cx="16" cy="17" r="2" fill="#201E1A" />
        <text x="40" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="16" fill="currentColor">Biks</text>
        <text x="72" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="300" fontSize="16" fill="currentColor">.AI</text>
      </svg>
    ),
  },
  {
    label: 'Cekat.AI',
    svg: (
      <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#000" />
        <path d="M22.25 4h-8.5a1 1 0 0 0-.96.73l-5.54 19.4a.5.5 0 0 0 .62.62l5.05-1.44a2 2 0 0 0 1.38-1.4l3.22-11.66a.5.5 0 0 1 .96 0l3.22 11.67a2 2 0 0 0 1.38 1.39l5.05 1.44a.5.5 0 0 0 .62-.62l-5.54-19.4a1 1 0 0 0-.96-.73Z" fill="#fff" />
        <path fill="url(#cg2)" d="M18 28a7.63 7.63 0 0 1-5-2c-1.4 2.1-.35 4.35.6 5.55.14.17.41.07.47-.15.44-1.8 2.93-1.22 2.93.6 0 2.28.87 3.4 1.72 3.81.34.16.59-.2.49-.56-.31-1.05-.29-2.46 1.29-3.25 3-1.5 3.17-4.83 2.5-6-.67.67-2.6 2-5 2Z" />
        <text x="40" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="16" fill="currentColor">Cekat</text>
        <text x="82" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="300" fontSize="16" fill="currentColor">.AI</text>
        <defs>
          <linearGradient id="cg2" x1="16" x2="16" y1="32" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#000" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function TrustedBy() {
  return (
    <section className="section trusted" id="trusted">
      <div className="container">
        <p className="section-label">Trusted by</p>
        <div className={styles.trackWrapper}>
          <div className={styles.track}>
            {[...logos, ...logos].map((l, i) => (
              <div key={`${l.label}-${i}`} className={styles.logo}>
                {l.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
