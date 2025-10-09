import React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useLocation, useNavigate } from "react-router-dom";
import i18n from "../../i18n";

const langs = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "EN" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
];

export default function LanguageSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();

  const change = (e) => {
    const lng = e.target.value;
    const parts = location.pathname.split("/").filter(Boolean);

    if (langs.some((l) => l.code === parts[0])) {
      parts[0] = lng;
    } else {
      parts.unshift(lng);
    }

    const newPath = parts.length ? `/${parts.join("/")}` : `/${lng}`;
    const suffix = `${location.search || ""}${location.hash || ""}`;

    i18n.changeLanguage(lng);
    navigate(`${newPath}${suffix}`, { replace: true });
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <Select
        value={i18n.language || "ko"}
        onChange={change}
        displayEmpty
        variant="outlined"
        sx={(theme) => ({
          fontSize: 14,
          height: 36,
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.paper
              : "rgba(255, 255, 255, 0.9)",
          color:
            theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.text.main,
          "& .MuiSelect-select": { py: 0.5, pl: 1.5 },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor:
              theme.palette.mode === "dark" ? theme.palette.grey[700] : "rgba(255, 255, 255, 0.6)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor:
              theme.palette.mode === "dark" ? theme.palette.grey[500] : theme.palette.info.main,
          },
          "& .MuiSelect-icon": {
            color:
              theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.text.main,
          },
        })}
        MenuProps={{
          PaperProps: {
            sx: (theme) => ({
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.background.paper
                  : theme.palette.background.default,
            }),
          },
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
