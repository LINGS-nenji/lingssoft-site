import { useState } from "react";

// @mui material components
import Drawer from "@mui/material/Drawer";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Tooltip from "@mui/material/Tooltip";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
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
        <MKBox display="flex" flexDirection="column" height="100%">
          <MKBox
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px={3}
            py={2}
            sx={({ palette }) => ({
              borderBottom: `1px solid ${isDark ? palette.grey[800] : palette.grey[200]}`,
            })}
          >
            <MKBox display="flex" alignItems="center" gap={1.25}>
              <Icon fontSize="medium">smart_toy</Icon>
              <MKTypography variant="button" fontWeight="bold" color={isDark ? "white" : "dark"}>
                AI Chatbot
              </MKTypography>
            </MKBox>
            <IconButton aria-label="Close AI chatbot" onClick={handleClose} size="small">
              <Icon fontSize="small">close</Icon>
            </IconButton>
          </MKBox>
          <MKBox flex={1} px={3} py={2} overflow="auto" />
          <MKBox
            px={2}
            py={2}
            sx={({ palette }) => ({
              borderTop: `1px solid ${isDark ? palette.grey[800] : palette.grey[200]}`,
            })}
          >
            <MKBox
              display="flex"
              alignItems="center"
              gap={1}
              px={1.5}
              py={0.75}
              borderRadius="lg"
              sx={({ palette }) => ({
                backgroundColor: isDark ? palette.grey[900] : palette.grey[100],
              })}
            >
              <InputBase
                fullWidth
                placeholder="메시지를 입력하세요"
                inputProps={{ "aria-label": "AI chatbot message" }}
                sx={({ palette }) => ({
                  color: isDark ? palette.white.main : palette.dark.main,
                  fontSize: "0.875rem",
                })}
              />
              <IconButton aria-label="Send AI chatbot message" size="small">
                <Icon fontSize="small">send</Icon>
              </IconButton>
            </MKBox>
          </MKBox>
        </MKBox>
      </Drawer>
    </>
  );
}
