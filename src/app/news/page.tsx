import type { Metadata } from "next";
import styles from "./news.module.css";

export const metadata: Metadata = {
  title: "News | Salalihini Wasanthaya 2026",
  description: "Latest news and announcements from Salalihini Wasanthaya 2026.",
};

const articles = [
  {
    id: 1,
    date: "February 20, 2026",
    category: "Announcement",
    title: "Tickets Now Available for Salalihini Wasanthaya 2026",
    excerpt:
      "We are delighted to announce that tickets for this year's grand event are now available online and at selected outlets island-wide.",
  },
  {
    id: 2,
    date: "February 15, 2026",
    category: "Rehearsals",
    title: "Behind the Scenes: Rehearsals Begin for the 2026 Season",
    excerpt:
      "Our talented performers have started their intensive rehearsal schedule as we prepare for the biggest show yet. Get an exclusive glimpse backstage.",
  },
  {
    id: 3,
    date: "February 10, 2026",
    category: "Artists",
    title: "Meet the Lead Artists of Salalihini Wasanthaya 2026",
    excerpt:
      "This year we've assembled an extraordinary lineup of musicians, dancers, and visual artists from across Sri Lanka and beyond.",
  },
  {
    id: 4,
    date: "January 28, 2026",
    category: "Venue",
    title: "New Venue Announced – Nelum Pokuna Mahinda Rajapaksa Theatre",
    excerpt:
      "We are proud to confirm that Salalihini Wasanthaya 2026 will be held at the iconic Nelum Pokuna Theatre in Colombo.",
  },
  {
    id: 5,
    date: "January 15, 2026",
    category: "Sponsorship",
    title: "Welcoming Our Partners and Sponsors for 2026",
    excerpt:
      "We extend our heartfelt gratitude to all sponsors and partners who make this celebration possible year after year.",
  },
  {
    id: 6,
    date: "January 5, 2026",
    category: "Announcement",
    title: "Salalihini Wasanthaya 2026 – Save the Date!",
    excerpt:
      "Mark your calendars! Salalihini Wasanthaya 2026 will take place on March 21–23, the first weekend of spring.",
  },
];

const categoryColors: Record<string, string> = {
  Announcement: "var(--color-secondary)",
  Rehearsals:   "var(--color-primary-dark)",
  Artists:      "#2E7B4E",
  Venue:        "#1A5276",
  Sponsorship:  "#6C3483",
};

export default function NewsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>News</h1>
          <p className={styles.pageSubtitle}>Latest updates and announcements</p>
        </div>
      </section>

      {/* ── Articles ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {articles.map((a) => (
              <article key={a.id} className={styles.card}>
                <header className={styles.cardHeader}>
                  <span
                    className={styles.category}
                    style={{ backgroundColor: categoryColors[a.category] ?? "var(--color-secondary)" }}
                  >
                    {a.category}
                  </span>
                  <time className={styles.date}>{a.date}</time>
                </header>
                <h2 className={styles.cardTitle}>{a.title}</h2>
                <p className={styles.excerpt}>{a.excerpt}</p>
                <button className={styles.readMore}>Read More →</button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
