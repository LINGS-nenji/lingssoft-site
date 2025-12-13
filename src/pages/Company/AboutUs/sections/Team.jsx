/*
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
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

import { useThemeMode } from "../../../../context/ThemeModeContext";

// Images
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

const memberImages = {
  emma: team1,
  william: team2,
  ivana: team3,
  marquez: team4,
};

function Team() {
  const { t, i18n } = useTranslation("about");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  // const isDark = true; // Hardcoded debug

  const content = useMemo(() => t("team", { returnObjects: true }) || {}, [t, i18n.language]);
  const members = Array.isArray(content.members) ? content.members : [];

  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor={isDark ? "dark" : "light"}
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color={isDark ? "white" : "dark"}>
              {content.title || "The Executive Team"}
            </MKTypography>
            <MKTypography variant="body2" color={isDark ? "white" : "text"} opacity={0.8}>
              {content.description ||
                "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill."}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {members.map((member, index) => (
            <Grid key={member.id || `team-member-${index}`} item xs={12} lg={6}>
              <MKBox mb={{ xs: 1, lg: 0 }}>
                <HorizontalTeamCard
                  image={memberImages[member.id] || memberImages.emma}
                  name={member.name || ""}
                  position={{ color: "info", label: member.position || "" }}
                  description={
                    member.description ||
                    "Artist is a term applied to a person who engages in an activity deemed to be an art."
                  }
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
