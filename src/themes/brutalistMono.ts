import type { ThemePreset } from "./types";

export const brutalistMonoTheme: ThemePreset = {
  id: "brutalist-mono",
  name: "Brutalista Mono",
  description: "Mais rigido, direto e grafico, com tipografia forte e geometria seca.",
  rootClassName: "theme-brutalist-mono theme-layout-brutalist",
  colors: {
    background: "#f3f3ef",
    surface: "#ffffff",
    text: "#050505",
    muted: "#4b4b4b",
    accent: "#050505",
  },
  fonts: {
    display: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
    body: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
  },
  effects: {
    pageBackground:
      "linear-gradient(180deg, #f3f3ef 0%, #ecece6 100%)",
    selection: "rgba(5, 5, 5, 0.16)",
    glowShadow: "0 0 0 rgba(0, 0, 0, 0)",
    ambientOne: "rgba(0, 0, 0, 0)",
    ambientTwo: "rgba(0, 0, 0, 0)",
    ambientThree: "rgba(0, 0, 0, 0)",
  },
  layout: {
    maxWidth: "1280px",
  },
};
