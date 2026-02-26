import type { Metadata } from "next";
import styles from "./schedule.module.css";

export const metadata: Metadata = {
  title: "Schedule | Salalihini Wasanthaya 2026",
  description:
    "Full event schedule for Salalihini Wasanthaya 2026 — three days of culture, art, and celebration.",
};

interface ScheduleEvent {
  time: string;
  title: string;
  location: string;
  tag: string;
}

interface DaySchedule {
  day: string;
  date: string;
  events: ScheduleEvent[];
}

const schedule: DaySchedule[] = [
  {
    day: "Day 1",
    date: "Saturday, March 21, 2026",
    events: [
      { time: "09:00 AM", title: "Gates Open & Welcome Ceremony", location: "Main Arena", tag: "Opening" },
      { time: "10:00 AM", title: "Traditional Drumming Workshop", location: "Workshop Tent", tag: "Workshop" },
      { time: "11:30 AM", title: "Kandyan Dance Showcase", location: "Main Stage", tag: "Performance" },
      { time: "01:00 PM", title: "Lunch Break & Food Festival", location: "Food Court", tag: "Food" },
      { time: "02:30 PM", title: "Live Art Exhibition Opening", location: "Art Pavilion", tag: "Art" },
      { time: "04:00 PM", title: "Folk Music Ensemble", location: "Main Stage", tag: "Music" },
      { time: "06:30 PM", title: "Sunset Ceremony & Fire Dancing", location: "Open Arena", tag: "Performance" },
    ],
  },
  {
    day: "Day 2",
    date: "Sunday, March 22, 2026",
    events: [
      { time: "09:00 AM", title: "Morning Yoga & Wellness Session", location: "Garden Lawn", tag: "Wellness" },
      { time: "10:30 AM", title: "Children's Cultural Programme", location: "Family Zone", tag: "Family" },
      { time: "12:00 PM", title: "Panel: Preserving Sri Lankan Heritage", location: "Conference Hall", tag: "Talk" },
      { time: "01:30 PM", title: "Lunch & Craft Market", location: "Food Court", tag: "Food" },
      { time: "03:00 PM", title: "Sabaragamuwa Dance Performance", location: "Main Stage", tag: "Performance" },
      { time: "05:00 PM", title: "Poetry & Literature Reading", location: "Library Tent", tag: "Literature" },
      { time: "07:00 PM", title: "Grand Musical Concert", location: "Main Stage", tag: "Music" },
    ],
  },
  {
    day: "Day 3",
    date: "Monday, March 23, 2026",
    events: [
      { time: "09:00 AM", title: "Cultural Procession (Perahera)", location: "Main Avenue", tag: "Procession" },
      { time: "11:00 AM", title: "Kolam & Sokari Theatre", location: "Drama Stage", tag: "Theatre" },
      { time: "12:30 PM", title: "Awards & Recognition Ceremony", location: "Conference Hall", tag: "Ceremony" },
      { time: "02:00 PM", title: "Final Art Exhibition Viewing", location: "Art Pavilion", tag: "Art" },
      { time: "03:30 PM", title: "Low Country Dance Finale", location: "Main Stage", tag: "Performance" },
      { time: "05:30 PM", title: "Closing Concert & Fireworks", location: "Main Arena", tag: "Finale" },
    ],
  },
];

const tagColors: Record<string, string> = {
  Opening: "var(--color-primary)",
  Workshop: "#2E86C1",
  Performance: "var(--color-secondary-dark)",
  Food: "#D4AC0D",
  Art: "#1A5276",
  Music: "#6C3483",
  Wellness: "#27AE60",
  Family: "#E67E22",
  Talk: "#2E7B4E",
  Literature: "#8E44AD",
  Procession: "#C0392B",
  Theatre: "#6C3483",
  Ceremony: "var(--color-primary-dark)",
  Finale: "#C0392B",
};

export default function SchedulePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>Schedule</h1>
          <p className={styles.pageSubtitle}>
            Three days of unforgettable cultural experiences
          </p>
        </div>
      </section>

      {/* ── Schedule Days ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          {schedule.map((day) => (
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
                      <p className={styles.eventLocation}>📍 {evt.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Info Banner ──────────────────────────────────── */}
      <section className={styles.infoBanner}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className={styles.infoTitle}>Plan Your Visit</h2>
          <p className={styles.infoText}>
            Programmes may be subject to change. Follow our social channels for
            real-time updates during the event.
          </p>
          <a href="/contact" className={styles.infoBtn}>
            Contact Us for Details
          </a>
        </div>
      </section>
    </>
  );
}
