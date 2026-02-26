import Link from "next/link";
import styles from "./RecentProjects.module.css";

const projects = [
  {
    image: "/placeholder-540x326.svg",
    title: "Kandyan Dance",
    tags: ["Traditional", "Dance"],
    desc: "A vibrant celebration of classical Kandyan dance traditions passed down through generations of Sri Lankan performers.",
    href: "/gallery",
  },
  {
    image: "/placeholder-540x326.svg",
    title: "Drum Circle",
    tags: ["Music", "Performance"],
    desc: "The rhythmic heartbeat of the festival featuring master drummers performing traditional Geta Beraya compositions.",
    href: "/gallery",
  },
  {
    image: "/placeholder-540x326.svg",
    title: "Art Exhibition",
    tags: ["Visual Arts", "Gallery"],
    desc: "Showcasing contemporary and traditional Sri Lankan art pieces from emerging and established local artists.",
    href: "/gallery",
  },
  {
    image: "/placeholder-540x326.svg",
    title: "Folk Theatre",
    tags: ["Theatre", "Cultural"],
    desc: "Traditional folk theatre performances that bring ancient Sri Lankan stories and legends to a modern audience.",
    href: "/gallery",
  },
];

export default function RecentProjects() {
  return (
    <section className={`section ${styles.projects}`}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.headerIcon}>🎭</span>
            <h2 className={styles.headerTitle}>Our Recent Projects</h2>
          </div>
          <Link href="/gallery" className={styles.headerLink}>
            More Projects →
          </Link>
        </div>
        <hr className={styles.divider} />
        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardImage}>
                <div className={styles.cardImagePlaceholder}>
                  <span>540×326</span>
                </div>
              </div>
              <h3 className={styles.cardTitle}>
                <Link href={p.href}>{p.title}</Link>
              </h3>
              <p className={styles.cardTags}>{p.tags.join(", ")}</p>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
