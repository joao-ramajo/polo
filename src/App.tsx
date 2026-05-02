import { activeTheme } from "./data/theme";
import { PortfolioPage } from "./components/PortfolioPage";
import { ThemePreviewPage } from "./components/ThemePreviewPage";
import { hiddenThemeRoute, isDevModeEnabled } from "./utils/env";

function App() {
  const pathname = window.location.pathname;
  const isThemePreviewRoute = pathname === hiddenThemeRoute;

  if (isThemePreviewRoute && isDevModeEnabled) {
    return <ThemePreviewPage />;
  }

  return <PortfolioPage theme={activeTheme} />;
}

export default App;
