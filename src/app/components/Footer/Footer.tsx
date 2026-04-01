import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./Footer.module.css";

// Keep footer navigation in sync with header navigation
const quickLinks = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  { label: "Attractions", href: "/attractions" },
  { label: "Schedule",    href: "/schedule" },
  { label: "Gallery",     href: "/gallery" },
  { label: "Contact",     href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandLogos} aria-hidden>
            <img
              src="/images/logo.png"
              alt="Rupavahini Logo"
              className={`${styles.brandLogo} ${styles.rupavahiniLogo}`}
            />
            <img
              src="/images/festival-logo.png"
              alt="Festival Logo"
              className={`${styles.brandLogo} ${styles.festivalLogo}`}
            />
            <img
              src="/images/salalihini_wasanthaya_logo.png"
              alt="Salalihini Wasanthaya Logo"
              className={`${styles.brandLogo} ${styles.salalihiniLogo}`}
            />
          </div>
          <h3 className={styles.brandTitle}>සැළලිහිණි  වසන්තය</h3>
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
              <FontAwesomeIcon icon={faPhone} /> 0112587352
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
            <Link href="https://www.facebook.com/srilankarupavahini/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </Link>
            <Link href="https://www.youtube.com/channel/UCT83ymyAGm7Gnk_4ifxjxIA" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FontAwesomeIcon icon={faYoutube} /> YouTube
            </Link>
            <Link href="https://www.instagram.com/rupavahini.lk/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </Link>
            <Link href="https://rupavahini.lk/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <FontAwesomeIcon icon={faGlobe} /> Website
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} Salalihini Wasanthaya - All rights reserved. Powered by President's Media Division</p>
      </div>
    </footer>
  );
}
