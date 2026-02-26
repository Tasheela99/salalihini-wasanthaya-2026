import type { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About | Salalihini Wasanthaya 2026",
  description: "Learn about the history, vision, and people behind Salalihini Wasanthaya.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>About Us</h1>
          <p className={styles.pageSubtitle}>
            The story behind Salalihini Wasanthaya
          </p>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────── */}
      <section className="section">
        <div className={`container ${styles.two}`}>
          <div className={styles.textBlock}>
            <h2 className={styles.heading}>Our Story</h2>
            <p>
              Salalihini Wasanthaya — &ldquo;The Spring of the Hanging Parrot&rdquo; — was
              born from a desire to bring Sri Lanka&apos;s vibrant cultural heritage
              to life on a world-class stage. Founded in 2010, the annual show
              has grown from a small community gathering into one of the island&apos;s
              most anticipated cultural events.
            </p>
            <p>
              Each year, hundreds of performers — musicians, dancers, artists —
              come together to create an experience that is at once deeply rooted
              in tradition and thrillingly contemporary.
            </p>
          </div>
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <span>🌸</span>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ──────────────────────────────── */}
      <section className={`section ${styles.visionSection}`}>
        <div className="container">
          <div className={styles.vmGrid}>
            <div className={styles.vmCard}>
              <h3 className={styles.vmTitle}>Our Vision</h3>
              <p>
                To be the premier platform celebrating Sri Lankan arts and
                culture, inspiring future generations to embrace and carry
                forward their heritage with pride.
              </p>
            </div>
            <div className={styles.vmCard}>
              <h3 className={styles.vmTitle}>Our Mission</h3>
              <p>
                To produce exceptional artistic events that foster cultural
                appreciation, nurture emerging talent, and unite communities
                through shared creative experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">The people who make the magic happen.</p>
          <div className={styles.teamGrid}>
            {[
              { name: "Nimal Perera",    role: "Artistic Director" },
              { name: "Sithara Silva",   role: "Choreography Lead" },
              { name: "Kasun Fernando",  role: "Music Director" },
              { name: "Dilini Wickrama", role: "Production Manager" },
            ].map((m) => (
              <div key={m.name} className={styles.teamCard}>
                <div className={styles.avatar}>{m.name[0]}</div>
                <h4 className={styles.memberName}>{m.name}</h4>
                <p className={styles.memberRole}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
