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
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import { Trans, useTranslation } from "react-i18next";

function Privacy() {
  const { t } = useTranslation("privacy");
  const sections = t("sections", { returnObjects: true }) || [];
  const title = t("meta.title");
  const updated = t("meta.updated");
  const referenceLabel = t("meta.referenceLabel");
  const referenceUrl = t("meta.referenceUrl");
  const contactEmail = t("meta.contactEmail");
  const transComponents = {
    link: (
      <MKTypography
        component="a"
        variant="body2"
        color="info"
        href={referenceUrl}
        target="_blank"
        rel="noreferrer"
        sx={{ fontWeight: "bold", display: "inline" }}
      />
    ),
    email: (
      <MKTypography
        component="a"
        variant="body2"
        color="info"
        href={`mailto:${contactEmail}`}
        sx={{ fontWeight: "bold", display: "inline" }}
      />
    ),
  };
  const transValues = { label: referenceLabel, email: contactEmail };

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox component="section" pt={20} pb={12}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card
                sx={({ palette, boxShadows }) => ({
                  backgroundColor:
                    palette.mode === "dark" ? palette.background.paper : palette.background.default,
                  color: palette.mode === "dark" ? palette.grey[100] : palette.text.primary,
                  boxShadow: palette.mode === "dark" ? boxShadows.md : boxShadows.xxl,
                  border: `1px solid ${
                    palette.mode === "dark" ? palette.grey[800] : palette.grey[200]
                  }`,
                })}
              >
                <MKBox
                  variant="gradient"
                  bgColor="dark"
                  borderRadius="lg"
                  coloredShadow="dark"
                  p={3}
                  mt={-3}
                  mx={2}
                >
                  <MKTypography variant="h3" color="white">
                    {title}
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    {updated}
                  </MKTypography>
                </MKBox>
                <MKBox pb={6} px={{ xs: 3, md: 6 }}>
                  {sections.map((section, index) => (
                    <MKBox key={section.title || `section-${index}`} mt={index === 0 ? 6 : 4}>
                      <MKTypography variant="h5" mb={2}>
                        {section.title}
                      </MKTypography>
                      {section.paragraphs?.map((_, paragraphIdx) => (
                        <MKTypography
                          key={`${section.title || index}-paragraph-${paragraphIdx}`}
                          variant="body2"
                          color="text"
                          mb={1.5}
                        >
                          <Trans
                            ns="privacy"
                            i18nKey={`sections.${index}.paragraphs.${paragraphIdx}`}
                            components={transComponents}
                            values={transValues}
                          />
                        </MKTypography>
                      ))}
                      {section.bullets && (
                        <MKBox component="ul" pl={3} my={2}>
                          {section.bullets.map((_, bulletIdx) => (
                            <MKBox
                              component="li"
                              key={`${section.title || index}-bullet-${bulletIdx}`}
                              mb={1}
                            >
                              <MKTypography variant="body2" color="text">
                                <Trans
                                  ns="privacy"
                                  i18nKey={`sections.${index}.bullets.${bulletIdx}`}
                                  components={transComponents}
                                  values={transValues}
                                />
                              </MKTypography>
                            </MKBox>
                          ))}
                        </MKBox>
                      )}
                    </MKBox>
                  ))}
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Privacy;
