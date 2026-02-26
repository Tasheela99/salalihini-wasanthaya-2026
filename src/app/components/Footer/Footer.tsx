import {
    faFacebook,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "News",    href: "/news" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <h3 className={styles.brandTitle}>සළලිහිණි වසන්තය</h3>
          <p className={styles.brandSub}>Salalihini Wasanthaya 2026</p>
          <p className={styles.brandDesc}>
            Celebrating the spirit of spring through art, culture, and music.
          </p>
        </div>

        {/* Quick links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.footerLink}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <FontAwesomeIcon icon={faLocationDot} /> Colombo, Sri Lanka
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +94 11 234 5678
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> info@salalihini.lk
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Follow Us</h4>
          <div className={styles.socials}>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FontAwesomeIcon icon={faYoutube} /> YouTube
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} Salalihini Wasanthaya. All rights reserved.</p>
      </div>
    </footer>
  );
}
