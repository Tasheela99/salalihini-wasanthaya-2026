import Image from "next/image";
import Link from "next/link";
import SectionLabel from "../SectionLabel/SectionLabel";
import styles from "./GalleryPreview.module.css";

const SELECTED_IMAGE_IDS = ["03", "08", "19", "24", "33", "32"] as const;

const images = SELECTED_IMAGE_IDS.map((id) => ({
  id,
  src: `/images/${id}.jpeg`,
  alt: `Gallery image ${id}`,
}));

function getTileVariantClass(index: number) {
  if (index % 7 === 0) return styles.tileBig;
  if (index % 4 === 0) return styles.tileWide;
  if (index % 3 === 0) return styles.tileTall;
  return "";
}

export default function GalleryPreview() {
  return (
    <section className={styles.galleryPreviewSection}>
      <div className="container">
        <SectionLabel label="GALLERY" />
        <div className={styles.grid}>
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`${styles.tile} ${getTileVariantClass(index)}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className={styles.img}
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                quality={90}
                priority={index < 4}
              />
            </div>
          ))}
        </div>
        <div className={styles.buttonWrap}>
          <Link href="/gallery" className={styles.viewMoreBtn}>
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
