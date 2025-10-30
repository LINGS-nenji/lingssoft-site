import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // When no language is detected, fall back to English
    fallbackLng: "en",
    supportedLngs: ["ko", "en", "ja", "zh"],
    ns: ["common", "presentation", "terms", "privacy", "gdpr", "license"],
    defaultNS: "common",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      // Prefer explicit signals (URL/cookie/localStorage). Do NOT auto-detect
      // from browser or <html> so first visit defaults to English.
      order: ["path", "cookie", "localStorage"],
      caches: ["cookie"],
    },
    react: { useSuspense: true },
    interpolation: { escapeValue: false },
  });

export default i18n;
