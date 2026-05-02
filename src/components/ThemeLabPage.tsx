import { useMemo, useState } from "react";
import { activeTheme } from "../data/theme";
import {
  bodyFontOptions,
  createThemeOverride,
  displayFontOptions,
  themeOptions,
  themePresets,
} from "../themes";
import { PortfolioPage } from "./PortfolioPage";

const THEME_PARAM = "theme";

type ThemeLabPageProps = {
  selectedThemeId: string;
  onSelectTheme: (themeId: string) => void;
};

function getThemeIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get(THEME_PARAM) ?? activeTheme.id;
}

type ThemeLabFormState = {
  background: string;
  surface: string;
  text: string;
  muted: string;
  accent: string;
  displayFont: string;
  bodyFont: string;
};

function createFormState(themeId: string): ThemeLabFormState {
  const theme = themePresets[themeId] ?? activeTheme;

  return {
    background: theme.colors.background,
    surface: theme.colors.surface,
    text: theme.colors.text,
    muted: theme.colors.muted,
    accent: theme.colors.accent,
    displayFont: theme.fonts.display,
    bodyFont: theme.fonts.body,
  };
}

export function ThemeLabPage({
  selectedThemeId,
  onSelectTheme,
}: ThemeLabPageProps) {
  const [formState, setFormState] = useState(() =>
    createFormState(getThemeIdFromUrl()),
  );

  const selectedTheme = themePresets[selectedThemeId] ?? activeTheme;

  const previewTheme = useMemo(
    () =>
      createThemeOverride(selectedTheme, {
        colors: {
          background: formState.background,
          surface: formState.surface,
          text: formState.text,
          muted: formState.muted,
          accent: formState.accent,
        },
        fonts: {
          display: formState.displayFont,
          body: formState.bodyFont,
        },
      }),
    [formState, selectedTheme],
  );

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="mx-auto grid min-h-screen max-w-[1680px] gap-6 px-4 py-4 xl:grid-cols-[24rem_minmax(0,1fr)]">
        <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-5 xl:sticky xl:top-4 xl:h-[calc(100vh-2rem)] xl:overflow-y-auto">
          <p className="text-[0.68rem] uppercase tracking-[0.38em] text-[#c9a227]">
            Dev Mode
          </p>
          <h1 className="mt-3 font-display text-4xl leading-none text-white">
            Laboratorio de tema
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Teste combinacoes de cores e fontes sobre um preset base antes de
            transformar isso em tema oficial.
          </p>

          <div className="mt-8">
            <label
              htmlFor="theme-lab-base-theme"
              className="text-[0.68rem] uppercase tracking-[0.34em] text-white/45"
            >
              Preset base
            </label>
            <select
              id="theme-lab-base-theme"
              value={selectedThemeId}
              onChange={(event) => {
                const nextThemeId = event.target.value;
                onSelectTheme(nextThemeId);
                setFormState(createFormState(nextThemeId));
              }}
              className="mt-3 w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a227]"
            >
              {themeOptions.map((theme) => (
                <option key={theme.id} value={theme.id}>
                  {theme.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-8 grid gap-4">
            <label className="grid gap-2">
              <span className="text-[0.68rem] uppercase tracking-[0.34em] text-white/45">
                Fundo
              </span>
              <input
                type="color"
                value={formState.background}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    background: event.target.value,
                  }))
                }
                className="h-12 w-full cursor-pointer rounded-xl border border-white/10 bg-transparent"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-[0.68rem] uppercase tracking-[0.34em] text-white/45">
                Superficie
              </span>
              <input
                type="color"
                value={formState.surface}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    surface: event.target.value,
                  }))
                }
                className="h-12 w-full cursor-pointer rounded-xl border border-white/10 bg-transparent"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-[0.68rem] uppercase tracking-[0.34em] text-white/45">
                Texto
              </span>
              <input
                type="color"
                value={formState.text}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    text: event.target.value,
                  }))
                }
                className="h-12 w-full cursor-pointer rounded-xl border border-white/10 bg-transparent"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-[0.68rem] uppercase tracking-[0.34em] text-white/45">
                Muted
              </span>
              <input
                type="color"
                value={formState.muted}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    muted: event.target.value,
                  }))
                }
                className="h-12 w-full cursor-pointer rounded-xl border border-white/10 bg-transparent"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-[0.68rem] uppercase tracking-[0.34em] text-white/45">
                Accent
              </span>
              <input
                type="color"
                value={formState.accent}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    accent: event.target.value,
                  }))
                }
                className="h-12 w-full cursor-pointer rounded-xl border border-white/10 bg-transparent"
              />
            </label>
          </div>

          <div className="mt-8 grid gap-4">
            <label className="grid gap-2">
              <span className="text-[0.68rem] uppercase tracking-[0.34em] text-white/45">
                Fonte de destaque
              </span>
              <select
                value={formState.displayFont}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    displayFont: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a227]"
              >
                {displayFontOptions.map((font) => (
                  <option key={font.id} value={font.value}>
                    {font.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-[0.68rem] uppercase tracking-[0.34em] text-white/45">
                Fonte de corpo
              </span>
              <select
                value={formState.bodyFont}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    bodyFont: event.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#c9a227]"
              >
                {bodyFontOptions.map((font) => (
                  <option key={font.id} value={font.value}>
                    {font.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/45">
              Previa rapida
            </p>
            <div className="mt-4 flex gap-2">
              {[
                formState.background,
                formState.surface,
                formState.text,
                formState.muted,
                formState.accent,
              ].map((color) => (
                <span
                  key={color}
                  className="h-8 w-8 rounded-full border border-white/10"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p
              className="mt-5 text-2xl leading-none"
              style={{ fontFamily: formState.displayFont }}
            >
              Nome Artistico
            </p>
            <p
              className="mt-3 text-sm leading-6 text-white/70"
              style={{ fontFamily: formState.bodyFont }}
            >
              Blackwork autoral, mood premium e presenca visual forte.
            </p>
          </div>
        </aside>

        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 text-[0.68rem] uppercase tracking-[0.32em] text-white/45">
            <span>{selectedTheme.name} customizado</span>
            <span>/__theme-lab</span>
          </div>
          <div className="max-h-[calc(100vh-5.5rem)] overflow-y-auto">
            <PortfolioPage theme={previewTheme} />
          </div>
        </section>
      </div>
    </div>
  );
}
