'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    alt: "Beautiful spring nature landscape",
    badge: "2026 Season",
    title: "සැළලිහිණි වසන්තය",
    subtitle: "Salalihini Wasanthaya",
    desc: "Celebrating the spirit of spring through art, culture, and music. Join us for an unforgettable journey of Sri Lankan heritage.",
    primaryCta: { label: "Discover More", href: "/about" },
    secondaryCta: { label: "View Gallery", href: "/gallery" },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&q=80",
    alt: "Cultural festival and celebration",
    badge: "Art & Culture",
    title: "කලාව සහ සංස්කෘතිය",
    subtitle: "Art & Cultural Showcase",
    desc: "Experience a breathtaking display of traditional Sri Lankan arts, Kandyan dance, sculpture, and living crafts from across the island.",
    primaryCta: { label: "Explore Arts", href: "/gallery" },
    secondaryCta: { label: "Learn More", href: "/about" },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1600&q=80",
    alt: "Music performance on stage",
    badge: "Music & Dance",
    title: "සංගීත රාත්‍රිය",
    subtitle: "Music Night 2026",
    desc: "World-class artists performing traditional and contemporary Sri Lankan music under the stars. An evening you will never forget.",
    primaryCta: { label: "Get Tickets", href: "/donate" },
    secondaryCta: { label: "Latest News", href: "/news" },
  },
];

const INTERVAL = 5500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimKey((prev) => prev + 1);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i:any) => {
    setCurrent(i);
    setAnimKey((prev) => prev + 1);
  };

  const slide = slides[current];

  return (
    <section className={styles.hero}>

      {/* ── Background slides ── */}
      <div className={styles.slider}>
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`${styles.slide} ${i === current ? styles.active : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
            role="img"
            aria-label={s.alt}
            aria-hidden={i !== current}
          />
        ))}
        <div className={styles.overlay} />
      </div>

      {/* ── Centered content ── */}
      <div className={styles.centerContent} key={animKey}>

        {/* Badge */}
        <span className={styles.badge}>{slide.badge}</span>

        {/* Sinhala title */}
        <h1 className={styles.titleSinhala}>{slide.title}</h1>

        {/* English subtitle */}
        <h2 className={styles.subtitle}>{slide.subtitle}</h2>

        {/* Divider */}
        <div className={styles.ruleLine} />

        {/* Description */}
        <p className={styles.desc}>{slide.desc}</p>

        {/* CTA buttons */}
        <div className={styles.ctaGroup}>
          <a href={slide.primaryCta.href} className={styles.btnPrimary}>
            {slide.primaryCta.label}
          </a>
          <a href={slide.secondaryCta.href} className={styles.btnOutline}>
            {slide.secondaryCta.label}
          </a>
        </div>
      </div>

      {/* ── Dot navigation ── */}
      <nav className={styles.dots} aria-label="Slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </nav>

      {/* ── Progress bar ── */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          key={`progress-${animKey}`}
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      </div>

    </section>
  );
}