import {
    faFacebook,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        {/* Left – contact info */}
        <div className={styles.left}>
          <span>
            <FontAwesomeIcon icon={faPhone} /> +94 11 234 5678
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} /> info@salalihini.lk
          </span>
        </div>

        {/* Right – social links */}
        <div className={styles.right}>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faYoutube} /> YouTube
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </Link>
        </div>
      </div>
    </div>
  );
}
