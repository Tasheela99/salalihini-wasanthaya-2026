'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './Hero.module.css';

const contentSlides = [
  {
    id: 1,
    badge: "2026 Season",
    title: "සැළලිහිණි වසන්තය",
    subtitle: "Salalihini Wasanthaya",
    desc: "Celebrating the spirit of spring through art, culture, and music. Join us for an unforgettable journey of Sri Lankan heritage.",
  },
  {
    id: 2,
    badge: "Art & Culture",
    title: "කලාව සහ සංස්කෘතිය",
    subtitle: "Art & Cultural Showcase",
    desc: "Experience a breathtaking display of traditional Sri Lankan arts, Kandyan dance, sculpture, and living crafts from across the island.",
  },
  {
    id: 3,
    badge: "Music & Dance",
    title: "සංගීත රාත්‍රිය",
    subtitle: "Music Night 2026",
    desc: "World-class artists performing traditional and contemporary Sri Lankan music under the stars. An evening you will never forget.",
  },
];

const INTERVAL = 5500;
// Set target date for the countdown
const TARGET_DATE = new Date("April 13, 2026 00:00:00").getTime();

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  // Slider Interval (for content only)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % contentSlides.length);
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

  // Ensure video plays (some browsers block autoplay)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked — that's okay, user will see poster
      });
    }
  }, []);

  const goTo = (i: number) => {
    setCurrent(i);
    setAnimKey((prev) => prev + 1);
  };

  const slide = contentSlides[current];

  return (
    <section className={styles.hero}>
      {/* ── Video Background ── */}
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/03.jpeg"
        >
          <source src="/videos/0401.mp4" type="video/mp4" />
        </video>
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
        {contentSlides.map((_, i) => (
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