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
    name: "LINGSSOFT",
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
      name: "사업소개",
      items: [
        { name: "가격", route: "/pages/company/pricing" },
        { name: "솔루션", route: "/pages/company/pricing" },
      ],
    },
    {
      name: "회사소개",
      items: [
        { name: "회사소개", route: "/pages/company/about-us" },
        { name: "연혁", route: "/pages/company/about-us" },
        { name: "핵심가치", route: "/pages/company/about-us" },
      ],
    },
    {
      name: "도움말 및 지원",
      items: [
        { name: "문의하기", href: "/pages/support/contact-us" },
        { name: "지식센터", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "맞춤형 개발", href: "https://services.creative-tim.com/" },
        { name: "후원", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "법적책임",
      items: [
        { name: "이용약관", href: "https://www.creative-tim.com/terms" },
        { name: "개인정보처리방침", href: "https://www.creative-tim.com/privacy" },
        { name: "라이센스", href: "https://www.creative-tim.com/license" },
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
