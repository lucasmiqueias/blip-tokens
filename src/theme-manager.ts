/**
 * BLiP Design System - Theme Management
 * Enhanced theme manager with React hooks and TypeScript support
 */

import * as React from "react";

export type Theme = "light" | "dark" | "auto";

export interface ThemeConfig {
  theme: Theme;
  systemPreference?: "light" | "dark";
}

class ThemeManager {
  private currentTheme: Theme = "auto";
  private systemPreference: "light" | "dark" = "light";
  private listeners: ((theme: Theme) => void)[] = [];

  constructor() {
    this.init();
  }

  private init() {
    // Detect system preference
    this.detectSystemPreference();

    // Listen for system preference changes
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addListener(this.handleSystemPreferenceChange.bind(this));
    }

    // Load saved theme from localStorage
    this.loadSavedTheme();

    // Apply initial theme
    this.applyTheme();
  }

  private detectSystemPreference() {
    if (typeof window !== "undefined" && window.matchMedia) {
      this.systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    }
  }

  private handleSystemPreferenceChange = (e: MediaQueryListEvent) => {
    this.systemPreference = e.matches ? "dark" : "light";
    if (this.currentTheme === "auto") {
      this.applyTheme();
      this.notifyListeners();
    }
  };

  private loadSavedTheme() {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedTheme = localStorage.getItem("blip-theme") as Theme;
      if (savedTheme && ["light", "dark", "auto"].includes(savedTheme)) {
        this.currentTheme = savedTheme;
      }
    }
  }

  private saveTheme(theme: Theme) {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("blip-theme", theme);
    }
  }

  private applyTheme() {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    if (this.currentTheme === "auto") {
      // Remove explicit theme and let CSS media queries handle it
      root.removeAttribute("data-theme");
      root.setAttribute("data-theme-mode", "auto");
    } else {
      // Set explicit theme
      root.setAttribute("data-theme", this.currentTheme);
      root.removeAttribute("data-theme-mode");
    }
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.currentTheme));
  }

  /**
   * Set the current theme
   */
  setTheme(theme: Theme) {
    this.currentTheme = theme;
    this.saveTheme(theme);
    this.applyTheme();
    this.notifyListeners();
  }

  /**
   * Get the current theme setting
   */
  getTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * Get the effective theme (resolves 'auto' to actual theme)
   */
  getEffectiveTheme(): "light" | "dark" {
    if (this.currentTheme === "auto") {
      return this.systemPreference;
    }
    return this.currentTheme;
  }

  /**
   * Get the system preference
   */
  getSystemPreference(): "light" | "dark" {
    return this.systemPreference;
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme() {
    const effectiveTheme = this.getEffectiveTheme();
    this.setTheme(effectiveTheme === "light" ? "dark" : "light");
  }

  /**
   * Subscribe to theme changes
   */
  subscribe(listener: (theme: Theme) => void): () => void {
    this.listeners.push(listener);

    // Return unsubscribe function
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  /**
   * Check if dark mode is currently active
   */
  isDarkMode(): boolean {
    return this.getEffectiveTheme() === "dark";
  }

  /**
   * Check if light mode is currently active
   */
  isLightMode(): boolean {
    return this.getEffectiveTheme() === "light";
  }
}

// Export singleton instance
export const themeManager = new ThemeManager();

// React hook for theme management
export function useTheme() {
  const [theme, setTheme] = React.useState<Theme>(themeManager.getTheme());
  const [effectiveTheme, setEffectiveTheme] = React.useState<"light" | "dark">(
    themeManager.getEffectiveTheme(),
  );

  React.useEffect(() => {
    const unsubscribe = themeManager.subscribe((newTheme) => {
      setTheme(newTheme);
      setEffectiveTheme(themeManager.getEffectiveTheme());
    });

    return unsubscribe;
  }, []);

  return {
    theme,
    effectiveTheme,
    setTheme: themeManager.setTheme.bind(themeManager),
    toggleTheme: themeManager.toggleTheme.bind(themeManager),
    isDarkMode: themeManager.isDarkMode.bind(themeManager),
    isLightMode: themeManager.isLightMode.bind(themeManager),
    systemPreference: themeManager.getSystemPreference(),
  };
}

// Utility function to get CSS variable value
export const getCSSVariable = (variable: string): string => {
  if (typeof document === "undefined") return "";
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

export default themeManager;
