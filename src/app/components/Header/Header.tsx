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
  { label: "Home",        href: "/",            icon: faHome },
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
          <span className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C16 2 8 6 8 14C8 18 10 22 13 25C14 26 15 27 16 28C17 27 18 26 19 25C22 22 24 18 24 14C24 6 16 2 16 2Z" fill="#6FCF97"/>
              <path d="M16 2L16 28" stroke="#4C5B47" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>GREEN NATURE</span>
            <span className={styles.brandSubtitle}>Environment Theme</span>
          </div>
        </Link>

        {/* Right side: Navigation + Donate Button */}
        <div className={styles.rightSection}>
          {/* Desktop Navigation */}
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

          {/* Donate Button */}
          <Link href="/donate" className={styles.donateBtn}>
            DONATE
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
