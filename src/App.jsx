import { useEffect, useMemo, Suspense, lazy } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React themes
import { buildTheme } from "assets/theme";
import CircularProgress from "@mui/material/CircularProgress";
const Presentation = lazy(() => import("layouts/pages/presentation"));

// Material Kit 2 PRO React routes
import routes from "routes";
// import Header from "components/Header";
import { useThemeMode } from "context/ThemeModeContext";

export default function App() {
  const { pathname } = useLocation();
  const { mode } = useThemeMode();
  const appTheme = useMemo(() => buildTheme(mode), [mode]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.flatMap((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        const normalizedPath = route.route.startsWith("/") ? route.route : `/${route.route}`;
        const key = route.key || normalizedPath;

        return [
          <Route
            exact
            path={normalizedPath}
            element={typeof route.component === "function" ? <route.component /> : route.component}
            key={key}
          />,
          <Route
            exact
            path={`/:lng${normalizedPath}`}
            element={typeof route.component === "function" ? <route.component /> : route.component}
            key={`${key}-localized`}
          />,
        ];
      }

      return [];
    });

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {/* <Header /> */}
      <Suspense
        fallback={
          <div style={{ display: "grid", placeItems: "center", minHeight: "50vh" }}>
            <CircularProgress />
          </div>
        }
      >
        <Routes>
          {getRoutes(routes)}
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/:lng/presentation" element={<Presentation />} />
          <Route path="/:lng/*" element={<Navigate to="presentation" replace />} />
          <Route path="*" element={<Navigate to="/presentation" replace />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
