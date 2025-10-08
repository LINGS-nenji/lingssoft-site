import React from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

const options = [
  { value: "light", labelKey: "theme.light" },
  { value: "dark", labelKey: "theme.dark" },
];

export default function ThemeSwitcher() {
  const { mode, setMode } = useThemeMode();
  const { t } = useTranslation("common");

  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 140 }}>
      <Select
        value={mode}
        onChange={handleChange}
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
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {t(option.labelKey)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
