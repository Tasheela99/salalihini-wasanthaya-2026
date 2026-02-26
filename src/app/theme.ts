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
  /** Primary brand colour – deep green */
  primary: "#2D5F3F", // main green
  /** Slightly lighter primary for hover states */
  primaryLight: "#3D8B52",
  /** Dark shade used for text on light backgrounds */
  primaryDark: "#1A3A24",

  /** Secondary brand colour – light green */
  secondary: "#A7E9AF", // pale green
  secondaryLight: "#D0F5DF", // even lighter green
  secondaryDark: "#6FCF97", // accent green

  /** Accent – white and off-white */
  accent: "#F5FFF6", // very light greenish white
  accentDark: "#E2F5E8",

  /** Neutral shades */
  white: "#FFFFFF",
  black: "#111111",

  /** Surface / background colours */
  bgPage: "#F8FFF9",        // pale greenish white page background
  bgTopbar: "#2D5F3F",      // topbar background (main green)
  bgHeader: "#FFFFFF",      // main header background
  bgFooter: "#1A3A24",      // dark green footer background

  /** Text colours */
  textPrimary: "#1A3A24",
  textSecondary: "#3D8B52",
  textMuted: "#6FCF97",
  textOnDark: "#F5FFF6",    // text placed on dark backgrounds
  textOnPrimary: "#FFFFFF", // text placed on primary-coloured bg

  /** Border / divider */
  border: "#D0F5DF",
  borderDark: "#A7E9AF",
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
