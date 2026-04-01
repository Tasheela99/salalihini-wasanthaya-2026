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
    title: "Sri Lankan Cuisine",
    sinhala: "ශ්‍රී ලංකා ආහාරය",
    description:
      "Taste authentic rice & curry, hoppers, kottu roti, and sweet treats from local food artisans.",
    category: "Food",
  },
];

const tourismGuidePlaces: TourismGuidePlace[] = [
  {
    id: "lovers-leap",
    title: "Lover's Leap",
    sinhala: "ලවර්ස් ලීප්",
    description:
      "A beautiful waterfall viewpoint surrounded by tea plantations and misty hills.",
    imageSrc: "/images/05.jpeg",
    destinationQuery: "Lover's Leap Waterfall, Nuwara Eliya",
    chips: [
      { icon: "road", text: "~5 km", tone: "green" },
      { icon: "walk", text: "1–2 hrs", tone: "pink" },
    ],
  },
  {
    id: "hakgala-botanical-garden",
    title: "Hakgala Botanical Garden",
    sinhala: "හක්ගල උද්‍යානය",
    description:
      "A must-see garden famous for roses, orchids, and cool-climate flora.",
    imageSrc: "/images/03.jpeg",
    destinationQuery: "Hakgala Botanical Garden",
    chips: [
      { icon: "road", text: "~10 km", tone: "green" },
      { icon: "camera", text: "2–3 hrs", tone: "pink" },
    ],
  },
  {
    id: "seetha-amman-kovil",
    title: "Seetha Amman Kovil",
    sinhala: "සීතා අම්මාන් කෝවිල",
    description:
      "A well-known Hindu temple linked to the Ramayana, set in a scenic gorge.",
    imageSrc: "/images/04.jpeg",
    destinationQuery: "Seetha Amman Kovil",
    chips: [
      { icon: "road", text: "~12 km", tone: "green" },
      { icon: "landmark", text: "~1 hr", tone: "pink" },
    ],
  },
  {
    id: "moon-plains",
    title: "Moon Plains",
    sinhala: "මූන් ප්ලේන්ස්",
    description:
      "A high-altitude viewpoint with wide open landscapes and stunning sunrise views.",
    imageSrc: "/images/09.jpeg",
    destinationQuery: "Moon Plains, Nuwara Eliya",
    chips: [
      { icon: "road", text: "~10 km", tone: "green" },
      { icon: "camera", text: "1–2 hrs", tone: "pink" },
    ],
  },
  {
    id: "ambewela-farm",
    title: "Ambewela Farm",
    sinhala: "අම්බෙවෙල ගොවිපල",
    description:
      "Visit the famous dairy farm area and enjoy the fresh mountain air and scenery.",
    imageSrc: "/images/10.jpeg",
    destinationQuery: "Ambewela Farm",
    chips: [
      { icon: "road", text: "~22 km", tone: "green" },
      { icon: "camera", text: "1–2 hrs", tone: "pink" },
    ],
  },
  {
    id: "galways-land-national-park",
    title: "Galway's Land National Park",
    sinhala: "ගැල්වේස් ලෑන්ඩ් ජාතික උද්‍යානය",
    description:
      "A compact urban national park ideal for a short nature walk and birdwatching.",
    imageSrc: "/images/11.jpeg",
    destinationQuery: "Galway's Land National Park, Nuwara Eliya",
    chips: [
      { icon: "road", text: "~2 km", tone: "green" },
      { icon: "walk", text: "45–90 min", tone: "pink" },
    ],
  },
  {
    id: "horton-plains-national-park",
    title: "Horton Plains National Park",
    sinhala: "හෝර්ටන් තැන්න",
    description:
      "Home to World's End and beautiful cloud-forest trails. Best visited early morning.",
    mustVisit: true,
    imageSrc: "/images/01.jpeg",
    destinationQuery: "Horton Plains National Park",
    chips: [
      { icon: "road", text: "~32 km", tone: "green" },
      { icon: "hike", text: "3–4 hrs", tone: "pink" },
    ],
  },
  {
    id: "gregory-lake",
    title: "Gregory Lake",
    sinhala: "ග්‍රෙගරි වැව",
    description:
      "A scenic lake in the heart of the city—great for boating and lakeside walks.",
    imageSrc: "/images/02.jpeg",
    destinationQuery: "Gregory Lake, Nuwara Eliya",
    chips: [
      { icon: "road", text: "~1.5 km", tone: "green" },
      { icon: "walk", text: "1–2 hrs", tone: "pink" },
    ],
  },
  {
    id: "pedro-tea-estate",
    title: "Pedro Tea Estate",
    sinhala: "පෙඩ්රෝ තේ වත්ත",
    description:
      "Tour a working tea factory, taste fresh Ceylon tea, and enjoy estate views.",
    imageSrc: "/images/06.jpeg",
    destinationQuery: "Pedro Tea Estate",
    chips: [
      { icon: "road", text: "~3.5 km", tone: "green" },
      { icon: "tea", text: "1–2 hrs", tone: "pink" },
    ],
  },
  {
    id: "victoria-park",
    title: "Victoria Park",
    sinhala: "වික්ටෝරියා උද්‍යානය",
    description:
      "A peaceful city park with flower gardens—perfect for a relaxed stroll.",
    imageSrc: "/images/12.jpeg",
    destinationQuery: "Victoria Park, Nuwara Eliya",
    chips: [
      { icon: "road", text: "~1 km", tone: "green" },
      { icon: "walk", text: "45–90 min", tone: "pink" },
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
