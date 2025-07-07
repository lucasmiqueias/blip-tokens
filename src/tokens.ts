/**
 * Design tokens as JavaScript objects
 * Useful for JavaScript consumption and programmatic access
 */

import colorsJson from "../tokens/colors.json";
import spacingJson from "../tokens/spacing.json";
import typographyJson from "../tokens/typography.json";
import shadowsJson from "../tokens/shadows.json";

// Type definitions
export interface ColorPalette {
  brand: string;
  light: {
    primary: string;
    secondary: string;
    surface: Record<string, string>;
    content: Record<string, string>;
    border: Record<string, string>;
    semantic: Record<string, string>;
    extended: Record<string, string>;
    actions: Record<string, string>;
  };
  dark: {
    primary: string;
    secondary: string;
    surface: Record<string, string>;
    content: Record<string, string>;
    border: Record<string, string>;
    semantic: Record<string, string>;
    extended: Record<string, string>;
    actions: Record<string, string>;
  };
}

export interface SpacingTokens {
  spacing: Record<string, string>;
  radius: Record<string, string>;
  components: Record<string, Record<string, string>>;
  icons: Record<string, string>;
  containers: Record<string, string>;
  zIndex: Record<string, string | number>;
}

export interface TypographyTokens {
  fontSizes: Record<string, string>;
  fontFamilies: Record<string, string[]>;
  fontWeights: Record<string, number>;
  lineHeights: Record<string, number>;
}

export interface ShadowTokens {
  shadows: Record<string, string>;
}

// Export typed tokens
export const colors = colorsJson as any;
export const spacing: SpacingTokens = spacingJson;
export const typography: TypographyTokens = typographyJson;
export const shadows: ShadowTokens = shadowsJson;

// Consolidated tokens export
export const tokens = {
  colors,
  spacing,
  typography,
  shadows,
} as const;

// CSS Custom Property helpers
export const cssVars = {
  // Colors
  brand: "var(--color-brand)",

  // Surfaces
  surface: {
    0: "var(--surface-0)",
    1: "var(--surface-1)",
    2: "var(--surface-2)",
    3: "var(--surface-3)",
    4: "var(--surface-4)",
    positive: "var(--surface-positive)",
    negative: "var(--surface-negative)",
    primary: "var(--surface-primary)",
  },

  // Content
  content: {
    default: "var(--content-default)",
    disable: "var(--content-disable)",
    ghost: "var(--content-ghost)",
    bright: "var(--content-bright)",
    din: "var(--content-din)",
    muted: "var(--content-muted)",
  },

  // Borders
  border: {
    1: "var(--border-1)",
    2: "var(--border-2)",
    3: "var(--border-3)",
  },

  // Status colors
  status: {
    positive: "var(--color-positive)",
    negative: "var(--color-negative)",
    info: "var(--color-info)",
    system: "var(--color-system)",
    focus: "var(--color-focus)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    error: "var(--color-error)",
    delete: "var(--color-delete)",
  },

  // Spacing
  spacing: {
    0: "var(--spacing-0)",
    1: "var(--spacing-1)",
    2: "var(--spacing-2)",
    3: "var(--spacing-3)",
    4: "var(--spacing-4)",
    5: "var(--spacing-5)",
    6: "var(--spacing-6)",
    8: "var(--spacing-8)",
    10: "var(--spacing-10)",
    12: "var(--spacing-12)",
  },

  // Border radius
  radius: {
    none: "var(--radius-none)",
    sm: "var(--radius-sm)",
    base: "var(--radius-base)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)",
    "3xl": "var(--radius-3xl)",
    full: "var(--radius-full)",
  },

  // Typography
  fontSize: {
    xs: "var(--font-size-xs)",
    sm: "var(--font-size-sm)",
    base: "var(--font-size-base)",
    lg: "var(--font-size-lg)",
    xl: "var(--font-size-xl)",
    "2xl": "var(--font-size-2xl)",
    "3xl": "var(--font-size-3xl)",
    "4xl": "var(--font-size-4xl)",
    "5xl": "var(--font-size-5xl)",
  },

  fontWeight: {
    thin: "var(--font-weight-thin)",
    light: "var(--font-weight-light)",
    normal: "var(--font-weight-normal)",
    medium: "var(--font-weight-medium)",
    semibold: "var(--font-weight-semibold)",
    bold: "var(--font-weight-bold)",
    extrabold: "var(--font-weight-extrabold)",
  },

  fontFamily: {
    sans: "var(--font-family-sans)",
    serif: "var(--font-family-serif)",
    mono: "var(--font-family-mono)",
  },

  // Shadows
  shadow: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    xl: "var(--shadow-xl)",
    "2xl": "var(--shadow-2xl)",
    inner: "var(--shadow-inner)",
    none: "var(--shadow-none)",
  },

  // Actions
  action: {
    hover: "var(--action-hover)",
    pressed: "var(--action-pressed)",
  },
} as const;

export default tokens;
