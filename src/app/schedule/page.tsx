import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import SectionLabel from "../components/SectionLabel/SectionLabel";
import styles from "./schedule.module.css";
import { aprilBloomsSchedule, tagColors } from "./schedules";

export const metadata: Metadata = {
  title: "Schedule | April Blooms 2026",
  description:
    "Complete event schedule for April Blooms 2026 in Nuwara Eliya, Sri Lanka.",
};

export default function SchedulePage() {
  return (
    <>
      {/* ── Schedule Days ────────────────────────────────── */}
      <section className="section">
        <div className="container">
           <SectionLabel label="SCHEDULE" />
          {aprilBloomsSchedule.map((day) => (
            <div key={day.day} className={styles.dayBlock}>
              <div className={styles.dayHeader}>
                <h2 className={styles.dayTitle}>{day.day}</h2>
                <span className={styles.dayDate}>{day.date}</span>
              </div>

              <div className={styles.timeline}>
                {day.events.map((evt, idx) => (
                  <div key={evt.time} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.eventCard}>
                      <div className={styles.eventMeta}>
                        <time className={styles.eventTime}>{evt.time}</time>
                        <span
                          className={styles.eventTag}
                          style={{
                            backgroundColor:
                              tagColors[evt.tag] ?? "var(--color-secondary)",
                          }}
                        >
                          {evt.tag}
                        </span>
                      </div>
                      <h3 className={styles.eventTitle}>{evt.title}</h3>
                      <p className={styles.eventLocation}><FontAwesomeIcon icon={faLocationDot} /> {evt.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
