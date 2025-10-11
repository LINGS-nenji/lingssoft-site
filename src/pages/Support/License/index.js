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

function License() {
  const officialLicenseLink = (
    <MKTypography
      component="a"
      variant="body2"
      color="info"
      href="https://www.creative-tim.com/knowledge-center/licenses/"
      target="_blank"
      rel="noreferrer"
      sx={{ fontWeight: "bold", display: "inline" }}
    >
      Creative Tim License Guide
    </MKTypography>
  );

  const sections = [
    {
      heading: "1. License Overview",
      paragraphs: [
        "LINGSSOFT UI kits, templates, and code components are distributed under commercial licenses. Purchasing a license grants you certain rights to use the product in your own applications or client deliverables while retaining ownership of the original assets.",
        "Review these highlights with your procurement or legal team to confirm that the granted rights align with your intended usage before launching a project.",
      ],
    },
    {
      heading: "2. Permitted Uses",
      paragraphs: [
        "Depending on the plan you choose, licenses may cover single-project deployments or multiple commercial products. Unless otherwise noted, each developer who works with the source files requires a seat.",
      ],
      bullets: [
        "Modify or extend the source code to build internal tools, SaaS applications, or client websites.",
        "Combine the assets with proprietary or open source codebases, provided you respect the original license of third-party dependencies.",
        "Use components in marketing or demo materials that showcase your implementation of the product.",
      ],
    },
    {
      heading: "3. Restrictions",
      paragraphs: [
        "The license does not transfer ownership of LINGSSOFT intellectual property. Redistribution of template files or design systems in a way that competes with the original product is prohibited.",
      ],
      bullets: [
        "Do not resell or repackage the UI kit, even if you modify styling or structure.",
        "Do not share source files publicly on GitHub, design libraries, or download portals.",
        "Do not incorporate the assets into products that enable end users to build derivative templates that bypass our licensing model.",
      ],
    },
    {
      heading: "4. Updates and Maintenance",
      paragraphs: [
        "Active licenses receive access to bug fixes, security updates, and new features released during the subscription period. We announce notable changes in the changelog so you can plan upgrades.",
        "After a license expires you may keep using the version you already downloaded, but downloads and updates are paused until you renew.",
      ],
    },
    {
      heading: "5. Support and Attribution",
      paragraphs: [
        "Each commercial license includes priority support for implementation questions related to the purchased product. Submit tickets through the LINGSSOFT dashboard and include purchase details to expedite review.",
        "Attribution to LINGSSOFT is optional. If you choose to credit us, please link to lingssoft.com and avoid language implying a partnership or certification.",
      ],
    },
    {
      heading: "6. Learn More and Contact Us",
      paragraphs: [
        <>
          These highlights mirror the structure of the official {officialLicenseLink}. Consult that
          resource for license tiers, usage scenarios, and country-specific terms.
        </>,
        "For custom licensing questions email support@lingssoft.com. Our team is happy to review enterprise distribution needs or offline procurement processes.",
      ],
    },
  ];

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
                    Product License Summary
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Last updated: July 15, 2024
                  </MKTypography>
                </MKBox>
                <MKBox pb={6} px={{ xs: 3, md: 6 }}>
                  {sections.map((section, index) => (
                    <MKBox key={section.heading} mt={index === 0 ? 6 : 4}>
                      <MKTypography variant="h5" mb={2}>
                        {section.heading}
                      </MKTypography>
                      {section.paragraphs?.map((paragraph, idx) => (
                        <MKTypography
                          key={`${section.heading}-paragraph-${idx}`}
                          variant="body2"
                          color="text"
                          mb={1.5}
                        >
                          {paragraph}
                        </MKTypography>
                      ))}
                      {section.bullets && (
                        <MKBox component="ul" pl={3} my={2}>
                          {section.bullets.map((item, bulletIdx) => (
                            <MKBox
                              component="li"
                              key={`${section.heading}-bullet-${bulletIdx}`}
                              mb={1}
                            >
                              <MKTypography variant="body2" color="text">
                                {item}
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

export default License;
