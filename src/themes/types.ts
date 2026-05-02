export type ThemePreset = {
  id: string;
  name: string;
  description: string;
  rootClassName: string;
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    accent: string;
  };
  fonts: {
    display: string;
    body: string;
  };
  effects: {
    pageBackground: string;
    selection: string;
    glowShadow: string;
    ambientOne: string;
    ambientTwo: string;
    ambientThree: string;
  };
  layout: {
    maxWidth: string;
  };
};
