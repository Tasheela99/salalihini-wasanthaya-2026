"use client";

import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div className="container">
        <h2 className={styles.title}>Subscribe To Newsletter</h2>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Please fill your email"
            className={styles.input}
            aria-label="Email address"
          />
          <button type="submit" className={styles.btn}>
            Subscribe!
          </button>
        </form>
      </div>
    </section>
  );
}
