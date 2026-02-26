import Link from "next/link";
import styles from "./NewsSection.module.css";

const newsItems = [
  {
    date: "15",
    month: "FEB",
    title: "Grand stage design unveiled",
    comments: 2,
    author: "Festival Committee",
    href: "/news",
  },
  {
    date: "10",
    month: "FEB",
    title: "Artist lineup announced for 2026",
    comments: 5,
    author: "Festival Committee",
    href: "/news",
  },
  {
    date: "04",
    month: "JAN",
    title: "Rehearsals begin island-wide",
    comments: 0,
    author: "Festival Committee",
    href: "/news",
  },
];

const testimonial = {
  quote:
    "Salalihini Wasanthaya is more than a festival — it is a living, breathing celebration of everything that makes our culture extraordinary. Every year it brings our community closer together.",
  author: "Nimali Perera",
  role: "Cultural Ambassador",
};

export default function NewsSection() {
  return (
    <section className={`section ${styles.newsSection}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Recent News */}
          <div className={styles.column}>
            <div className={styles.colHeader}>
              <h3 className={styles.colTitle}>Recent News</h3>
              <Link href="/news" className={styles.colLink}>
                Read All News →
              </Link>
            </div>
            <div className={styles.newsList}>
              {newsItems.map((item) => (
                <div key={item.title} className={styles.newsItem}>
                  <div className={styles.newsImagePlaceholder}>
                    <span>400×400</span>
                  </div>
                  <div className={styles.newsDate}>
                    <span className={styles.newsDay}>{item.date}</span>
                    <span className={styles.newsMonth}>{item.month}</span>
                  </div>
                  <div className={styles.newsInfo}>
                    <Link href={item.href} className={styles.newsTitle}>
                      {item.title}
                    </Link>
                    <p className={styles.newsMeta}>
                      💬 {item.comments} &nbsp;✍ {item.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Campaign */}
          <div className={styles.column}>
            <div className={styles.colHeader}>
              <h3 className={styles.colTitle}>Current Campaign</h3>
            </div>
            <div className={styles.campaignPlaceholder}>
              <span>🎬 Campaign Video</span>
            </div>
            <Link href="/about" className={styles.campaignLink}>
              Learn more about this campaign
            </Link>
          </div>

          {/* Testimonial */}
          <div className={styles.column}>
            <div className={styles.colHeader}>
              <h3 className={styles.colTitle}>Testimonial</h3>
            </div>
            <div className={styles.testimonial}>
              <span className={styles.quoteIcon}>"</span>
              <p className={styles.quoteText}>{testimonial.quote}</p>
              <div className={styles.quoteAuthor}>
                <div className={styles.authorAvatar}>
                  <span>150×150</span>
                </div>
                <p className={styles.authorInfo}>
                  <strong className={styles.authorName}>
                    {testimonial.author}
                  </strong>
                  , {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
