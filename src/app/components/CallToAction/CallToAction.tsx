"use client";
import { Fragment, useEffect, useState } from "react";
import SectionLabel from "../SectionLabel/SectionLabel";
import styles from "./CallToAction.module.css";

const TARGET_DATE = new Date(2026, 3, 2, 9, 0, 0).getTime();

export default function CallToAction() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(countdownTimer);
      }
    }, 1000);
    return () => clearInterval(countdownTimer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <>
    <div className="container">
      <SectionLabel label="DAYS" />
    </div>
      
      <section className={styles.cta}>
        <div className={styles.countdownWrap}>
          <div className={styles.countdownBig}>
            {units.map((unit, i) => (
              <Fragment key={unit.label}>
                <div className={styles.countdownItem}>
                  <span className={styles.countdownValue}>
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className={styles.countdownLabel}>{unit.label}</span>
                </div>
                {i < units.length - 1 && (
                  <span className={styles.countdownSep}>:</span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
