import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "../components/SectionLabel/SectionLabel";
import styles from "./gallery.module.css";

export const metadata: Metadata = {
  title: "Gallery | Salalihini Wasanthaya 2026",
  description:
    "Browse photos and videos from past Salalihini Wasanthaya events.",
};

const images = Array.from({ length: 44 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    id: number,
    src: `/images/${number}.jpeg`,
    alt: `Gallery image ${number}`,
  };
});

function getTileVariantClass(index: number) {
  if (index % 11 === 0) return styles.tileBig;
  if (index % 7 === 0) return styles.tileWide;
  if (index % 5 === 0) return styles.tileTall;
  return "";
}

export default function GalleryPage() {
  return (
    <>
      {/* ── Grid ─────────────────────────────────────────── */}
      <section className={styles.gallerySection}>
        <div className="container">
          <SectionLabel label="GALLERY" />
          <div className={styles.galleryGrid}>
            {images.map((img, index) => (
              <div
                key={img.id}
                className={`${styles.tile} ${getTileVariantClass(index)}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className={styles.img}
                />

                <a
                  className={styles.downloadButton}
                  href={img.src}
                  download={`gallery-${img.id}.jpeg`}
                  aria-label={`Download image ${img.id}`}
                >
                  <FontAwesomeIcon icon={faDownload} className={styles.icon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
