/*
=========================================================
* LINGSSOFT Presentation Page
=========================================================
*/

// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";

// Material Kit 2 PRO React components
import MKBadge from "components/MKBadge";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import { useThemeMode } from "context/ThemeModeContext";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/nastuh.jpg";
import aiLabImage from "assets/images/examples/studio-5.jpg";
import securityOpsImage from "assets/images/examples/content-2.jpg";
import classroomImage from "assets/images/examples/content-4.jpg";
import publishingImage from "assets/images/office-dark.jpg";

const heroDescription =
  "We build intelligence that protects knowledge and elevates people. Our platforms blend trusted AI, resilient security, and human-centered learning to help enterprises publish insight at global scale.";

const influenceText =
  "LINGSSOFT synthesizes proven operating models from the technology leaders our clients trust: OpenAI for AI stewardship, Palo Alto Networks for Zero Trust, Coursera for talent transformation, and Springer Nature for global knowledge distribution. We bring these patterns together in a unified strategy.";

const partnershipText =
  "We partner with enterprises, universities, and publishers who share our pursuit of trustworthy intelligence. Together we deliver secure AI, elevate skills, and amplify knowledge assets.";

const pillars = [
  {
    icon: "auto_awesome",
    title: "AI Platform",
    description:
      "ModelOps inspired by OpenAI and Anthropic. LINGSSOFT accelerates applied AI delivery with governed pipelines, synthetic data labs, and responsible AI guardrails.",
    link: "https://openai.com/",
    cta: "OpenAI Practices",
  },
  {
    icon: "shield",
    title: "Security Fabric",
    description:
      "Zero Trust frameworks influenced by Palo Alto Networks and CrowdStrike protect every interaction. Unified threat intel, automated SOC playbooks, and post-quantum readiness.",
    link: "https://www.paloaltonetworks.com/",
    cta: "Palo Alto Networks",
  },
  {
    icon: "school",
    title: "Learning Intelligence",
    description:
      "Adaptive training experiences modeled after Coursera and Duolingo. Cohort analytics and credential pipelines reskill workforces for AI-driven industries.",
    link: "https://www.coursera.org/",
    cta: "Coursera Insights",
  },
  {
    icon: "article",
    title: "Publishing Engine",
    description:
      "Digital publishing inspired by Springer Nature and Elsevier. Structured authoring, semantic search, and AI copy-assist turn research into multi-format experiences.",
    link: "https://www.springernature.com/",
    cta: "Springer Nature",
  },
];

const focusAreas = [
  {
    label: "Model Integrity",
    points: [
      "Bias audits & lineage tracking",
      "Synthetic data governance",
      "Continuous evaluation",
    ],
  },
  {
    label: "Adaptive Defense",
    points: [
      "Identity-first protection",
      "Runtime anomaly detection",
      "Secure DevSecOps pipelines",
    ],
  },
  {
    label: "Human-Centered Learning",
    points: ["Personalized skill graphs", "AI mentors & simulations", "Enterprise credentialing"],
  },
  {
    label: "Trusted Publishing",
    points: [
      "Structured content supply chain",
      "Generative editorial workflows",
      "Multilingual delivery",
    ],
  },
];

const programHighlights = [
  {
    title: "AI Foundry",
    subtitle: "Discovery to deployment in 10 weeks",
    image: aiLabImage,
    bullets: [
      "Domain adaptation labs",
      "Applied research partnerships",
      "Ethics & compliance reviews",
    ],
  },
  {
    title: "SecureOps Command",
    subtitle: "360º visibility across cloud, edge, and workplace",
    image: securityOpsImage,
    bullets: [
      "Attack surface analytics",
      "Autonomous incident response",
      "Executive threat briefings",
    ],
  },
  {
    title: "Learning Studio",
    subtitle: "Continuous talent transformation",
    image: classroomImage,
    bullets: [
      "Immersive courseware authoring",
      "Adaptive onboarding journeys",
      "Skill impact dashboards",
    ],
  },
  {
    title: "Publishing Cloud",
    subtitle: "Intelligent knowledge distribution",
    image: publishingImage,
    bullets: [
      "AI-assisted editorial suites",
      "Semantic search & recommendations",
      "Global content localization",
    ],
  },
];

