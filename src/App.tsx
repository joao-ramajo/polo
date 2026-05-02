import { DevThemeToggle } from "./components/DevThemeToggle";
import { PortfolioPage } from "./components/PortfolioPage";
import { ThemePreviewPage } from "./components/ThemePreviewPage";
import { activeTheme } from "./data/theme";
import { useDevTheme } from "./hooks/useDevTheme";
import { hiddenThemeRoute, isDevModeEnabled } from "./utils/env";

function App() {
  const pathname = window.location.pathname;
  const isThemePreviewRoute = pathname === hiddenThemeRoute;
  const initialPreviewThemeId = isThemePreviewRoute
    ? (new URLSearchParams(window.location.search).get("theme") ?? undefined)
    : undefined;
  const { selectedTheme, selectedThemeId, setSelectedThemeId } = useDevTheme({
    initialThemeId: initialPreviewThemeId,
  });

  if (isThemePreviewRoute && isDevModeEnabled) {
    return (
      <ThemePreviewPage
        selectedThemeId={selectedThemeId}
        onSelectTheme={setSelectedThemeId}
      />
    );
  }

  const theme = isDevModeEnabled ? selectedTheme : activeTheme;

  return (
    <>
      <PortfolioPage theme={theme} />
      {isDevModeEnabled && !isThemePreviewRoute ? (
        <DevThemeToggle
          selectedThemeId={selectedThemeId}
          onSelectTheme={setSelectedThemeId}
        />
      ) : null}
    </>
  );
}

export default App;
