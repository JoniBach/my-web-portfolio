/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React, { Fragment, useState, useEffect } from "react";
import useStyles from './LandingPage.style';
import { useSpring, animated, interpolate } from "react-spring";
import { Box, Typography, Grid } from '@material-ui/core';
import NavBar from '../NavBar/NavBar'
import logo from '../MainDisplay/portrait-01.jpg';
import designImage from "../CreativePortfolio/DemoSiteImages/wing_logo_01_white_circle_transparent.png"
import './fadeAnimations.css';
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

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
                style={{ backgroundImage: props.image, }}
            >
                <Typography variant="h4" color="secondary">
                    {props.children}
                </Typography>
            </Box>
        )
    } else {
        return (
            <Box
                display="flex"
                justifyContent="center"
                p={1}
                alignItems="center"
                className={styles.paralax}
                style={{ backgroundImage: props.image, }}
            >
                <Typography variant="h4" color="secondary">
                    {props.children}
                </Typography>
            </Box>
        )
    }

}

export const TextBar = (props) => {
    const fadeDelay = 400;

    console.log(props)
    if (props.iconPosition == "right") {
        return (
            <Grid container direction="row"
                justify="center"
                alignItems="center">
                <Grid item xs={10}>
                    <VisibilitySensor>
                        {({ isVisible }) => (
                            <Spring delay={fadeDelay} to={{ opacity: isVisible ? 1 : 0 }}>
                                {({ opacity }) => (
                                    <Typography variant="h5" color="secondary" style={{ opacity }}>
                                        {props.children}
                                    </Typography>
                                )}
                            </Spring>
                        )}
                    </VisibilitySensor>
                </Grid>
                <Grid item xs={2}>
                    <img src={designImage} alt="design image" width="100%"></img>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3}>
                    <img src={logo} alt="Portrait" width="100%" />
                </Grid>
                <Grid item xs={9}>
                    <VisibilitySensor>
                        {({ isVisible }) => (
                            <Spring delay={fadeDelay} to={{ opacity: isVisible ? 1 : 0 }}>
                                {({ opacity }) => (
                                    <Typography variant="h5" color="secondary" style={{ opacity }}>
                                        {props.children}
                                    </Typography>
                                )}
                            </Spring>
                        )}
                    </VisibilitySensor>
                </Grid>
            </Grid>
        )
    }

}

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
    const styles = useStyles();
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", debounce(handleScroll));
        return () => window.removeEventListener("scroll", debounce(handleScroll));
    }, [debounce]);

    const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
        springscrollY: 0
    }));
    springsetScrollY({ springscrollY: scrollY });

    const parallaxLevelA = 3;
    const interpHeaderA = springscrollY.interpolate(
        o => `translateY(${o / parallaxLevelA}px)`
    );
    const parallaxLevelB = 5;
    const interpHeaderB = springscrollY.interpolate(
        o => `translateY(${o / parallaxLevelB}px)`
    );
    const parallaxLevelC = 10;
    const interpHeaderC = springscrollY.interpolate(
        o => `translateY(${o / parallaxLevelC}px)`
    );
    const fontWeight = 'bold'

    const greetings = [
        { label: 'Salut!', style: { left: '0%', top: '0%' } },
        { label: 'Hug!', style: { right: '10%', top: '60%' } },
        { label: 'Hallo!', style: { right: '30%', top: '10%' } },
        { label: 'Hej!', style: { left: '40%', top: '70%' } },
        { label: 'Oi!', style: { right: '0%', top: '80%' } },
        { label: 'Privet!', style: { left: '0%', top: '50%' } },
    ]

    return (
        <Box >
            <NavBar style="fab" />
            <Box
                justifyContent="center"
                p={1} alignItems="center"
                className={styles.paralax}
                style={{ backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/ButterflyCover.jpg)", }}
            >
                <animated.div style={{ transform: interpHeaderA }}>
                    {
                        greetings.map((d, i) => (
                            <Typography
                                className={styles.shadow}
                                align="center"
                                variant="h1"
                                style={d.style}
                            >
                                {d.label}
                            </Typography>
                        ))
                    }
                    <Typography
                        align="center"
                        variant="h1"
                        color="primary"
                        style={{ fontWeight: fontWeight, position: 'relative' }}
                    >
                        Hey!
                    </Typography>
                </animated.div>
                <animated.div style={{ transform: interpHeaderB }}>
                    <Typography
                        align="center"
                        variant="h2"
                        color="primary"
                        color="primary"
                        style={{ fontWeight: fontWeight }}
                    >
                        My name is James!
                    </Typography>
                </animated.div>
                <animated.div style={{ transform: interpHeaderC }}>
                    <Typography
                        align="center"
                        variant="h3"
                        color="primary"
                        style={{ fontWeight: fontWeight }}
                    >
                        Welcome to my portfolio!
                    </Typography>
                </animated.div>
            </Box>
            <Box className={styles.paralaxCard} p={4} alignItems="center">
                <TextBar iconPosition="left">
                    I am a front end developer with a passion for visual creativity. After concluding my bachelor's Degree in the creative industries, I taught myself to code and joined the fast-paced digital environment of tech consulting.
                </TextBar>
                <ImageCard border={true} image="url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/parkinglot.png)">
                    Check out my web portfolio site <a style={{ color: 'white' }} href="https://github.com/JoniBach/my-web-portfolio/">here!</a>
                </ImageCard>
            </Box>
            <Box className={styles.paralaxCard} p={4} alignItems="center" height="50%">
                <TextBar iconPosition="right">
                    During my spare time, I dabble with producing multidisciplinary digital artwork that often expresses my observations of modern life. You can find them <a style={{ color: 'skyBlue' }} href="/creative portfolio" >here! </a> along with some of my UI designs
            </TextBar>
            </Box>
            <ImageCard image="url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/strut.png)">
                Weird fact: <a align="center" style={{ color: 'white' }} href="https://www.instagram.com/p/B8eL2SKnJAy/">My office band performed for the OneShow</a>

            </ImageCard>

        </Box>

    );
}
