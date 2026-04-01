import { faMusic, faPaintBrush, faTheaterMasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./Features.module.css";

const features = [
  {
    icon: faMusic,
    title: "Music & Performance",
    desc: "World-class artists performing traditional and contemporary Sri Lankan music that captures the soul of our heritage and fills the air with joy.",
    href: "/about",
  },
  {
    icon: faPaintBrush,
    title: "Art Exhibitions",
    desc: "Curated displays celebrating Sri Lankan visual arts, sculpture, and crafts spanning centuries of creative tradition and cultural expression.",
    href: "/gallery",
  },
  {
    icon: faTheaterMasks,
    title: "Cultural Dance",
    desc: "Kandyan and folk dance performances honouring centuries of tradition, bringing ancient stories to life through movement, colour, and rhythm.",
    href: "/about",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIconWrap}>
                <FontAwesomeIcon icon={f.icon} className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
              <Link href={f.href} className={styles.featureLink}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
