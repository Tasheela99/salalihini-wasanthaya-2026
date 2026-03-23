import Link from "next/link";
import SectionLabel from "../SectionLabel/SectionLabel";
import styles from "./AttractionsPreview.module.css";

const attractions = [
  {
    id: 1,
    image: "/images/28.jpeg",
    title: "Scenic Nature",
    sinhala: "සොබාදහම",
    description:
      "Explore the misty mountains, lush tea estates, and world-famous botanical gardens of Nuwara Eliya.",
  },
  {
    id: 2,
    image: "/images/34.jpeg",
    title: "Cultural Performances",
    sinhala: "සාම්ප්‍රදායික ප්‍රදර්ශන",
    description:
      "Experience traditional Kandyan dance, drum performances, and vibrant cultural pageants.",
  },
  {
    id: 3,
    image: "/images/37.jpeg",
    title: "Sri Lankan Cuisine",
    sinhala: "ශ්‍රී ලංකා ආහාරය",
    description:
      "Taste authentic rice & curry, hoppers, kottu roti, and sweet treats from local food artisans.",
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
