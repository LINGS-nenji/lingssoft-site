import { useState, useRef, useEffect } from "react";

// @mui material components
import Drawer from "@mui/material/Drawer";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import { useThemeMode } from "context/ThemeModeContext";

export default function AIChatbotDrawer() {
  const [open, setOpen] = useState(false);
  const [saveHistory, setSaveHistory] = useState(() => {
    const saved = localStorage.getItem("ai_chat_save_history");
    return saved ? JSON.parse(saved) : true;
  });
  const [messages, setMessages] = useState(() => {
    const savedHistoryStr = localStorage.getItem("ai_chat_save_history");
    const isSavedHistory = savedHistoryStr ? JSON.parse(savedHistoryStr) : true;
    if (isSavedHistory) {
      const savedMessages = localStorage.getItem("ai_chat_messages");
      if (savedMessages) {
        return JSON.parse(savedMessages);
      }
    }
    return [
      {
        role: "bot",
        content: "안녕하세요. LINGSSOFT AI 챗봇입니다.\n궁금한 내용을 입력하시거나 아래 항목을 선택해 주세요.",
      },
    ];
  });
  const [input, setInput] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [apiUrl, setApiUrl] = useState("");
  const messagesEndRef = useRef(null);

  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const quickQuestions = ["서비스 문의", "도입 상담", "기술 지원"];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShowSettings(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open && !showSettings) {
      scrollToBottom();
    }
  }, [messages, open, showSettings]);

  useEffect(() => {
    localStorage.setItem("ai_chat_save_history", JSON.stringify(saveHistory));
    if (!saveHistory) {
      localStorage.removeItem("ai_chat_messages");
    } else {
      localStorage.setItem("ai_chat_messages", JSON.stringify(messages));
    }
  }, [saveHistory, messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    
    // TODO: 나중에 여기에 API 호출 로직을 추가합니다.
    // fetch(apiUrl, { ... })
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickQuestion = (question) => {
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    // TODO: 나중에 여기에 API 호출 로직을 추가합니다.
  };

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
          {/* Header */}
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
            <MKBox display="flex" alignItems="center" gap={0.5}>
              <IconButton
                aria-label="Settings"
                onClick={() => setShowSettings(!showSettings)}
                size="small"
                color={showSettings ? "info" : "default"}
              >
                <Icon fontSize="small">settings</Icon>
              </IconButton>
              <IconButton aria-label="Close AI chatbot" onClick={handleClose} size="small">
                <Icon fontSize="small">close</Icon>
              </IconButton>
            </MKBox>
          </MKBox>

          {showSettings ? (
            /* Settings View */
            <MKBox flex={1} px={3} py={4} overflow="auto">
              <MKTypography variant="h6" color={isDark ? "white" : "dark"} mb={2}>
                설정
              </MKTypography>
              <MKBox mb={2}>
                <MKInput
                  type="url"
                  label="API URL"
                  fullWidth
                  value={apiUrl}
                  onChange={(e) => setApiUrl(e.target.value)}
                  placeholder="https://api.example.com/chat"
                />
              </MKBox>
              <MKBox mb={3} display="flex" alignItems="center" justifyContent="space-between">
                <MKTypography variant="button" color={isDark ? "white" : "dark"} fontWeight="medium">
                  메시지 기록 유지
                </MKTypography>
                <Switch
                  checked={saveHistory}
                  onChange={(e) => setSaveHistory(e.target.checked)}
                />
              </MKBox>
              <MKButton variant="gradient" color="info" fullWidth onClick={() => setShowSettings(false)}>
                저장 및 닫기
              </MKButton>
            </MKBox>
          ) : (
            /* Chat View */
            <>
              <MKBox flex={1} px={3} py={2} overflow="auto" display="flex" flexDirection="column" gap={2}>
                {messages.map((msg, index) => (
                  <MKBox
                    key={index}
                    display="flex"
                    flexDirection="column"
                    alignItems={msg.role === "user" ? "flex-end" : "flex-start"}
                  >
                    <MKBox
                      maxWidth="86%"
                      px={2}
                      py={1.5}
                      borderRadius="lg"
                      sx={({ palette }) => ({
                        backgroundColor:
                          msg.role === "user"
                            ? palette.info.main
                            : isDark
                            ? palette.grey[900]
                            : palette.grey[100],
                        color: msg.role === "user" ? palette.white.main : isDark ? palette.white.main : palette.dark.main,
                        borderBottomRightRadius: msg.role === "user" ? 0 : "lg",
                        borderBottomLeftRadius: msg.role === "bot" ? 0 : "lg",
                      })}
                    >
                      <MKTypography
                        variant="body2"
                        color="inherit"
                        sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                      >
                        {msg.content}
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                ))}
                
                {messages.length === 1 && (
                  <MKBox display="flex" flexWrap="wrap" gap={1} mt={1}>
                    {quickQuestions.map((question) => (
                      <MKBox
                        key={question}
                        component="button"
                        type="button"
                        onClick={() => handleQuickQuestion(question)}
                        px={1.5}
                        py={0.75}
                        borderRadius="lg"
                        sx={({ palette }) => ({
                          border: `1px solid ${isDark ? palette.grey[800] : palette.grey[300]}`,
                          backgroundColor: "transparent",
                          color: isDark ? palette.white.main : palette.dark.main,
                          cursor: "pointer",
                          font: "inherit",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          lineHeight: 1.4,
                          transition: "all 0.2s ease",
                          "&:hover": {
                            backgroundColor: isDark ? palette.grey[900] : palette.grey[100],
                          },
                        })}
                      >
                        {question}
                      </MKBox>
                    ))}
                  </MKBox>
                )}
                <div ref={messagesEndRef} />
              </MKBox>

              {/* Input Area */}
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
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    inputProps={{ "aria-label": "AI chatbot message" }}
                    sx={({ palette }) => ({
                      color: isDark ? palette.white.main : palette.dark.main,
                      fontSize: "0.875rem",
                    })}
                  />
                  <IconButton
                    aria-label="Send AI chatbot message"
                    size="small"
                    onClick={handleSend}
                    color="info"
                  >
                    <Icon fontSize="small">send</Icon>
                  </IconButton>
                </MKBox>
              </MKBox>
            </>
          )}
        </MKBox>
      </Drawer>
    </>
  );
}
