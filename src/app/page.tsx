import type { Metadata } from "next";
import Link from "next/link";
import AboutMission from "./components/AboutMission";
import CallToAction from "./components/CallToAction";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import Newsletter from "./components/Newsletter";
import RecentProjects from "./components/RecentProjects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home | Salalihini Wasanthaya 2026",
  description:
    "Celebrating the spirit of spring through art, culture, and music — Salalihini Wasanthaya 2026.",
};

export default function HomePage() {
  return (
    <>
    <div>
      <Hero></Hero>
    </div>
      <Features />

      <AboutMission />

      <CallToAction />

      <RecentProjects />

      <section className={`section ${styles.newsBanner}`}>
        <div className="container">
          <h2 className={`section-title ${styles.newsBannerTitle}`}>Stay Updated</h2>
          <p className={`section-subtitle ${styles.newsBannerSub}`}>
            Follow our journey — from rehearsals to the grand stage.
          </p>
          <Link href="/news" className={styles.btnPrimary}>
            Read the Latest News
          </Link>
        </div>
      </section>

      <NewsSection />

      <Newsletter />
    </>
  );
}
