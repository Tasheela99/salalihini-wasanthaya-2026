'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const slides = [
  {
    id: 1,
    image: "/images/03.jpeg",
    alt: "Beautiful spring nature landscape",
    badge: "2026 Season",
    title: "සැළලිහිණි වසන්තය",
    subtitle: "Salalihini Wasanthaya",
    desc: "Celebrating the spirit of spring through art, culture, and music. Join us for an unforgettable journey of Sri Lankan heritage.",
  },
  {
    id: 2,
    image: "/images/08.jpeg",
    alt: "Cultural festival and celebration",
    badge: "Art & Culture",
    title: "කලාව සහ සංස්කෘතිය",
    subtitle: "Art & Cultural Showcase",
    desc: "Experience a breathtaking display of traditional Sri Lankan arts, Kandyan dance, sculpture, and living crafts from across the island.",
  },
  {
    id: 3,
    image: "/images/19.jpeg",
    alt: "Music performance on stage",
    badge: "Music & Dance",
    title: "සංගීත රාත්‍රිය",
    subtitle: "Music Night 2026",
    desc: "World-class artists performing traditional and contemporary Sri Lankan music under the stars. An evening you will never forget.",
  },
];

const INTERVAL = 5500;
// Set target date for the countdown
const TARGET_DATE = new Date(2026, 3, 2, 9, 0, 0).getTime();

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Slider Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimKey((prev) => prev + 1);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // Countdown Interval
  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(countdownTimer);
      }
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  const goTo = (i: number) => {
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
        <span className={styles.badge}>{slide.badge}</span>
        <h1 className={styles.titleSinhala}>{slide.title}</h1>
        <h2 className={styles.subtitle}>{slide.subtitle}</h2>
        <div className={styles.ruleLine} />
        <p className={styles.desc}>{slide.desc}</p>

        {/* ── Countdown Timer ── */}
        <div className={styles.countdownContainer}>
          <div className={styles.timeBox}>
            <span className={styles.timeValue}>{timeLeft.days}</span>
            <span className={styles.timeLabel}>Days</span>
          </div>
          <div className={styles.timeBox}>
            <span className={styles.timeValue}>{timeLeft.hours}</span>
            <span className={styles.timeLabel}>Hours</span>
          </div>
          <div className={styles.timeBox}>
            <span className={styles.timeValue}>{timeLeft.minutes}</span>
            <span className={styles.timeLabel}>Mins</span>
          </div>
          <div className={styles.timeBox}>
            <span className={styles.timeValue}>{timeLeft.seconds}</span>
            <span className={styles.timeLabel}>Secs</span>
          </div>
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