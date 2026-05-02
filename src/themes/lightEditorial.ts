import type { ThemePreset } from "./types";

export const lightEditorialTheme: ThemePreset = {
  id: "light-editorial",
  name: "Claro Editorial",
  description: "Versao clara com atmosfera de revista premium e contraste suave.",
  rootClassName: "theme-light-editorial theme-layout-editorial",
  colors: {
    background: "#f4efe6",
    surface: "#ebe4d7",
    text: "#161616",
    muted: "#6f675a",
    accent: "#785f1f",
  },
  fonts: {
    display: '"Newsreader", serif',
    body: '"Manrope", ui-sans-serif, system-ui, sans-serif',
  },
  effects: {
    pageBackground:
      "radial-gradient(circle at top, rgba(120, 95, 31, 0.12), transparent 24%), linear-gradient(180deg, #f7f2e9 0%, #ece4d7 100%)",
    selection: "rgba(120, 95, 31, 0.18)",
    glowShadow: "0 20px 80px rgba(120, 95, 31, 0.14)",
    ambientOne: "rgba(120, 95, 31, 0.12)",
    ambientTwo: "rgba(22, 22, 22, 0.08)",
    ambientThree: "rgba(120, 95, 31, 0.08)",
  },
  layout: {
    maxWidth: "1180px",
  },
};
