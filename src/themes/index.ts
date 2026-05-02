import type { CSSProperties } from "react";
import { brutalistMonoTheme } from "./brutalistMono";
import { darkEditorialTheme } from "./darkEditorial";
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

export type { ThemePreset } from "./types";
