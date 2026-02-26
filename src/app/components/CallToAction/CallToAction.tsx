import Link from "next/link";
import styles from "./CallToAction.module.css";

const ctas = [
  {
    title: "Support the Festival",
    subtitle: "Your generosity brings art to life",
    desc: "Salalihini Wasanthaya is powered by the love and support of our community. Every contribution helps us bring together the finest artists, musicians, and dancers to celebrate Sri Lankan culture on the grandest stage.",
    btnLabel: "Donate Now",
    href: "/about",
    variant: "gold" as const,
  },
  {
    title: "Volunteer With Us!",
    subtitle: "Your time makes a difference",
    desc: "Join the dedicated team behind Salalihini Wasanthaya 2026. From backstage coordination to welcoming guests, volunteers are the heartbeat of every unforgettable cultural moment we create together.",
    btnLabel: "Join Now",
    href: "/about",
    variant: "green" as const,
  },
];

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaGrid}>
          {ctas.map((item) => (
            <div key={item.title} className={styles.ctaCard}>
              <h3 className={`${styles.ctaTitle} ${styles[item.variant]}`}>
                {item.title}
              </h3>
              <p className={styles.ctaSubtitle}>{item.subtitle}</p>
              <span className={`${styles.ctaDivider} ${styles[`divider_${item.variant}`]}`} />
              <p className={styles.ctaDesc}>{item.desc}</p>
              <Link
                href={item.href}
                className={`${styles.ctaBtn} ${styles[`btn_${item.variant}`]}`}
              >
                {item.btnLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
