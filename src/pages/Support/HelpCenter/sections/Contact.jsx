/**
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import { useThemeMode } from "context/ThemeModeContext";

function ContactUs() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={10}
          lg={6}
          sx={{ mx: "auto", mb: { xs: 0, md: 6 }, textAlign: "center" }}
        >
          <MKTypography variant="h3" mb={1} color={isDark ? "white" : "dark"}>
            We are here for you
          </MKTypography>
          <MKTypography variant="body2" color={isDark ? "white" : "text"} opacity={isDark ? 0.8 : 1}>
            For further questions, including partnership opportunities
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={8} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autoComplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="standard"
                    label="Full Name"
                    InputLabelProps={{ shrink: true, style: { color: isDark ? "white" : "inherit" } }}
                    fullWidth
                    sx={{
                      "& .MuiInputBase-root": {
                        color: isDark ? "white" : "inherit",
                      },
                      "& .MuiInputBase-input": {
                        color: isDark ? "white !important" : "inherit",
                        WebkitTextFillColor: isDark ? "white !important" : "inherit",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    type="email"
                    variant="standard"
                    label="Email"
                    InputLabelProps={{ shrink: true, style: { color: isDark ? "white" : "inherit" } }}
                    fullWidth
                    sx={{
                      "& .MuiInputBase-root": {
                        color: isDark ? "white" : "inherit",
                      },
                      "& .MuiInputBase-input": {
                        color: isDark ? "white !important" : "inherit",
                        WebkitTextFillColor: isDark ? "white !important" : "inherit",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="What can we help you?"
                    placeholder="Describe your problem in at least 250 characters"
                    InputLabelProps={{ shrink: true, style: { color: isDark ? "white" : "inherit" } }}
                    multiline
                    fullWidth
                    rows={6}
                    sx={{
                      "& .MuiInputBase-root": {
                        color: isDark ? "white" : "inherit",
                      },
                      "& .MuiInputBase-input": {
                        color: isDark ? "white !important" : "inherit",
                        WebkitTextFillColor: isDark ? "white !important" : "inherit",
                      },
                      "& textarea": {
                        color: isDark ? "white !important" : "inherit",
                        WebkitTextFillColor: isDark ? "white !important" : "inherit",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={6}>
                <MKButton type="submit" variant="gradient" color={isDark ? "info" : "dark"}>
                  Send Message
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContactUs;
