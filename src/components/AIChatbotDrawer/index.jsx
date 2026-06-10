import { useState } from "react";

// @mui material components
import Drawer from "@mui/material/Drawer";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import MKBox from "components/MKBox";
import { useThemeMode } from "context/ThemeModeContext";

export default function AIChatbotDrawer() {
  const [open, setOpen] = useState(false);
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip title="AI Chatbot">
        <IconButton
          aria-label="Open AI chatbot"
          onClick={handleOpen}
          size="small"
          sx={({ palette }) => ({
            color: isDark ? palette.white.main : palette.dark.main,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
              transform: "scale(1.1)",
            },
          })}
        >
          <Icon fontSize="medium">smart_toy</Icon>
        </IconButton>
      </Tooltip>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: ({ palette }) => ({
            width: { xs: "100%", sm: 420 },
            maxWidth: "100vw",
            backgroundColor: isDark ? palette.background.paper : palette.white.main,
          }),
        }}
      >
        <MKBox height="100%" />
      </Drawer>
    </>
  );
}
