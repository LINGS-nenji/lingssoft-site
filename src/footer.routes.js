// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    translationKey: "site.title",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/LINGS-nenji",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  menus: [
    {
      name: "first",
      translationKey: "menu.business",
      items: [
        {
          translationKey: "menu.solutions",
          route: "#",
        },
        {
          translationKey: "menu.pricing",
          route: "/pages/company/pricing",
        },
      ],
    },
    {
      name: "second",
      translationKey: "menu.company",
      items: [
        {
          translationKey: "menu.about",
          route: "/pages/company/about-us",
        },
        {
          translationKey: "menu.history",
          route: "#",
        },
        {
          translationKey: "menu.values",
          route: "#",
        },
      ],
    },
    {
      name: "third",
      translationKey: "menu.helpnsupport",
      items: [
        {
          translationKey: "menu.contact",
          route: "/pages/support/contact-us",
        },
        {
          translationKey: "menu.knowledge",
          route: "/pages/support/help-center",
        },
        {
          translationKey: "menu.customdev",
          route: "#",
        },
        {
          translationKey: "menu.sponsor",
          route: "#",
        },
      ],
    },
    {
      name: "fourth",
      translationKey: "menu.legal",
      items: [
        {
          translationKey: "menu.terms",
          route: "#",
        },
        {
          translationKey: "menu.privacy",
          route: "/pages/support/privacy",
        },
        {
          translationKey: "menu.license",
          route: "#",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} LINGSSOFT by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        nenji Jay
      </MKTypography>
      .
    </MKTypography>
  ),
};
