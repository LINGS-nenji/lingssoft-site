import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Values() {
  const { t } = useTranslation("values");
  const theme = useTheme();
  const mode = theme.palette.mode;

  const items = t("values", { returnObjects: true }) || [];

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: mode === "dark" ? "background.default" : "background.paper",
        minHeight: "75vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          {t("title")}
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          {t("subtitle")}
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {items.map((v, idx) => (
            <Grid item xs={12} md={6} lg={4} key={v.id || idx}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {v.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {v.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Values;
