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
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Flying bird animation */}
      <div className={styles.flyingBirdContainer}>
        <Image
          src="/flyingbird.gif"
          alt="Flying bird"
          width={180}
          height={110}
          className={styles.flyingBird}
          unoptimized
        />
      </div>
      <div className={styles.inner}>
        {/* Logo / Brand */}
        <Link href="/" className={styles.brand}>
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>සැළලිහිණි  වසන්තය</span>
          </div>
        </Link>

        {/* Right side: Navigation */}
        <div className={styles.rightSection}>
          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileIconLink} ${pathname === link.href ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={link.icon} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}