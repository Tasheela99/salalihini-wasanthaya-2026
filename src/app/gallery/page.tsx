import type { Metadata } from "next";
import styles from "./gallery.module.css";

export const metadata: Metadata = {
  title: "Gallery | Salalihini Wasanthaya 2026",
  description: "Browse photos and videos from past Salalihini Wasanthaya events.",
};

const categories = ["All", "Performances", "Backstage", "Art", "Audience"];

const photos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Photo ${i + 1}`,
  category: categories[(i % (categories.length - 1)) + 1],
  emoji: ["🎭", "🎶", "💃", "🎨", "🌸", "🥁", "🎤", "🖼️", "🌺", "🎵", "🎪", "🪁"][i],
}));

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>Gallery</h1>
          <p className={styles.pageSubtitle}>Moments captured in time</p>
        </div>
      </section>

      {/* ── Filter tabs ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.filterBar}>
            {categories.map((c) => (
              <button key={c} className={`${styles.filterBtn} ${c === "All" ? styles.active : ""}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className={styles.grid}>
            {photos.map((p) => (
              <figure key={p.id} className={styles.tile}>
                <div className={styles.tileImg} aria-label={p.label}>
                  <span className={styles.tileEmoji}>{p.emoji}</span>
                </div>
                <figcaption className={styles.tileCaption}>
                  <span className={styles.tileCategory}>{p.category}</span>
                  {p.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
