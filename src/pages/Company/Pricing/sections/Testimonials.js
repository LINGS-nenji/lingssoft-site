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

import { useRef } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import ComplexReviewCard from "examples/Cards/ReviewCards/ComplexReviewCard";

// Images
import review1 from "assets/images/examples/clem-onojegaw.jpg";
import review2 from "assets/images/examples/studio-3.jpg";
import logoSpotify from "assets/images/logos/small-logos/logo-spotify.svg";
import logoSlack from "assets/images/logos/small-logos/logo-slack.svg";
import { useTranslation } from "react-i18next";

const slidesConfig = [
  { id: "spotify", image: review1, logo: logoSpotify },
  { id: "slack", image: review2, logo: logoSlack },
];

function Testimonials() {
  const { t } = useTranslation("pricing");
  const slidesContent = t("testimonials.slides", { returnObjects: true }) || [];
  const slides = slidesConfig.map((slide) => {
    const content = slidesContent.find(({ id }) => id === slide.id) || {};
    return { ...slide, ...content };
  });

  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // Swiper navigation buttons styles
  const navigationStyles = {
    position: "absolute",
    top: 0,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    height: "100%",
    textAlign: "center",
    opacity: 0.5,
    cursor: "pointer",
    transition: "opacity 0.15s ease",

    "&:hover, &:focus": {
      opacity: 1,
    },
  };

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <MKBox py={8} position="relative">
      <Swiper
        onInit={({ params, navigation }) => {
          const { navigation: nav } = params;

          nav.prevEl = navigationPrevRef.current;
          nav.nextEl = navigationNextRef.current;
          navigation.init();
          navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Container>
              <ComplexReviewCard
                image={slide.image}
                title={slide.title || ""}
                review={slide.review || ""}
                author={{
                  logo: slide.logo,
                  name: slide.author?.name || "",
                  role: slide.author?.role || "",
                }}
              />
            </Container>
          </SwiperSlide>
        ))}
        <MKTypography
          variant="h2"
          color="dark"
          sx={{
            ...navigationStyles,
            left: 0,
          }}
          ref={navigationPrevRef}
        >
          <Icon>chevron_left</Icon>
        </MKTypography>
        <MKTypography
          variant="h2"
          color="dark"
          sx={{
            ...navigationStyles,
            right: 0,
          }}
          ref={navigationNextRef}
        >
          <Icon>chevron_right</Icon>
        </MKTypography>
      </Swiper>
    </MKBox>
  );
}

export default Testimonials;
