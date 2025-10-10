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
    <FormControl
      size="small"
      sx={{
        minWidth: { xs: 80, md: 110 },
        maxWidth: { xs: "40%", md: 140 },
        width: { xs: "40%", md: "auto" },
      }}
    >
      <Select
        value={i18n.language || "ko"}
        onChange={change}
        displayEmpty
        variant="outlined"
        sx={(theme) => ({
          fontSize: 13,
          fontWeight: 600,
          height: 34,
          borderRadius: theme.shape.borderRadius,
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[900]
              : "rgba(255, 255, 255, 0.9)",
          color:
            theme.palette.mode === "dark" ? theme.palette.grey[100] : theme.palette.text.primary,
          width: "100%",
          "& .MuiSelect-select": { py: 0.5, pl: 1.25, pr: 1.25, fontWeight: 600, textAlign: "center" },
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
              theme.palette.mode === "dark" ? theme.palette.grey[100] : theme.palette.text.primary,
          },
        })}
        MenuProps={{
          PaperProps: {
            sx: (theme) => ({
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.grey[900]
                  : theme.palette.background.default,
            }),
          },
        }}
      >
        {langs.map((l) => (
          <MenuItem
            key={l.code}
            value={l.code}
            sx={{ fontSize: 13, fontWeight: 600, justifyContent: "left" }}
          >
            {l.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
