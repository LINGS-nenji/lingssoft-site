/**
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React themes
import { buildTheme } from "assets/theme";
import Presentation from "layouts/pages/presentation";

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
          <Route exact path={normalizedPath} element={route.component} key={key} />,
          <Route
            exact
            path={`/:lng${normalizedPath}`}
            element={route.component}
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
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/:lng/presentation" element={<Presentation />} />
        <Route path="/:lng/*" element={<Navigate to="presentation" replace />} />
        <Route path="*" element={<Navigate to="/presentation" replace />} />
      </Routes>
    </ThemeProvider>
  );
}
