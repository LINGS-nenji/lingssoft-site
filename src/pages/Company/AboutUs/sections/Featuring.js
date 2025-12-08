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

// Material Kit 2 PRO React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

// Images
import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";

const logosMap = {
  coinbase,
  nasa,
  netflix,
  pinterest,
  spotify,
  vodafone,
};

function Featuring() {
  const { t, i18n } = useTranslation("about");
  const featuring = useMemo(
    () => t("featuring", { returnObjects: true }) || {},
    [t, i18n.language]
  );
  const logos = Array.isArray(featuring.logos) ? featuring.logos : [];
  const stats = Array.isArray(featuring.stats) ? featuring.stats : [];

  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }}>
          {logos.map((logo, index) => (
            <Grid key={logo.id || `logo-${index}`} item xs={6} md={4} lg={2}>
              <MKBox
                component="img"
                src={logosMap[logo.id] || logosMap.coinbase}
                alt={logo.alt || logo.id}
                width="100%"
                opacity={0.7}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          {stats.map((stat, index) => (
            <Grid key={stat.id || `stat-${index}`} item xs={12} md={3}>
              <DefaultCounterCard
                count={stat.count || 0}
                separator={stat.separator}
                suffix={stat.suffix}
                title={stat.title || ""}
                description={stat.description || ""}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
