'use client';

import styles from './CTAFinal.module.css';

export default function CTAFinal() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector('input[type="email"]') as HTMLInputElement;
    if (input && input.value.trim()) {
      alert(`Thanks! We'll be in touch at ${input.value.trim()}`);
      input.value = '';
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.box}>
          <h2 className={styles.title}>Ready to ship faster?</h2>
          <p className={styles.sub}>
            Join 15,000+ developers already using Code.ai. Get started free — no credit card required.
          </p>
          <form className={styles.form} onSubmit={onSubmit}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn-primary">Get Started Free</button>
          </form>
          <p className={styles.note}>Free forever. No credit card needed.</p>
        </div>
      </div>
    </section>
  );
}
