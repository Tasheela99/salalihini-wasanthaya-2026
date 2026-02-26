import type { Metadata } from "next";
import AboutMission from "./components/AboutMission";
import CallToAction from "./components/CallToAction";
import Features from "./components/Features";
import Hero from "./components/Hero";
import ImageBanner from "./components/ImageBanner";
import NewsSection from "./components/NewsSection";
import Newsletter from "./components/Newsletter";
import RecentProjects from "./components/RecentProjects";

export const metadata: Metadata = {
  title: "Home | Salalihini Wasanthaya 2026",
  description:
    "Celebrating the spirit of spring through art, culture, and music — Salalihini Wasanthaya 2026.",
};

export default function HomePage() {
  return (
    <>
      <Hero/>
      <Features />

      <AboutMission />

      <CallToAction />

      <RecentProjects />

      <ImageBanner />

      <NewsSection />

      <Newsletter />
    </>
  );
}
