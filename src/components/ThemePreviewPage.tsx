import { useEffect } from "react";
import { activeTheme } from "../data/theme";
import { PortfolioPage } from "./PortfolioPage";
import { themeOptions } from "../themes";

const THEME_PARAM = "theme";

function getThemeIdFromUrl(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get(THEME_PARAM) ?? activeTheme.id;
}

type ThemePreviewPageProps = {
  selectedThemeId: string;
  onSelectTheme: (themeId: string) => void;
};

export function ThemePreviewPage({
  selectedThemeId,
  onSelectTheme,
}: ThemePreviewPageProps) {
  const selectedTheme =
    themeOptions.find((theme) => theme.id === selectedThemeId) ?? activeTheme;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set(THEME_PARAM, selectedTheme.id);
    const nextUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", nextUrl);
  }, [selectedTheme.id]);

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="mx-auto grid min-h-screen max-w-[1600px] gap-6 px-4 py-4 xl:grid-cols-[22rem_minmax(0,1fr)]">
        <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-5 xl:sticky xl:top-4 xl:h-[calc(100vh-2rem)] xl:overflow-y-auto">
          <p className="text-[0.68rem] uppercase tracking-[0.38em] text-[#c9a227]">
            Dev Mode
          </p>
          <h1 className="mt-3 font-display text-4xl leading-none text-white">
            Preview de temas
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Pagina oculta para comparar presets visuais. A rota so aparece com
            <code className="ml-1 rounded bg-white/10 px-1.5 py-0.5 text-xs text-white">
              VITE_DEV_MODE=true
            </code>
            .
          </p>

          <div className="mt-8 grid gap-3">
            {themeOptions.map((theme) => {
              const isActive = theme.id === selectedTheme.id;

              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => onSelectTheme(theme.id)}
                  className={`rounded-[1.5rem] border p-4 text-left transition duration-200 ${
                    isActive
                      ? "border-[#c9a227] bg-white/10"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {[theme.colors.background, theme.colors.surface, theme.colors.accent].map(
                      (color) => (
                        <span
                          key={color}
                          className="h-4 w-4 rounded-full border border-black/10"
                          style={{ backgroundColor: color }}
                        />
                      ),
                    )}
                  </div>
                  <p className="mt-4 font-display text-2xl leading-none text-white">
                    {theme.name}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/45">
                    {theme.id}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {theme.description}
                  </p>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 text-[0.68rem] uppercase tracking-[0.32em] text-white/45">
            <span>{selectedTheme.name}</span>
            <span>/__themes?theme={selectedTheme.id}</span>
          </div>
          <div className="max-h-[calc(100vh-5.5rem)] overflow-y-auto">
            <PortfolioPage theme={selectedTheme} />
          </div>
        </section>
      </div>
    </div>
  );
}
