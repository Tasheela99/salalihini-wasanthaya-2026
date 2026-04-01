"use client";

import {
    faCalendarDays,
    faEnvelope,
    faHome,
    faImages,
    faInfoCircle,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Home",        href: "/",             icon: faHome },
  { label: "About",       href: "/about",       icon: faInfoCircle },
  { label: "Attractions", href: "/attractions", icon: faStar },
  { label: "Schedule",    href: "/schedule",    icon: faCalendarDays },
  { label: "Gallery",     href: "/gallery",     icon: faImages },
  { label: "Contact",     href: "/contact",     icon: faEnvelope },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Logo / Brand */}
        <Link href="/" className={styles.brand}>
          <span className={styles.brandLogos} aria-hidden>
            <Image
              src="/images/logo.png"
              alt="Rupavahini Logo"
              width={100}
              height={70}
              className={`${styles.brandLogo} ${styles.rupavahiniLogo}`}
            />
            <Image
              src="/images/festival-logo.png"
              alt="Festival Logo"
              width={72}
              height={72}
              className={`${styles.brandLogo} ${styles.festivalLogo}`}
            />
            <Image
              src="/images/salalihini_wasanthaya_logo.png"
              alt="Salalihini Wasanthaya Logo"
              width={200}
              height={52}
              className={`${styles.brandLogo} ${styles.salalihiniLogo}`}
              priority
            />
          </span>
        </Link>

        {/* Right side: Navigation */}
        <div className={styles.rightSection}>
          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
              >
                <span className={styles.navIcon}>
                  <FontAwesomeIcon icon={link.icon} />
                </span>
                <span className={styles.navLabel}>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Mobile icon bar – toggled by hamburger on small screens */}
      {menuOpen && (
        <nav className={styles.mobileIconNav} aria-label="Mobile quick navigation">
          <div className={`container ${styles.mobileIconInner}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileIconLink}
                onClick={() => setMenuOpen(false)}
              >
                <FontAwesomeIcon icon={link.icon} />
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}