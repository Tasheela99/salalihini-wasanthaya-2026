import { faLeaf, faSeedling, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AboutMission.module.css";

const missions = [
  {
    icon: faLeaf,
    title: "Preserving Heritage",
    desc: "We are committed to safeguarding Sri Lanka's rich cultural traditions, ensuring that the timeless art forms of dance, music, and craftsmanship are celebrated and passed on to future generations.",
  },
  {
    icon: faSeedling,
    title: "Nurturing New Talent",
    desc: "Salalihini Wasanthaya provides a platform for emerging artists and performers to showcase their skills alongside seasoned masters, fostering growth and creative expression across all disciplines.",
  },
  {
    icon: faTree,
    title: "Community Unity",
    desc: "Our festival brings together people from every walk of life, building bridges through shared cultural experiences and creating lasting bonds that strengthen the fabric of our communities.",
  },
];

export default function AboutMission() {
  return (
    <section className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imagePlaceholder}>
              <span>1280×852</span>
            </div>
          </div>
          <div className={styles.contentCol}>
            {missions.map((m) => (
              <div key={m.title} className={styles.item}>
                <div className={styles.itemIcon}>
                  <FontAwesomeIcon icon={m.icon} />
                </div>
                <div className={styles.itemText}>
                  <h3 className={styles.itemTitle}>{m.title}</h3>
                  <p className={styles.itemDesc}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
