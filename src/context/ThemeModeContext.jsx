import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ThemeModeContext = createContext(null);

const storageKey = "lingssoft-theme-mode";

const getInitialMode = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedMode = window.localStorage.getItem(storageKey);
  return storedMode === "dark" ? "dark" : "light";
};

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, mode);
      document.documentElement.setAttribute("data-theme", mode);
    }
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      setMode,
    }),
    [mode]
  );

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
}

ThemeModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }

  return context;
};

export default ThemeModeProvider;
