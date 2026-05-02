import { useState } from "react";
import { themeOptions } from "../themes";
import { hiddenThemeRoute } from "../utils/env";

type DevThemeToggleProps = {
  selectedThemeId: string;
  onSelectTheme: (themeId: string) => void;
};

export function DevThemeToggle({
  selectedThemeId,
  onSelectTheme,
}: DevThemeToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex flex-col items-end gap-3">
        {isOpen && (
          <div className="w-[20rem] rounded-[1.75rem] border border-white/10 bg-[#090909]/92 p-4 text-white shadow-2xl backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#c9a227]">
                  Dev Mode
                </p>
                <p className="mt-2 font-display text-3xl leading-none">
                  Trocar tema
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-xs uppercase tracking-[0.28em] text-white/55 transition hover:text-white"
              >
                Fechar
              </button>
            </div>

            <div className="mt-5 grid gap-2.5">
              {themeOptions.map((theme) => {
                const isActive = theme.id === selectedThemeId;

                return (
                  <button
                    key={theme.id}
                    type="button"
                    onClick={() => onSelectTheme(theme.id)}
                    className={`rounded-[1.25rem] border p-3 text-left transition ${
                      isActive
                        ? "border-[#c9a227] bg-white/10"
                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {[
                        theme.colors.background,
                        theme.colors.surface,
                        theme.colors.accent,
                      ].map((color) => (
                        <span
                          key={color}
                          className="h-3.5 w-3.5 rounded-full border border-black/10"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 font-display text-2xl leading-none">
                      {theme.name}
                    </p>
                    <p className="mt-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/45">
                      {theme.id}
                    </p>
                  </button>
                );
              })}
            </div>

            <a
              href={hiddenThemeRoute}
              className="mt-4 inline-flex text-xs uppercase tracking-[0.28em] text-white/60 transition hover:text-[#c9a227]"
            >
              Abrir preview completo
            </a>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#090909]/92 px-4 py-3 text-xs uppercase tracking-[0.3em] text-white shadow-2xl backdrop-blur transition hover:border-white/20 hover:bg-[#111111]"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#c9a227]" />
          Tema
        </button>
      </div>
    </div>
  );
}
