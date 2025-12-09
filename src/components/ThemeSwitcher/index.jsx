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
    <FormControl
      size="small"
      sx={{
        minWidth: { xs: 90, md: 110 },
        maxWidth: { xs: "40%", md: 150 },
        width: { xs: "40%", md: "auto" },
      }}
    >
      <Select
        value={mode}
        onChange={handleChange}
        variant="outlined"
        sx={(theme) => ({
          fontSize: 13,
          fontWeight: 600,
          height: 34,
          borderRadius: theme.shape.borderRadius,
          backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[900] : "rgba(255, 255, 255, 0.9)",
          color:
            theme.palette.mode === "dark" ? theme.palette.grey[100] : theme.palette.text.primary,
          width: "100%",
          "& .MuiSelect-select": {
            py: 0.5,
            pl: 1.25,
            pr: 1.25,
            fontWeight: 600,
            textAlign: "center",
          },
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
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{ fontSize: 13, fontWeight: 600, justifyContent: "left" }}
          >
            {t(option.labelKey)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
