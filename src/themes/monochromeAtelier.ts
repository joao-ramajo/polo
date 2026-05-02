import type { ThemePreset } from "./types";

export const monochromeAtelierTheme: ThemePreset = {
  id: "monochrome-atelier",
  name: "Monocromatico Atelier",
  description:
    "Leitura mais fotografica, com cinzas profundos e detalhes discretos.",
  rootClassName: "theme-monochrome-atelier theme-layout-monochrome",
  colors: {
    background: "#121212",
    surface: "#1f1f1f",
    text: "#f1f1f1",
    muted: "#8b8b8b",
    accent: "#d6d6d6",
  },
  fonts: {
    display: '"Manrope", ui-sans-serif, system-ui, sans-serif',
    body: '"Manrope", ui-sans-serif, system-ui, sans-serif',
  },
  effects: {
    pageBackground:
      "radial-gradient(circle at top, rgba(255, 255, 255, 0.07), transparent 24%), linear-gradient(180deg, #161616 0%, #0f0f0f 100%)",
    selection: "rgba(255, 255, 255, 0.18)",
    glowShadow: "0 20px 80px rgba(255, 255, 255, 0.08)",
    ambientOne: "rgba(255, 255, 255, 0.05)",
    ambientTwo: "rgba(255, 255, 255, 0.04)",
    ambientThree: "rgba(255, 255, 255, 0.03)",
  },
  layout: {
    maxWidth: "1220px",
  },
};
