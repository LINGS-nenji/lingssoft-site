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
