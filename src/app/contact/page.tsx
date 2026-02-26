import type { Metadata } from "next";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Salalihini Wasanthaya 2026",
  description:
    "Get in touch with the Salalihini Wasanthaya team for enquiries, sponsorships, and more.",
};

const contactCards = [
  {
    emoji: "📍",
    title: "Visit Us",
    lines: [
      "Salalihini Wasanthaya Office",
      "No. 45, Lotus Road",
      "Colombo 01, Sri Lanka",
    ],
  },
  {
    emoji: "📞",
    title: "Call Us",
    lines: ["+94 11 234 5678", "+94 77 123 4567"],
  },
  {
    emoji: "✉️",
    title: "Email Us",
    lines: ["info@salalihini.lk", "tickets@salalihini.lk"],
  },
  {
    emoji: "🕐",
    title: "Office Hours",
    lines: ["Mon – Fri: 9:00 AM – 5:00 PM", "Sat: 9:00 AM – 1:00 PM", "Sun: Closed"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtitle}>
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* ── Contact Cards ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.cardGrid}>
            {contactCards.map((c) => (
              <div key={c.title} className={styles.card}>
                <span className={styles.cardEmoji}>{c.emoji}</span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                {c.lines.map((line) => (
                  <p key={line} className={styles.cardLine}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────── */}
      <section className={`section ${styles.formSection}`}>
        <div className="container">
          <div className={styles.formWrapper}>
            <div className={styles.formInfo}>
              <h2 className={styles.formHeading}>Send Us a Message</h2>
              <p className={styles.formDesc}>
                Whether you have a question about tickets, sponsorships,
                performances, or anything else, our team is ready to answer
                your queries.
              </p>
              <div className={styles.socialLinks}>
                <span className={styles.socialLabel}>Follow us</span>
                <div className={styles.socialIcons}>
                  <button type="button" aria-label="Facebook" className={styles.socialIcon}>📘</button>
                  <button type="button" aria-label="Instagram" className={styles.socialIcon}>📸</button>
                  <button type="button" aria-label="YouTube" className={styles.socialIcon}>▶️</button>
                  <button type="button" aria-label="Twitter" className={styles.socialIcon}>🐦</button>
                </div>
              </div>
            </div>

            <form className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={styles.input}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={styles.input}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className={styles.input}
                  placeholder="How can we help?"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  className={styles.textarea}
                  rows={5}
                  placeholder="Your message..."
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ──────────────────────────────── */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle">
            Located in the heart of Colombo, easily accessible by public
            transport.
          </p>
          <div className={styles.mapPlaceholder}>
            <span>🗺️ Map will be displayed here</span>
          </div>
        </div>
      </section>
    </>
  );
}
