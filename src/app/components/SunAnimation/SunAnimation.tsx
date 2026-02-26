"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SunAnimation.module.css";

export default function SunAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial position
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Arc path: goes from bottom-left → top-center → bottom-right
  // Using a parabolic arc: y = -4h * x(x-1) where x is progress [0,1]
  // x position: 0% → 100% of viewport width
  // y position: follows inverted parabola (rises then falls)

  const t = scrollProgress;
  const xPercent = t * 100; // left to right
  const arcHeight = 70; // how high the sun rises (vh)
  const yOffset = -4 * arcHeight * t * (t - 1); // parabolic arc, peak at t=0.5

  // Sun starts at bottom (low y), rises to top, falls back down
  // Bottom = 90vh, top = 90 - arcHeight vh
  const yPercent = 90 - yOffset;

  // Slight rotation as it travels
  const rotation = t * 0;

  // Scale: starts small, grows large at middle, shrinks and disappears at end
  // Peak scale at t=0.5, using parabolic curve
  const minScale = 0.5;
  const maxScale = 5;
  const scaleCurve = -4 * t * (t - 1); // 0 → 1 → 0 parabola
  const scale = minScale + (maxScale - minScale) * scaleCurve;

  // Opacity: fade in at start, full in middle, fade out and disappear at end
  const opacity =
    t < 0.08
      ? t / 0.08
      : t > 0.92
        ? (1 - t) / 0.08
        : 1;

  return (
    <div className={styles.sunContainer} aria-hidden="true">
      <div
        className={styles.sun}
        style={{
          left: `${xPercent}%`,
          top: `${yPercent}vh`,
          opacity,
          transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sun.gif" alt="" className={styles.sunImage} />
      </div>
    </div>
  );
}
