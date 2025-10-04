/**
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 PRO React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import CoworkingPage from "layouts/pages/landing-pages/coworking";
import Rental from "layouts/pages/landing-pages/rental";
import AboutUs from "layouts/pages/company/about-us";
import Pricing from "layouts/pages/company/pricing";
import HelpCenter from "layouts/pages/support/help-center";
import ContactUs from "layouts/pages/support/contact-us";
import Faq from "layouts/pages/support/faq";
import Privacy from "layouts/pages/support/privacy";
import DesktopApp from "layouts/pages/apps/desktop-app";
import SingleArticle from "layouts/pages/blogs/single-article";
import Author from "layouts/pages/blogs/author";
import VirtualRealityPage from "layouts/pages/extra/virtual-reality";

// Account
import SignInBasicPage from "layouts/authentication/sign-in/basic";
import SignInCoverPage from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignInSimplePage from "layouts/authentication/sign-in/simple";
import SignUpCoverPage from "layouts/authentication/sign-up/cover";
import ResetPasswordPage from "layouts/authentication/reset-password/cover";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import PricingSection from "layouts/sections/page-sections/pricing";
import FaqSection from "layouts/sections/page-sections/faq";
import BlogPosts from "layouts/sections/page-sections/blog-posts";
import Testimonials from "layouts/sections/page-sections/testimonials";
import Teams from "layouts/sections/page-sections/teams";
import Stats from "layouts/sections/page-sections/stats";
import Cta from "layouts/sections/page-sections/cta";
import Applications from "layouts/sections/page-sections/applications";
import LogoAreas from "layouts/sections/page-sections/logo-areas";
import Footers from "layouts/sections/page-sections/footers";
import GeneralCards from "layouts/sections/page-sections/general-cards";
import ContentSections from "layouts/sections/page-sections/content-sections";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Newsletters from "layouts/sections/input-areas/newsletters";
import ContactSections from "layouts/sections/input-areas/contact-sections";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Notifications from "layouts/sections/attention-catchers/notifications";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import SocialButtons from "layouts/sections/elements/social-buttons";
import Tables from "layouts/sections/elements/tables";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 3,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "coworking",
            route: "/pages/landing-pages/coworking",
            component: <CoworkingPage />,
          },
          {
            name: "rental",
            route: "/pages/landing-pages/rental",
            component: <Rental />,
          },
        ],
      },
      {
        name: "company",
        collapse: [
          {
            name: "about us",
            route: "/pages/company/about-us",
            component: <AboutUs />,
          },
          {
            name: "pricing",
            route: "/pages/company/pricing",
            component: <Pricing />,
          },
        ],
      },
      {
        name: "support",
        collapse: [
          {
            name: "help center",
            route: "/pages/support/help-center",
            component: <HelpCenter />,
          },
          {
            name: "contact us",
            route: "/pages/support/contact-us",
            component: <ContactUs />,
          },
          {
            name: "faq",
            route: "/pages/support/faq",
            component: <Faq />,
          },
          {
            name: "privacy",
            route: "/pages/support/privacy",
            component: <Privacy />,
          },
        ],
      },
      {
        name: "apps",
        collapse: [
          {
            name: "desktop app",
            route: "/pages/apps/desktop-app",
            component: <DesktopApp />,
          },
        ],
      },
      {
        name: "blogs",
        collapse: [
          {
            name: "single article",
            route: "/pages/blogs/single-article",
            component: <SingleArticle />,
          },
          {
            name: "author",
            route: "/pages/blogs/author",
            component: <Author />,
          },
        ],
      },
      {
        name: "extra",
        collapse: [
          {
            name: "virtual reality",
            route: "/pages/extra/virtual-reality",
            component: <VirtualRealityPage />,
          },
        ],
      },
    ],
  },
  {
    name: "account",
    icon: <Icon>contacts</Icon>,
    collapse: [
      {
        name: "sign in",
        dropdown: true,
        collapse: [
          {
            name: "basic",
            route: "/authentication/sign-in/basic",
            component: <SignInBasicPage />,
          },
          {
            name: "cover",
            route: "/authentication/sign-in/cover",
            component: <SignInCoverPage />,
          },
          {
            name: "illustration",
            route: "/authentication/sign-in/illustration",
            component: <SignInIllustration />,
          },
          {
            name: "simple",
            route: "/authentication/sign-in/simple",
            component: <SignInSimplePage />,
          },
        ],
      },
      {
        name: "sign up",
        dropdown: true,
        collapse: [
          {
            name: "cover",
            route: "/authentication/sign-up/cover",
            component: <SignUpCoverPage />,
          },
        ],
      },
      {
        name: "reset password",
        dropdown: true,
        collapse: [
          {
            name: "cover",
            route: "/authentication/reset-password/cover",
            component: <ResetPasswordPage />,
          },
        ],
      },
    ],
  },
  {
    name: "sections",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "page sections",
        description: "See all 55 sections",
        dropdown: true,
        collapse: [
          {
            name: "page headers",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "features",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "pricing",
            route: "/sections/page-sections/pricing",
            component: <PricingSection />,
          },
          {
            name: "faq",
            route: "/sections/page-sections/faq",
            component: <FaqSection />,
          },
          {
            name: "blog posts",
            route: "/sections/page-sections/blog-posts",
            component: <BlogPosts />,
          },
          {
            name: "testimonials",
            route: "/sections/page-sections/testimonials",
            component: <Testimonials />,
          },
          {
            name: "teams",
            route: "/sections/page-sections/teams",
            component: <Teams />,
          },
          {
            name: "stats",
            route: "/sections/page-sections/stats",
            component: <Stats />,
          },
          {
            name: "call to actions",
            route: "/sections/page-sections/cta",
            component: <Cta />,
          },
          {
            name: "applications",
            route: "/sections/page-sections/applications",
            component: <Applications />,
          },
          {
            name: "logo areas",
            route: "/sections/page-sections/logo-areas",
            component: <LogoAreas />,
          },
          {
            name: "footers",
            route: "/sections/page-sections/footers",
            component: <Footers />,
          },
          {
            name: "general cards",
            route: "/sections/page-sections/general-cards",
            component: <GeneralCards />,
          },
          {
            name: "content sections",
            route: "/sections/page-sections/content-sections",
            component: <ContentSections />,
          },
        ],
      },
      {
        name: "navigation",
        description: "See all 3 navigations",
        dropdown: true,
        collapse: [
          {
            name: "navbars",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "nav tabs",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "pagination",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
        ],
      },
      {
        name: "input areas",
        description: "See all 8 input areas",
        dropdown: true,
        collapse: [
          {
            name: "newsletters",
            route: "/sections/input-areas/newsletters",
            component: <Newsletters />,
          },
          {
            name: "contact sections",
            route: "/sections/input-areas/contact-sections",
            component: <ContactSections />,
          },
          {
            name: "inputs",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "forms",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      },
      {
        name: "attention catchers",
        description: "See all 5 examples",
        dropdown: true,
        collapse: [
          {
            name: "alerts",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "notifications",
            route: "/sections/attention-catchers/notifications",
            component: <Notifications />,
          },
          {
            name: "modals",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "tooltips & popovers",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "elements",
        description: "See all 32 examples",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "social buttons",
            route: "/sections/elements/social-buttons",
            component: <SocialButtons />,
          },
          {
            name: "tables",
            route: "/sections/elements/tables",
            component: <Tables />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
      },
    ],
  },
  {
    name: "docs",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "getting started",
        description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "foundation",
        description: "See our colors, icons and typography",
        href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "components",
        description: "Explore our collection of fully designed components",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "plugins",
        description: "Check how you can integrate our plugins",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
];

export default routes;
