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

function Terms() {
  const officialTermsLink = (
    <MKTypography
      component="a"
      variant="body2"
      color="info"
      href="https://www.creative-tim.com/knowledge-center/terms-of-service/"
      target="_blank"
      rel="noreferrer"
      sx={{ fontWeight: "bold", display: "inline" }}
    >
      Creative Tim Terms of Service
    </MKTypography>
  );

  const sections = [
    {
      heading: "1. Acceptance of Service",
      paragraphs: [
        "By accessing or using LINGSSOFT products and sample assets you agree to comply with these Terms of Service. Use of the platform is permitted only for individuals or organizations that can form legally binding agreements under applicable law.",
        "This summary highlights essential duties so legal, procurement, and security reviewers can onboard quickly while retaining the full protections described in the official agreement.",
      ],
    },
    {
      heading: "2. Accounts and Eligibility",
      paragraphs: [
        "You must provide accurate contact, billing, and organizational details when creating an account. Administrators are responsible for managing authorized seats and ensuring credentials remain confidential.",
      ],
      bullets: [
        "Only use the services for lawful work that aligns with your internal policies.",
        "Notify LINGSSOFT immediately if you suspect unauthorized access, credential compromise, or data misuse.",
        "Ensure collaborators accessing premium files have the appropriate plan or license assigned to them.",
      ],
    },
    {
      heading: "3. Orders, Payments, and Refunds",
      paragraphs: [
        "Paid orders, subscriptions, and renewals are billed up-front through the payment method on file. Unless otherwise stated, fees are non-refundable once digital assets or license keys are delivered.",
        "If you experience billing issues, contact our support team within seven days of the charge so we can investigate and resolve them promptly.",
      ],
      bullets: [
        "Discounts or promotional prices apply only to the stated term.",
        "You may cancel auto-renewal at any time from the billing dashboard; access continues until the end of the current period.",
        "Taxes, duties, and bank fees remain your responsibility unless required law dictates otherwise.",
      ],
    },
    {
      heading: "4. Intellectual Property and License Grant",
      paragraphs: [
        "All product files, documentation, logos, and trademarks remain the property of LINGSSOFT and its licensors. When you purchase a license you receive a limited, non-exclusive right to use the assets for permitted commercial or internal projects.",
      ],
      bullets: [
        "You may modify source files for your own applications or client deliverables.",
        "You may not distribute template source code, UI kits, or components as stand-alone assets, even if modified.",
        "Attribution is appreciated but not required; however you must not imply an endorsement or partnership without written approval.",
      ],
    },
    {
      heading: "5. Warranties, Liability, and Termination",
      paragraphs: [
        "The services are provided on an “as-is” basis without warranties of uninterrupted availability, merchantability, or fitness for a particular purpose. To the extent permitted by law, LINGSSOFT’s aggregate liability is limited to the amount you paid for the applicable service during the previous twelve months.",
        "We may suspend or terminate access if you violate these terms, misuse licensed materials, or fail to pay invoices when due. You may end the agreement at any time by ceasing use of the services and deleting licensed materials from your systems.",
      ],
    },
    {
      heading: "6. Learn More and Contact Us",
      paragraphs: [
        <>
          These highlights follow the structure of the official {officialTermsLink}. Review that
          document for complete definitions, jurisdiction, and dispute resolution terms.
        </>,
        "Have questions? Reach us at support@lingssoft.com and our team will respond within two business days.",
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
                    Terms of Service
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

export default Terms;
