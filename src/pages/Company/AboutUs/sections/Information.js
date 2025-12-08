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
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

const defaultBlogImage =
  "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

function Information() {
  const { t, i18n } = useTranslation("about");
  const cards = useMemo(
    () => t("information.cards", { returnObjects: true }) || [],
    [t, i18n.language]
  );
  const blog = useMemo(
    () => t("information.blogCard", { returnObjects: true }) || {},
    [t, i18n.language]
  );

  const getMargin = (index) => (index < 2 ? 5 : { xs: 5, md: 0 });

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              {cards.map((card, index) => (
                <Grid key={card.id || `info-card-${index}`} item xs={12} md={6}>
                  <MKBox mb={getMargin(index)}>
                    <DefaultInfoCard
                      icon={card.icon || "info"}
                      title={card.title || ""}
                      description={card.description || ""}
                    />
                  </MKBox>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={blog.image || defaultBlogImage}
              title={blog.title || ""}
              description={blog.description || ""}
              action={{
                type: "internal",
                route: blog.action?.route || "pages/company/about-us",
                color: "info",
                label: blog.action?.label || "",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
