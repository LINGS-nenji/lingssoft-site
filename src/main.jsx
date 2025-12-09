import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "App";
import "./i18n";
import ThemeModeProvider from "context/ThemeModeContext";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <ThemeModeProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeModeProvider>
);
