import type { Metadata } from "next";
import SectionLabel from "../components/SectionLabel/SectionLabel";
import styles from "./attractions.module.css";
import TourismGuideSection, {
  type TourismGuidePlace,
} from "./TourismGuideSection";

export const metadata: Metadata = {
  title: "Attractions | Salalihini Wasanthaya 2026",
  description:
    "Discover the exciting attractions and performances at Salalihini Wasanthaya 2026.",
};

const attractions = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    icon: "\uD83D\uDDBC\uFE0F",
    title: "Scenic Nature",
    sinhala: "සොබාදහම",
    description:
      "Explore the misty mountains, lush tea estates, and world-famous botanical gardens of Nuwara Eliya.",
    category: "Nature",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    icon: "\uD83D\uDC83",
    title: "Cultural Performances",
    sinhala: "සාම්ප්‍රදායික ප්‍රදර්ශන",
    description:
      "Experience traditional Kandyan dance, drum performances, and vibrant cultural pageants.",
    category: "Performance",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    icon: "\uD83C\uDF72",
    title: "Sri Lankan Cuisine",
    sinhala: "ශ්‍රී ලංකා ආහාරය",
    description:
      "Taste authentic rice & curry, hoppers, kottu roti, and sweet treats from local food artisans.",
    category: "Food",
  },
];

const tourismGuidePlaces: TourismGuidePlace[] = [
  {
    id: "horton-plains",
    title: "Horton Plains & World’s End",
    sinhala: "හෝර්ටන් තැන්න",
    description:
      "Breathtaking cliff edge with panoramic views. Best visited early morning before mist rolls in.",
    mustVisit: true,
    destinationQuery: "Horton Plains National Park",
    chips: [
      { icon: "🛣️", text: "32 km", tone: "green" },
      { icon: "🕒", text: "~1 hr", tone: "blue" },
      { icon: "🥾", text: "3–4 hrs", tone: "pink" },
    ],
  },
  {
    id: "gregory-lake",
    title: "Gregory Lake",
    sinhala: "ග්‍රෙගරි වැව",
    description:
      "Scenic lake in the heart of the city. Enjoy boating, pony rides, and lakeside walks.",
    destinationQuery: "Gregory Lake, Nuwara Eliya",
    chips: [
      { icon: "🛣️", text: "1.5 km", tone: "green" },
      { icon: "🕒", text: "~5 min", tone: "blue" },
      { icon: "🚶", text: "1–2 hrs", tone: "pink" },
    ],
  },
  {
    id: "hakgala",
    title: "Hakgala Botanical Garden",
    sinhala: "හක්ගල උද්‍යානය",
    description:
      "One of Sri Lanka’s finest botanical gardens, famous for roses and orchids.",
    destinationQuery: "Hakgala Botanical Garden",
    chips: [
      { icon: "🛣️", text: "10 km", tone: "green" },
      { icon: "🕒", text: "~20 min", tone: "blue" },
      { icon: "📸", text: "2–3 hrs", tone: "pink" },
    ],
  },
  {
    id: "seetha-amman",
    title: "Seetha Amman Temple",
    sinhala: "සීතා අම්මාන් කෝවිල",
    description:
      "Ancient Hindu temple linked to the Ramayana epic, set in a scenic gorge.",
    destinationQuery: "Seetha Amman Temple",
    chips: [
      { icon: "🛣️", text: "12 km", tone: "green" },
      { icon: "🕒", text: "~25 min", tone: "blue" },
      { icon: "🛕", text: "1 hr", tone: "pink" },
    ],
  },
  {
    id: "lovers-leap",
    title: "Lover’s Leap Waterfall",
    sinhala: "ලවර්ස් ලීප්",
    description:
      "A stunning 30m waterfall surrounded by tea plantations and misty hills.",
    destinationQuery: "Lover's Leap Waterfall, Nuwara Eliya",
    chips: [
      { icon: "🛣️", text: "5 km", tone: "green" },
      { icon: "🕒", text: "~15 min", tone: "blue" },
      { icon: "🚶", text: "1–2 hrs", tone: "pink" },
    ],
  },
  {
    id: "pedro-tea",
    title: "Pedro Tea Estate",
    sinhala: "පෙඩ්රෝ තේ වත්ත",
    description:
      "Tour a working tea factory, taste fresh Ceylon tea, and enjoy stunning estate views.",
    destinationQuery: "Pedro Tea Estate",
    chips: [
      { icon: "🛣️", text: "3.5 km", tone: "green" },
      { icon: "🕒", text: "~10 min", tone: "blue" },
      { icon: "🍵", text: "1–2 hrs", tone: "pink" },
    ],
  },
  {
    id: "pidurutalagala",
    title: "Pidurutalagala (Mt. Pedro)",
    sinhala: "පිදුරුතලගල",
    description:
      "Sri Lanka’s highest peak at 2,524m. Views accessible from the approach road.",
    mustVisit: true,
    destinationQuery: "Pidurutalagala",
    chips: [
      { icon: "🛣️", text: "8 km", tone: "green" },
      { icon: "🕒", text: "~20 min", tone: "blue" },
      { icon: "⛰️", text: "2 hrs", tone: "pink" },
    ],
  },
  {
    id: "ramboda",
    title: "Ramboda Falls",
    sinhala: "රම්බොඩ දිය ඇල්ල",
    description:
      "Magnificent 109m waterfall cascading through lush greenery along the Kandy road.",
    destinationQuery: "Ramboda Falls",
    chips: [
      { icon: "🛣️", text: "28 km", tone: "green" },
      { icon: "🕒", text: "~45 min", tone: "blue" },
      { icon: "📸", text: "1–2 hrs", tone: "pink" },
    ],
  },
];

export default function AttractionsPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionLabel label="ATTRACTIONS &amp; EXPERIENCES" />
          <div className={styles.cardGrid}>
            {attractions.map((a) => (
              <div key={a.id} className={styles.attractionCard}>
                <div className={styles.cardImageWrap}>
                  <img
                    src={a.image}
                    alt={a.title}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                  <div className={styles.cardBadge} aria-hidden>
                    <span className={styles.cardBadgeIcon}>{a.icon}</span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{a.title}</h3>
                  <div className={styles.cardSinhala}>{a.sinhala}</div>
                  <p className={styles.cardDesc}>{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel label="TOURISM GUIDE" />

          <TourismGuideSection places={tourismGuidePlaces} />

          <div className={styles.mapCard}>
            <iframe
              className={styles.mapFrame}
              title="Nuwara Eliya Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=80.744%2C6.936%2C80.824%2C6.989&layer=mapnik&marker=6.967%2C80.783"
              loading="lazy"
            />
            <div className={styles.mapFooter}>
              <div className={styles.mapLocation}>
                Nuwara Eliya, Central Province, Sri Lanka
              </div>
              <a
                className={styles.mapLink}
                href="https://www.openstreetmap.org/?mlat=6.967&mlon=80.783#map=12/6.967/80.783"
                target="_blank"
                rel="noreferrer"
              >
                View Larger Map →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
