"use client";

import {
    faCamera,
    faClock,
    faLandmark,
    faMountain,
    faMugHot,
    faPersonHiking,
    faPersonWalking,
    faRoad,
    faWater,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "./attractions.module.css";

export type TourismGuideChipTone = "green" | "blue" | "pink";

export type TourismGuideChipIcon =
  | "road"
  | "clock"
  | "hike"
  | "walk"
  | "camera"
  | "tea"
  | "mountain"
  | "landmark"
  | "water";

export type TourismGuideChip = {
  icon: TourismGuideChipIcon;
  text: string;
  tone: TourismGuideChipTone;
};

export type TourismGuidePlace = {
  id: string;
  title: string;
  sinhala: string;
  description: string;
  imageSrc: string;
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

function chipIcon(icon: TourismGuideChipIcon) {
  switch (icon) {
    case "road":
      return faRoad;
    case "clock":
      return faClock;
    case "hike":
      return faPersonHiking;
    case "walk":
      return faPersonWalking;
    case "camera":
      return faCamera;
    case "tea":
      return faMugHot;
    case "mountain":
      return faMountain;
    case "landmark":
      return faLandmark;
    case "water":
      return faWater;
    default:
      return faRoad;
  }
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
          <div className={styles.guideMedia} aria-hidden>
            <Image
              src={p.imageSrc}
              alt={p.title}
              fill
              sizes="(max-width: 700px) 92vw, (max-width: 1024px) 46vw, 300px"
              className={styles.guideImage}
            />
            {p.mustVisit ? (
              <div className={styles.mustVisitBadge}>MUST VISIT</div>
            ) : null}
          </div>

          <div className={styles.guideBody}>
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
                    <FontAwesomeIcon icon={chipIcon(c.icon)} fixedWidth />
                  </span>
                  {c.text}
                </span>
              ))}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
