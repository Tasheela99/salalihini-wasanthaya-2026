import Link from "next/link";
import SectionLabel from "../SectionLabel/SectionLabel";
import styles from "./AttractionsPreview.module.css";

const attractions = [
  {
    id: 1,
    image: "/images/05.jpeg",
    title: "Lover's Leap",
    sinhala: "ලවර්ස් ලීප්",
    description:
      "A beautiful waterfall viewpoint surrounded by tea plantations and misty hills.",
  },
  {
    id: 2,
    image: "/images/01.jpeg",
    title: "Horton Plains National Park",
    sinhala: "හෝර්ටන් තැන්න",
    description:
      "Home to World's End and beautiful cloud-forest trails. Best visited early morning.",
  },
  {
    id: 3,
    image: "/images/03.jpeg",
    title: "Hakgala Botanical Garden",
    sinhala: "හක්ගල උද්‍යානය",
    description:
      "A must-see garden famous for roses, orchids, and cool-climate flora.",
  },
];

export default function AttractionsPreview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionLabel label="ATTRACTIONS" />

        <div className={styles.cardGrid}>
          {attractions.map((a) => (
            <div key={a.id} className={styles.card}>
              <div className={styles.imageWrap}>
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

        <div className={styles.viewMoreWrap}>
          <Link href="/attractions" className={styles.viewMoreBtn}>
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
