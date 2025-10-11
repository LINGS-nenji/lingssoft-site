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

function Gdpr() {
  const officialCookieLink = (
    <MKTypography
      component="a"
      variant="body2"
      color="info"
      href="https://www.creative-tim.com/knowledge-center/cookie-policy/"
      target="_blank"
      rel="noreferrer"
      sx={{ fontWeight: "bold", display: "inline" }}
    >
      Creative Tim Cookie Policy
    </MKTypography>
  );

  const sections = [
    {
      heading: "1. Purpose and Consent",
      paragraphs: [
        "This cookie and GDPR notice explains how LINGSSOFT uses tracking technologies on our websites and applications. When you first visit we present a consent banner so you can opt in to analytics or marketing cookies.",
        "Essential cookies are required to operate the site and remember your preferences; they are always active. Non-essential cookies are loaded only after you give consent, which you may withdraw at any time.",
      ],
    },
    {
      heading: "2. Types of Cookies We Use",
      paragraphs: [
        "Cookies and similar technologies support different aspects of the customer experience. We categorize them so you can make granular choices that match your compliance requirements.",
      ],
      bullets: [
        "Essential cookies keep you logged in, store language selections, and enable secure checkout experiences.",
        "Analytics cookies measure feature adoption, documentation paths, and error frequency so we can improve performance.",
        "Marketing cookies power optional campaigns, such as remembering that you dismissed an educational modal or requested a follow-up demo.",
      ],
    },
    {
      heading: "3. Managing Preferences",
      paragraphs: [
        "You can update consent by reopening the cookie banner via the footer link or by clearing cookies in your browser. Some browsers include advanced controls such as blocking third-party cookies or sending a Do Not Track signal; we honor those where technically feasible.",
        "Disabling analytics or marketing cookies will not prevent you from downloading products, but it may limit personalized tips and usage metrics available in the dashboard.",
      ],
    },
    {
      heading: "4. Third Parties and Data Transfers",
      paragraphs: [
        "We partner with a small number of service providers to deliver analytics, marketing insights, and error reporting. Each provider signs data processing agreements that include EU Standard Contractual Clauses or other recognized transfer safeguards.",
        "When we share pseudonymized data with these vendors, it is used only for the purpose described and only for as long as needed to provide the contracted service.",
      ],
    },
    {
      heading: "5. Retention and Updates",
      paragraphs: [
        "Cookie expiration periods vary based on their purpose. Session cookies expire when you close your browser, while persistent cookies last between 6 and 12 months unless you clear them sooner.",
        "We review the cookie inventory quarterly. Material changes—including new vendors or purposes—will trigger an updated banner and revised documentation.",
      ],
    },
    {
      heading: "6. Learn More and Contact Us",
      paragraphs: [
        <>
          These guidelines align with the official {officialCookieLink}. Review that resource for
          the complete legal definitions and compliance controls.
        </>,
        "For privacy or cookie questions contact support@lingssoft.com. We respond to regulator or user inquiries within the timelines defined by GDPR.",
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
                    Cookie & GDPR Notice
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

export default Gdpr;
