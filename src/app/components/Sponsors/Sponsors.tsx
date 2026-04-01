import SectionLabel from "../SectionLabel/SectionLabel";
import styles from "./Sponsors.module.css";

const sponsors = [
  { src: "/images/sponsors/01.Sri Lanka.png", alt: "Sri Lanka" },
  { src: "/images/sponsors/02.SLIC.png", alt: "SLIC" },
  { src: "/images/sponsors/03.Melwa.png", alt: "Melwa" },
  { src: "/images/sponsors/04.Prima KottuMe.png", alt: "Prima KottuMe" },
  { src: "/images/sponsors/05.Pepsi.png", alt: "Pepsi" },
  { src: "/images/sponsors/06.Nestle.png", alt: "Nestle" },
  { src: "/images/sponsors/07.HNB.png", alt: "HNB" },
  { src: "/images/sponsors/08.Edinbrough.png", alt: "Edinbrough" },
];

export default function Sponsors() {
  return (
    <section className={`section ${styles.sponsors}`}>
      <div className="container">
        <SectionLabel label="SPONSORS" />

        <div className={styles.grid}>
          {sponsors.map((sponsor) => (
            <div key={sponsor.src} className={styles.logoCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className={styles.media}
                loading="lazy"
                draggable={false}
              />
              <div className={styles.hoverName} aria-hidden>
                <span className={styles.name}>{sponsor.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
