import {
    faClock,
    faEnvelope,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import SectionLabel from "../components/SectionLabel/SectionLabel";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Salalihini Wasanthaya 2026",
  description:
    "Get in touch with the Salalihini Wasanthaya team for enquiries, sponsorships, and more.",
};

const contactCards = [
  {
    icon: faLocationDot,
    title: "Visit Us",
    lines: [
      "Salalihini Wasanthaya Office",
      "No. 45, Lotus Road",
      "Colombo 01, Sri Lanka",
    ],
  },
  {
    icon: faPhone,
    title: "Call Us",
    lines: ["+94 11 234 5678", "+94 77 123 4567"],
  },
  {
    icon: faEnvelope,
    title: "Email Us",
    lines: ["info@salalihini.lk", "tickets@salalihini.lk"],
  },
  {
    icon: faClock,
    title: "Office Hours",
    lines: [
      "Mon – Fri: 9:00 AM – 5:00 PM",
      "Sat: 9:00 AM – 1:00 PM",
      "Sun: Closed",
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Contact Cards ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionLabel label="CONTACTS" />
          <div className={styles.cardGrid}>
            {contactCards.map((c) => (
              <div key={c.title} className={styles.card}>
                <span className={styles.cardIconWrap}>
                  <FontAwesomeIcon icon={c.icon} className={styles.cardIcon} />
                </span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                {c.lines.map((line) => (
                  <p key={line} className={styles.cardLine}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionLabel label="FIND US" />
          <div className={styles.mapCard}>
            <iframe
              className={styles.mapFrame}
              title="Colombo Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.838%2C6.930%2C79.852%2C6.942&layer=mapnik&marker=6.936%2C79.845"
              loading="lazy"
            />
            <div className={styles.mapFooter}>
              <div className={styles.mapLocation}>Colombo 01, Sri Lanka</div>
              <a
                className={styles.mapLink}
                href="https://www.openstreetmap.org/?mlat=6.936&mlon=79.845#map=15/6.936/79.845"
                target="_blank"
                rel="noreferrer"
              >
                View Larger Map →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}