import type { ThemePreset } from "./types";

export const journalMonoTheme: ThemePreset = {
  id: "journal-mono",
  name: "Jornal Mono",
  description: "Base inspirada em jornal experimental, com leitura monoespacada e contraste contido.",
  rootClassName: "theme-journal-mono theme-layout-journal",
  colors: {
    background: "#efede7",
    surface: "#f8f6f1",
    text: "#202020",
    muted: "#6a6a6a",
    accent: "#363636",
  },
  fonts: {
    display: '"IBM Plex Mono", ui-monospace, monospace',
    body: '"IBM Plex Mono", ui-monospace, monospace',
  },
  effects: {
    pageBackground:
      "linear-gradient(180deg, #f4f1eb 0%, #ece8df 100%)",
    selection: "rgba(54, 54, 54, 0.16)",
    glowShadow: "0 12px 48px rgba(54, 54, 54, 0.08)",
    ambientOne: "rgba(54, 54, 54, 0.05)",
    ambientTwo: "rgba(54, 54, 54, 0.04)",
    ambientThree: "rgba(54, 54, 54, 0.03)",
  },
  layout: {
    maxWidth: "1160px",
  },
};
