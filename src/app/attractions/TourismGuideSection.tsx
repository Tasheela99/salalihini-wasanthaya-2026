"use client";

import styles from "./attractions.module.css";

export type TourismGuideChipTone = "green" | "blue" | "pink";

export type TourismGuideChip = {
  icon: string;
  text: string;
  tone: TourismGuideChipTone;
};

export type TourismGuidePlace = {
  id: string;
  title: string;
  sinhala: string;
  description: string;
  destinationQuery: string;
  mustVisit?: boolean;
  chips: TourismGuideChip[];
};

type Props = {
  places: TourismGuidePlace[];
};

const ORIGIN_FALLBACK = "Victoria Park, Nuwara Eliya";

function openGoogleMapsDirections(destinationQuery: string, origin?: string) {
  const url = new URL("https://www.google.com/maps/dir/");
  url.searchParams.set("api", "1");
  url.searchParams.set("destination", destinationQuery);
  url.searchParams.set("travelmode", "driving");
  if (origin) url.searchParams.set("origin", origin);

  globalThis.window.open(url.toString(), "_blank", "noopener,noreferrer");
}

function chipToneClassName(tone: TourismGuideChipTone) {
  if (tone === "green") return styles.chipGreen;
  if (tone === "blue") return styles.chipBlue;
  return styles.chipPink;
}

export default function TourismGuideSection({ places }: Readonly<Props>) {
  const handleClick = (place: TourismGuidePlace) => {
    if (globalThis.window === undefined) return;

    const openWithFallbackOrigin = () =>
      openGoogleMapsDirections(place.destinationQuery, ORIGIN_FALLBACK);

    if (!navigator.geolocation) {
      openWithFallbackOrigin();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const origin = `${pos.coords.latitude},${pos.coords.longitude}`;
        openGoogleMapsDirections(place.destinationQuery, origin);
      },
      () => {
        openWithFallbackOrigin();
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 60_000 }
    );
  };

  return (
    <div className={styles.guideGrid}>
      {places.map((p) => (
        <button
          key={p.id}
          type="button"
          className={`${styles.guideCard} ${p.mustVisit ? styles.guideCardFeatured : ""}`}
          onClick={() => handleClick(p)}
          aria-label={`Open directions to ${p.title} in Google Maps`}
        >
          {p.mustVisit ? <div className={styles.mustVisitBadge}>MUST VISIT</div> : null}
          <h3 className={styles.guideTitle}>{p.title}</h3>
          <div className={styles.guideSinhala}>{p.sinhala}</div>
          <p className={styles.guideDesc}>{p.description}</p>
          <div className={styles.chipRow}>
            {p.chips.map((c, idx) => (
              <span
                key={`${p.id}-chip-${idx}`}
                className={`${styles.chip} ${chipToneClassName(c.tone)}`}
              >
                <span className={styles.chipIcon} aria-hidden>
                  {c.icon}
                </span>
                {c.text}
              </span>
            ))}
          </div>
        </button>
      ))}
    </div>
  );
}
