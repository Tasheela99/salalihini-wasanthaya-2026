/**
 * theme.ts
 * ─────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all colours and typography used
 * across the Salalihini Wasanthaya 2026 application.
 *
 * To change the look of the entire site, edit only this file.
 * Values are exported both as JS constants (for use in
 * TypeScript/components) and as CSS custom-property names so
 * they map directly to globals.css.
 * ─────────────────────────────────────────────────────────────
 */

// ── Colour Palette ───────────────────────────────────────────
export const colors = {
  /** Primary – Spring Gold */
  primary: "#F4B942",
  primaryLight: "#F4B942",
  /** Used as the main dark text */
  primaryDark: "#1E2A2E", // Rich Charcoal

  /** Secondary – Ceylon Green */
  secondary: "#2F6B3E",
  secondaryLight: "rgba(47, 107, 62, 0.12)",
  secondaryDark: "#2F6B3E",

  /** Accents */
  accentRed: "#C33C2C", // Auspicious Red
  accentBlue: "#3A6EA5", // Hill Country Blue

  /** Backgrounds */
  accent: "#FFF9EF", // Creamy White
  accentDark: "rgba(255, 249, 239, 0.85)",

  /** Neutrals mapped to palette */
  white: "#FFF9EF",
  black: "#2E241F", // Deep Earth

  /** Surface / background colours */
  bgPage: "#FFF9EF",
  bgTopbar: "#2F6B3E",
  bgHeader: "#FFF9EF",
  bgFooter: "#1E2A2E",

  /** Text colours */
  textPrimary: "#1E2A2E",
  textSecondary: "#5C5B53",
  textMuted: "rgba(92, 91, 83, 0.72)",
  textOnDark: "#FFF9EF",
  textOnPrimary: "#2E241F",

  /** Border / divider */
  border: "rgba(47, 107, 62, 0.25)",
  borderDark: "rgba(47, 107, 62, 0.45)",
} as const;

// ── Typography ───────────────────────────────────────────────
export const fonts = {
  /**
   * Body font – clean, readable sans-serif.
   * Using Roboto for modern, professional look with excellent readability.
   */
  body: "var(--font-roboto), 'Roboto', Arial, Helvetica, sans-serif",

  /**
   * Heading font – same as body for consistency.
   * You can use a different font in the future if desired.
   */
  heading: "var(--font-roboto), 'Roboto', Arial, Helvetica, sans-serif",

  /** Monospace – for code snippets if needed */
  mono: "'Courier New', Courier, monospace",
} as const;

// ── Font Sizes (rem scale) ────────────────────────────────────
export const fontSizes = {
  xs: "0.75rem",   // 12px
  sm: "0.875rem",  // 14px
  base: "1rem",    // 16px
  md: "1.125rem",  // 18px
  lg: "1.25rem",   // 20px
  xl: "1.5rem",    // 24px
  "2xl": "1.875rem", // 30px
  "3xl": "2.25rem",  // 36px
  "4xl": "3rem",     // 48px
} as const;

// ── Spacing (rem scale) ───────────────────────────────────────
export const spacing = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
} as const;

// ── Border Radius ─────────────────────────────────────────────
export const radius = {
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "9999px",
} as const;

// ── Z-index layers ────────────────────────────────────────────
export const zIndex = {
  topbar: 100,
  header: 90,
  dropdown: 80,
  modal: 200,
} as const;

// ── Breakpoints ───────────────────────────────────────────────
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;
