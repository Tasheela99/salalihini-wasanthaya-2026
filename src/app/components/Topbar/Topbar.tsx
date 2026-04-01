import {
    faFacebook,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
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
            <FontAwesomeIcon icon={faPhone} /> 0112587352
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} /> info@rupavahini.lk
          </span>
        </div>

        {/* Right – social links */}
        <div className={styles.right}>
          <Link
            href="https://www.facebook.com/srilankarupavahini/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCT83ymyAGm7Gnk_4ifxjxIA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faYoutube} /> YouTube
          </Link>
          <Link
            href="https://www.instagram.com/rupavahini.lk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </Link>
          <Link
            href="https://rupavahini.lk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={faGlobe} /> Website
          </Link>
        </div>
      </div>
    </div>
  );
}
