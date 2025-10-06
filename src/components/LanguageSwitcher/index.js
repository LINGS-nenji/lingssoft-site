import React from "react";
import i18n from "../../i18n";

const langs = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "EN" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
];

export default function LanguageSwitcher() {
  const change = (e) => {
    const lng = e.target.value;
    const path = window.location.pathname;
    const parts = path.split("/").filter(Boolean);
    if (langs.some((l) => l.code === parts[0])) parts.shift();
    const newPath = `/${lng}/${parts.join("/")}`;
    i18n.changeLanguage(lng);
    window.location.href = newPath || `/${lng}/`;
  };

  return (
    <select onChange={change} value={i18n.language || "ko"}>
      {langs.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
