import type { ThemePreset } from "./types";

export const darkEditorialTheme: ThemePreset = {
  id: "dark-editorial",
  name: "Escuro Editorial",
  description: "Base premium com fundo escuro, contraste elegante e clima de galeria.",
  rootClassName: "theme-dark-editorial theme-layout-editorial",
  colors: {
    background: "#0d0d0d",
    surface: "#161616",
    text: "#f5f5f5",
    muted: "#a3a3a3",
    accent: "#c9a227",
  },
  fonts: {
    display: '"Fraunces", serif',
    body: '"Manrope", ui-sans-serif, system-ui, sans-serif',
  },
  effects: {
    pageBackground:
      "radial-gradient(circle at top, rgba(201, 162, 39, 0.12), transparent 26%), linear-gradient(180deg, #111111 0%, #090909 100%)",
    selection: "rgba(201, 162, 39, 0.3)",
    glowShadow: "0 20px 80px rgba(201, 162, 39, 0.12)",
    ambientOne: "rgba(201, 162, 39, 0.12)",
    ambientTwo: "rgba(255, 255, 255, 0.05)",
    ambientThree: "rgba(201, 162, 39, 0.06)",
  },
  layout: {
    maxWidth: "1180px",
  },
};
