/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from "react";
import { Box} from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import logo from "../MainDisplay/portrait-01.jpg";
import designImage from "../CreativePortfolio/DemoSiteImages/wing_logo_01_white_circle_transparent.png";
import "./fadeAnimations.css";
import {
  ImageCard,
  TextBar,
  FloatingTextCard,
  FloatingText,
  FloatingTextWithShadow,
} from "./Cards/ParallaxCards";

export function debounce(func, wait = 5, immediate = true) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default function MainDisplay() {

  const shadows = [
    { label: "Salut!", style: { left: "0%", top: "0%" } },
    { label: "Hug!", style: { right: "10%", top: "60%" } },
    { label: "Hallo!", style: { right: "30%", top: "10%" } },
    { label: "Hej!", style: { left: "40%", top: "70%" } },
    { label: "Oi!", style: { right: "0%", top: "80%" } },
    { label: "Privet!", style: { left: "0%", top: "50%" } },
  ];

  return (
    <div>
      <NavBar style="fab" />

      <FloatingTextCard>
        <FloatingTextWithShadow
          shadows={shadows}
          style={{ fontWeight: "bold", position: "relative" }}
          parallaxLevel={3}
          color="primary"
          variant="h1"
          align="center"
        >
          Hey!
        </FloatingTextWithShadow>

        <FloatingText
          align="center"
          variant="h2"
          color="primary"
          style={{ fontWeight: "bold" }}
          parallaxLevel={5}
        >
          My name is James!
        </FloatingText>
        <FloatingText
          align="center"
          variant="h3"
          color="primary"
          style={{ fontWeight: "bold" }}
          parallaxLevel={8}
        >
          Welcome to my portfolio
        </FloatingText>
      </FloatingTextCard>
      <Box style={{backgroundColor: '#383234'}} alignItems="center">
        <TextBar iconPosition="left" image={logo} px={5} py={5}>
          I am a front end developer with a passion for visual creativity. After
          concluding my bachelor's Degree in the creative industries, I taught
          myself to code and joined the fast-paced digital environment of tech
          consulting.
        </TextBar>
        <ImageCard
          border={true}
          image="url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/parkinglot.png)"
        >
          Check out my web portfolio site{" "}
          <a
            style={{ color: "white" }}
            href="https://github.com/JoniBach/my-web-portfolio/"
          >
            here!
          </a>
        </ImageCard>
        <TextBar iconPosition="right" image={designImage} px={5} py={5}>
          During my spare time, I dabble with producing multidisciplinary
          digital artwork that often expresses my observations of modern life.
          You can find them{" "}
          <a style={{ color: "skyBlue" }} href="/creativeportfolio">
            here!{" "}
          </a>{" "}
          along with some of my UI designs
        </TextBar>
      </Box>
      <ImageCard image="url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/strut.png)">
        Weird fact:{" "}
        <a
          align="center"
          style={{ color: "white" }}
          href="https://www.instagram.com/p/B8eL2SKnJAy/"
        >
          My office band performed for the OneShow
        </a>
      </ImageCard>
    </div>
  );
}
