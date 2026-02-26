import type { Metadata } from "next";
import styles from "./attractions.module.css";

export const metadata: Metadata = {
  title: "Attractions | Salalihini Wasanthaya 2026",
  description:
    "Discover the exciting attractions and performances at Salalihini Wasanthaya 2026.",
};

const attractions = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    icon: "\uD83D\uDDBC\uFE0F",
    title: "Scenic Nature",
    sinhala: "සොබාදහම",
    description:
      "Explore the misty mountains, lush tea estates, and world-famous botanical gardens of Nuwara Eliya.",
    category: "Nature",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    icon: "\uD83D\uDC83",
    title: "Cultural Performances",
    sinhala: "සාම්ප්‍රදායික ප්‍රදර්ශන",
    description:
      "Experience traditional Kandyan dance, drum performances, and vibrant cultural pageants.",
    category: "Performance",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    icon: "\uD83C\uDF72",
    title: "Sri Lankan Cuisine",
    sinhala: "ශ්‍රී ලංකා ආහාරය",
    description:
      "Taste authentic rice & curry, hoppers, kottu roti, and sweet treats from local food artisans.",
    category: "Food",
  },
];

const categoryColors: Record<string, string> = {
  Performance: "var(--color-secondary-dark)",
  Music: "var(--color-primary)",
  Theatre: "#6C3483",
  Art: "#1A5276",
  Exhibition: "#2E7B4E",
  Food: "#D4AC0D",
};

export default function AttractionsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}

      <section className={styles.pageHero}>
        <div className="container">
          <div className={styles.heroLabel}>ATTRACTIONS & EXPERIENCES</div>
          <h1 className={styles.heroTitle}>ආකර්ෂණ හා අත්දැකීම්</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.cardGrid}>
            {attractions.map((a) => (
              <div key={a.id} className={styles.attractionCard}>
                <div className={styles.cardImageWrap}>
                  <img
                    src={a.image}
                    alt={a.title}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{a.title}</h3>
                  <div className={styles.cardSinhala}>{a.sinhala}</div>
                  <p className={styles.cardDesc}>{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaTitle}>Don&apos;t Miss Out!</h2>
          <p className={styles.ctaText}>
            Secure your tickets early and be part of the most celebrated
            cultural event of the season.
          </p>
          <a href="/contact" className={styles.ctaBtn}>
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
