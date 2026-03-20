import {
  faMusic,
  faPeopleGroup,
  faSeedling,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About | Salalihini Wasanthaya 2026",
  description:
    "Learn about the history, vision, and people behind Salalihini Wasanthaya.",
};

export default function AboutPage() {
  return (
    <div>
      <section className={styles.eventSection}>
        <div className={styles.eventContainer}>
          <div className={styles.eventHeadingWrap}>
            <div className={styles.sectionLabel}>ABOUT THE EVENT</div>
            <h2 className={styles.sinhalaHeading}>උත්සවය ගැන</h2>
          </div>
          <p className={styles.eventIntro}>
            සැලළිහිනි වසන්තය is an annual national cultural extravaganza
            organized by Sri Lanka Rupavahini Corporation in the picturesque
            hill country of Nuwara Eliya. This celebration promotes Sri Lankan
            tourism, traditional arts, and the beauty of the spring season,
            attracting thousands of local and international visitors each year.
          </p>
          <div className={styles.festivalGrid}>
            <div className={styles.festivalCard}>
              <div className={styles.festivalIcon}>
                <FontAwesomeIcon
                  icon={faSeedling}
                  size="2x"
                  color="var(--color-primary)"
                />
              </div>
              <div className={styles.festivalTitleSinhala}>පුෂ්ප උත්සවය</div>
              <div className={styles.festivalSubtitle}>Flower Festival</div>
              <p>
                Stunning flower shows featuring rare blooms from the hills of
                Nuwara Eliya.
              </p>
            </div>
            <div className={styles.festivalCard}>
              <div className={styles.festivalIcon}>
                <FontAwesomeIcon
                  icon={faMusic}
                  size="2x"
                  color="var(--color-primary)"
                />
              </div>
              <div className={styles.festivalTitleSinhala}>සංගීත ප්‍රසංග</div>
              <div className={styles.festivalSubtitle}>Music &amp; Culture</div>
              <p>
                Live performances by Sri Lanka&apos;s finest artists,
                celebrating rich cultural heritage.
              </p>
            </div>
            <div className={styles.festivalCard}>
              <div className={styles.festivalIcon}>
                <FontAwesomeIcon
                  icon={faUtensils}
                  size="2x"
                  color="var(--color-primary)"
                />
              </div>
              <div className={styles.festivalTitleSinhala}>ආහාර උත්සවය</div>
              <div className={styles.festivalSubtitle}>Food Festival</div>
              <p>
                Savor authentic Sri Lankan cuisine from local vendors and
                celebrated chefs.
              </p>
            </div>
            <div className={styles.festivalCard}>
              <div className={styles.festivalIcon}>
                <FontAwesomeIcon
                  icon={faPeopleGroup}
                  size="2x"
                  color="var(--color-primary)"
                />
              </div>
              <div className={styles.festivalTitleSinhala}>
                පවුල් ක්‍රියාකාරකම්
              </div>
              <div className={styles.festivalSubtitle}>Family Activities</div>
              <p>
                Fun-filled activities for all ages set against the breathtaking
                mountain scenery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