function Presentation() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isDark = mode === "dark" || theme.palette.mode === "dark";

  return (
    <>
      <DefaultNavbar routes={routes} sticky light={isDark} transparent={false} />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
          backgroundImage: `${linearGradient(
            rgba(gradients.dark.main, isDark ? 0.5 : 0.65),
            rgba(gradients.dark.state, isDark ? 0.5 : 0.65)
          )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        })}
      >
        <Container>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={10} lg={8} textAlign="center">
              <MKBadge
                badgeContent="AI • Security • Education • Publish"
                size="md"
                variant="contained"
                color="info"
                container
                sx={{ mb: 2, mx: "auto" }}
              />
              <MKTypography
                variant="h1"
                color="white"
                mb={2}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                LINGSSOFT Presentation
              </MKTypography>
              <MKTypography variant="h5" color="white" opacity={0.9} mb={3} px={{ xs: 2, md: 6 }}>
                {heroDescription}
              </MKTypography>
              <MKButton color="info" variant="gradient" size="large">
                Explore the Platform
              </MKButton>
              <MKButton
                color="white"
                variant="text"
                size="large"
                sx={{ ml: 2, color: "white !important" }}
              >
                Talk with Experts
              </MKButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={({ palette, boxShadows }) => ({
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor:
            palette.mode === "dark" ? palette.background.paper : palette.background.default,
          boxShadow: boxShadows.xxl,
          border: `1px solid ${palette.mode === "dark" ? palette.grey[800] : palette.grey[200]}`,
        })}
      >
        <Container sx={{ py: 6 }}>
          <Grid container spacing={3}>
            {pillars.map(({ icon, title, description, link, cta }) => (
              <Grid item xs={12} md={6} lg={3} key={title}>
                <FilledInfoCard
                  variant="gradient"
                  color={isDark ? "dark" : "info"}
                  icon={icon}
                  title={title}
                  description={description}
                  action={{ type: "external", route: link, label: cta }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Divider sx={{ my: 6 }} />
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <MKTypography variant="h3" mb={2}>
                Influence from industry leaders
              </MKTypography>
              <MKTypography variant="body1" color={isDark ? "white" : "text"} mb={3}>
                {influenceText}
              </MKTypography>
              <MKBox display="flex" flexWrap="wrap" gap={1.5}>
                {[
                  "OpenAI",
                  "Palo Alto Networks",
                  "CrowdStrike",
                  "Coursera",
                  "Springer Nature",
                  "Elsevier",
                ].map((brand) => (
                  <MKBadge key={brand} color="info" variant="contained" badgeContent={brand} />
                ))}
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKTypography variant="h5" mb={2} color={isDark ? "white" : "text"}>
                Delivery principles
              </MKTypography>
              <List>
                {focusAreas.map(({ label, points }) => (
                  <ListItem key={label} sx={{ alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: "2.5rem" }}>
                      <Icon color="info">check_circle</Icon>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <MKTypography variant="h6" mb={0.5} color={isDark ? "white" : "text"}>
                          {label}
                        </MKTypography>
                      }
                      secondary={
                        <MKTypography
                          component="span"
                          variant="body2"
                          color={isDark ? "white" : "text"}
                        >
                          {points.join(" • ")}
                        </MKTypography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
        <Divider sx={{ my: 6 }} />
        <Container>
          <MKTypography variant="h3" textAlign="center" mb={1}>
            Programs built for transformation
          </MKTypography>
          <MKTypography variant="body1" color={isDark ? "white" : "text"} textAlign="center" mb={6}>
            Modular engagements that combine strategy, platforms, and enablement.
          </MKTypography>
          <Grid container spacing={4}>
            {programHighlights.map(({ title, subtitle, image, bullets }) => (
              <Grid item xs={12} md={6} key={title}>
                <Card
                  sx={({ boxShadows: { lg }, palette }) => ({
                    height: "100%",
                    overflow: "hidden",
                    boxShadow: lg,
                    backgroundColor: palette.background.paper,
                    color: palette.mode === "dark" ? palette.common.white : palette.text.primary,
                  })}
                >
                  <MKBox
                    minHeight="220px"
                    sx={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <MKBox p={3}>
                    <MKTypography variant="h4" mb={1} color={isDark ? "white" : "text"}>
                      {title}
                    </MKTypography>
                    <MKTypography variant="body2" color={isDark ? "white" : "text"} mb={2}>
                      {subtitle}
                    </MKTypography>
                    <List>
                      {bullets.map((item) => (
                        <ListItem key={item} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: "2rem" }}>
                            <Icon color="info">arrow_right</Icon>
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <MKTypography variant="body2" color={isDark ? "white" : "text"}>
                                {item}
                              </MKTypography>
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </MKBox>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Divider sx={{ my: 6 }} />
        <MKBox py={6}>
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <MKTypography variant="h4" fontWeight="bold" mb={2}>
                  Join the LINGSSOFT alliance
                </MKTypography>
                <MKTypography variant="body1" color={isDark ? "white" : "text"} mb={3}>
                  {partnershipText}
                </MKTypography>
                <MKButton color="info" variant="gradient">
                  Request a Strategy Session
                </MKButton>
                <MKButton color="info" variant="text" sx={{ ml: 1 }}>
                  View Case Studies
                </MKButton>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={({ boxShadows: { xl }, palette }) => ({
                    p: 3,
                    boxShadow: xl,
                    backgroundColor: palette.background.paper,
                    color: palette.mode === "dark" ? palette.common.white : palette.text.primary,
                  })}
                >
                  <MKTypography variant="h6" mb={1}>
                    Who we engage with
                  </MKTypography>
                  <List>
                    {[
                      "Global enterprises modernizing AI, security, and knowledge ecosystems",
                      "Academic institutions launching AI-first curricula and research hubs",
                      "Publishers seeking AI-assisted editorial and distribution workflows",
                      "Public sector teams securing critical infrastructure and citizen services",
                    ].map((item) => (
                      <ListItem key={item} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: "2rem" }}>
                          <Icon color="info">check</Icon>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <MKTypography variant="body2" color={isDark ? "white" : "text"}>
                              {item}
                            </MKTypography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default Presentation;
