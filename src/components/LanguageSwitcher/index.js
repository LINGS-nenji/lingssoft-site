import React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
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
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <Select
        value={i18n.language || "ko"}
        onChange={change}
        displayEmpty
        sx={{
          fontSize: 14,
          height: 36,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          "& .MuiSelect-select": { py: 0.5, pl: 1.5 },
        }}
      >
        {langs.map((l) => (
          <MenuItem key={l.code} value={l.code}>
            {l.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
