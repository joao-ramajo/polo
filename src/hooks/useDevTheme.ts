import { useEffect, useState } from "react";
import { activeTheme } from "../data/theme";
import { themePresets } from "../themes";
import { isDevModeEnabled } from "../utils/env";

const DEV_THEME_STORAGE_KEY = "tatoo-whitelabel:dev-theme";

function resolveThemeId(themeId?: string): string {
  if (themeId && themeId in themePresets) {
    return themeId;
  }

  return activeTheme.id;
}

function getStoredThemeId(): string {
  if (!isDevModeEnabled || typeof window === "undefined") {
    return activeTheme.id;
  }

  return resolveThemeId(window.localStorage.getItem(DEV_THEME_STORAGE_KEY) ?? undefined);
}

type UseDevThemeOptions = {
  initialThemeId?: string;
};

export function useDevTheme(options: UseDevThemeOptions = {}) {
  const [selectedThemeId, setSelectedThemeId] = useState(() =>
    resolveThemeId(options.initialThemeId ?? getStoredThemeId()),
  );

  useEffect(() => {
    if (!isDevModeEnabled || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(DEV_THEME_STORAGE_KEY, selectedThemeId);
  }, [selectedThemeId]);

  return {
    selectedThemeId,
    selectedTheme: themePresets[selectedThemeId] ?? activeTheme,
    setSelectedThemeId,
  };
}
