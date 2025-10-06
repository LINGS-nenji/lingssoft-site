import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import i18n from "../../i18n";

function withLang(path) {
  const lang = i18n.language || "ko";
  if (!path || path === "/") return `/${lang}/`;
  return `/${lang}${path.startsWith("/") ? "" : "/"}${path}`.replace(/\/+/g, "/");
}

export default function Header() {
  const { t } = useTranslation();
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 16px",
        background: "#fff",
      }}
    >
      <div style={{ fontWeight: 700 }}>{t("site.title")}</div>
      <nav style={{ display: "flex", gap: 12 }}>
        <a href={withLang("/")} style={{ textDecoration: "none" }}>
          {t("menu.home")}
        </a>
        <a href={withLang("/business")} style={{ textDecoration: "none" }}>
          {t("menu.business")}
        </a>
        <a href={withLang("/business/solutions")} style={{ textDecoration: "none" }}>
          {t("menu.solutions")}
        </a>
        <a href={withLang("/business/pricing")} style={{ textDecoration: "none" }}>
          {t("menu.pricing")}
        </a>
        <a href={withLang("/company")} style={{ textDecoration: "none" }}>
          {t("menu.company")}
        </a>
      </nav>
      <LanguageSwitcher />
    </header>
  );
}
