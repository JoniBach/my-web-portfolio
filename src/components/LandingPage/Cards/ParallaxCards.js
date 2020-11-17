import React, { useState, useEffect } from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import { Box, Typography, Grid } from "@material-ui/core";
import useStyles from "./ParallaxCards.style";
import { useSpring, animated } from "react-spring";

export const FloatingTextWithShadow = (props) => {
  const styles = useStyles();

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", debounce(handleScroll));
    return () => window.removeEventListener("scroll", debounce(handleScroll));
  }, []);
  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));
  springsetScrollY({ springscrollY: scrollY });

  const interpHeader = springscrollY.interpolate(
    (o) => `translateY(${o / props.parallaxLevel}px)`
  );

  if (props.children) {
    return (
      <animated.div style={{ transform: interpHeader }}>
        {props.shadows.map((d, i) => (
          <Typography
            className={styles.shadow}
            align={props.align}
            variant={props.variant}
            style={d.style}
            key={i}
          >
            {d.label}
          </Typography>
        ))}
        <Typography
          align={props.align}
          variant={props.variant}
          color={props.color}
          style={props.style}
        >
          {props.children}
        </Typography>
      </animated.div>
    );
  } else {
    return <div />;
  }
};

export const FloatingText = (props) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", debounce(handleScroll));
    return () => window.removeEventListener("scroll", debounce(handleScroll));
  }, []);
  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));
  springsetScrollY({ springscrollY: scrollY });

  const interpHeader = springscrollY.interpolate(
    (o) => `translateY(${o / props.parallaxLevel}px)`
  );

  if (props.children) {
    return (
      <animated.div style={{ transform: interpHeader }}>
        <Typography
          align={props.align}
          variant={props.variant}
          color={props.color}
          style={props.style}
        >
          {props.children}
        </Typography>
      </animated.div>
    );
  } else {
    return <div />;
  }
};

export const FloatingTextCard = (props) => {
  const styles = useStyles();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", debounce(handleScroll));
    return () => window.removeEventListener("scroll", debounce(handleScroll));
  }, []);
  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));
  springsetScrollY({ springscrollY: scrollY });
  if (props.children) {
    return (
      <Box
        justifyContent="center"
        p={1}
        alignItems="center"
        className={styles.paralax}
        style={{
          backgroundImage:
            "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/ButterflyCover.jpg)",
        }}
      >
        {props.children}
      </Box>
    );
  } else {
    return <div />;
  }
};

export const ImageCard = (props) => {
  const styles = useStyles();
  if (props.border) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        p={2}
        alignItems="center"
        className={styles.paralax}
        style={{ backgroundImage: props.image }}
      >
        <Typography variant="h4" color="secondary">
          {props.children}
        </Typography>
      </Box>
    );
  } else {
    return (
      <Box
        display="flex"
        justifyContent="center"
        p={1}
        alignItems="center"
        className={styles.paralax}
        style={{ backgroundImage: props.image }}
      >
        <Typography variant="h4" color="secondary">
          {props.children}
        </Typography>
      </Box>
    );
  }
};

export const TextBar = (props) => {
  const fadeDelay = 400;
  if (props.iconPosition === "right") {
    return (
      <Box
        py={!props.py ? 0 : props.py}
        px={!props.px ? 0 : props.px}
        p={!props.p ? 0 : props.p}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={10}>
            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring delay={fadeDelay} to={{ opacity: isVisible ? 1 : 0 }}>
                  {({ opacity }) => (
                    <Typography
                      variant="h5"
                      color="secondary"
                      style={{ opacity }}
                    >
                      {props.children}
                    </Typography>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </Grid>
          <Grid item xs={2}>
            <img src={props.image} alt="design" width="100%"></img>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box
        py={!props.py ? 0 : props.py}
        px={!props.px ? 0 : props.px}
        p={!props.p ? 0 : props.p}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={3}>
            <img src={props.image} alt="Portrait" width="100%" />
          </Grid>
          <Grid item xs={9}>
            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring delay={fadeDelay} to={{ opacity: isVisible ? 1 : 0 }}>
                  {({ opacity }) => (
                    <Typography
                      variant="h5"
                      color="secondary"
                      style={{ opacity }}
                    >
                      {props.children}
                    </Typography>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </Grid>
        </Grid>
      </Box>
    );
  }
};
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
