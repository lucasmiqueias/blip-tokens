/**
 * BLiP Design System - Main Entry Point
 *
 * This is the main entry point for the BLiP Design System.
 * It exports all tokens, theme management utilities, and type definitions.
 */

// Core tokens
export {
  tokens,
  colors,
  spacing,
  typography,
  shadows,
  cssVars,
} from "./tokens";

// Theme management
export {
  themeManager,
  useTheme,
  getCSSVariable,
  type Theme,
  type ThemeConfig,
} from "./theme-manager";

// Re-export types for external consumption
export type {
  ColorPalette,
  SpacingTokens,
  TypographyTokens,
  ShadowTokens,
} from "./tokens";

// Default export for convenience
export { tokens as default } from "./tokens";
