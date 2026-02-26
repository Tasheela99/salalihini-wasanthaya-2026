import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SunAnimation from "./components/SunAnimation";
import Topbar from "./components/Topbar";
import "./globals.css";

// FontAwesome configuration
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; // Prevent FontAwesome from adding its CSS automatically

// Configure Roboto font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Salalihini Wasanthaya 2026 | සැළලිහිණි වසන්තය",
  description:
    "Celebrating the spirit of spring through art, culture, and music — Salalihini Wasanthaya 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="si" className={roboto.variable}>
      <body className={roboto.className}>
        <Topbar />
        <Header />
        <SunAnimation />
        <main className="page-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
