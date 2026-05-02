import type { CSSProperties } from "react";
import { hexToRgba } from "../utils/color";
import { brutalistMonoTheme } from "./brutalistMono";
import { darkEditorialTheme } from "./darkEditorial";
import { bodyFontOptions, displayFontOptions } from "./fontOptions";
import { journalMonoTheme } from "./journalMono";
import { lightEditorialTheme } from "./lightEditorial";
import { monochromeAtelierTheme } from "./monochromeAtelier";
import type { ThemePreset } from "./types";

type ThemeStyle = CSSProperties & Record<`--${string}`, string>;

export const themePresets: Record<string, ThemePreset> = {
  [darkEditorialTheme.id]: darkEditorialTheme,
  [lightEditorialTheme.id]: lightEditorialTheme,
  [monochromeAtelierTheme.id]: monochromeAtelierTheme,
  [brutalistMonoTheme.id]: brutalistMonoTheme,
  [journalMonoTheme.id]: journalMonoTheme,
};

export const themeOptions = Object.values(themePresets);

export function getThemeCssVariables(theme: ThemePreset): ThemeStyle {
  return {
    "--color-background": theme.colors.background,
    "--color-surface": theme.colors.surface,
    "--color-text": theme.colors.text,
    "--color-muted": theme.colors.muted,
    "--color-accent": theme.colors.accent,
    "--max-width": theme.layout.maxWidth,
    "--font-display": theme.fonts.display,
    "--font-body": theme.fonts.body,
    "--selection-background": theme.effects.selection,
    "--shadow-glow": theme.effects.glowShadow,
  };
}

type ThemeCustomizerOverrides = {
  colors?: Partial<ThemePreset["colors"]>;
  fonts?: Partial<ThemePreset["fonts"]>;
};

export function createThemeOverride(
  baseTheme: ThemePreset,
  overrides: ThemeCustomizerOverrides,
): ThemePreset {
  const colors = {
    ...baseTheme.colors,
    ...overrides.colors,
  };
  const fonts = {
    ...baseTheme.fonts,
    ...overrides.fonts,
  };

  return {
    ...baseTheme,
    id: `${baseTheme.id}-custom`,
    name: `${baseTheme.name} Custom`,
    colors,
    fonts,
    effects: {
      ...baseTheme.effects,
      pageBackground: `radial-gradient(circle at top, ${hexToRgba(colors.accent, 0.14)}, transparent 26%), linear-gradient(180deg, ${hexToRgba(colors.background, 0.9)} 0%, ${colors.background} 100%)`,
      selection: hexToRgba(colors.accent, 0.3),
      glowShadow: `0 20px 80px ${hexToRgba(colors.accent, 0.16)}`,
      ambientOne: hexToRgba(colors.accent, 0.14),
      ambientTwo: hexToRgba(colors.text, 0.05),
      ambientThree: hexToRgba(colors.accent, 0.06),
    },
  };
}

export { bodyFontOptions, displayFontOptions };
export type { ThemePreset } from "./types";
