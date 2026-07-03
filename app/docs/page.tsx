import Navbar from '@/components/Navbar';
import Documentation from '@/components/Documentation';
import Footer from '@/components/Footer';

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Docs hero */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <p className="section-label">Documentation</p>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              Everything you need to ship faster
            </h1>
            <p className="section-sub">
              Comprehensive docs, API references, and guides to get the most out of Code.ai.
            </p>
          </div>
        </section>
        <Documentation />
      </main>
      <Footer />
    </>
  );
}
