/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React, { Fragment, useState, useEffect } from "react";
import useStyles from './LandingPage.style';
import { useSpring, animated, interpolate } from "react-spring";
import { Box, Typography, Grid } from '@material-ui/core';
import NavBar from '../NavBar/NavBar'
import logo from '../MainDisplay/portrait-01.jpg';
import designImage from "../DemoSite/DemoSiteImages/wing_logo_01_white_circle_transparent.png"
import './fadeAnimations.css';
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";


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




    const NavContent = [
        /* 
        Each Object can take the following peramiters:  
        buttonText: String
        buttonlink: String
        buttonIcon: Array<Object>
        buttonColor: String
        buttonlink: String
        */
        { buttonText: 'About', buttonlink: '/', buttonColor: 'secondary' },
        { buttonText: 'Creative', buttonlink: '/creativeportfolio', buttonColor: 'secondary' },
        { buttonText: 'Web', buttonlink: '/webportfolio', buttonColor: 'secondary' },
        { buttonText: 'Covid', buttonlink: '/mycovidtracker', buttonColor: 'secondary' },
        // { buttonText: 'My Work', buttonlink: '/', buttonColor: 'secondary'}, 

    ];
    const NavImages = [
        /* 
        Each Object can take the following peramiters:
        navImage: String
        */
        // { navImage: logo },
    ];

    const fadeDelay = 400;

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
    const textColor = 'purple'
    const textColorShadow = 'grey'

    const fontWeight = 'bold'
    return (


        <Box >
            <NavBar style="fab" />
            <Box justifyContent="center" p={1} alignItems="center" className={styles.paralax} style={{  backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/ButterflyCover.jpg)", }}>
                    <animated.div style={{ transform: interpHeaderA }}>
                    <Typography align="center" variant="h1" style={{ fontWeight: fontWeight,  filter: "blur(8px)", position: 'absolute', color: textColorShadow, left: '0%', top: '0%' }}>
                    Salut!
                    </Typography>
                    <Typography align="center" variant="h1" style={{ fontWeight: fontWeight,  filter: "blur(8px)", position: 'absolute', color: textColorShadow, right: '10%', top: '60%' }}>
                    Hug!
                    </Typography>
                    {/* <Typography align="center" variant="h1" style={{ fontWeight: fontWeight,  filter: "blur(8px)", position: 'absolute', color: textColorShadow, left: '20%', top: '40%' }}>
                    Hug!
                    </Typography> */}
                    <Typography align="center" variant="h1" style={{ fontWeight: fontWeight,  filter: "blur(8px)", position: 'absolute', color: textColorShadow, right: '30%', top: '10%' }}>
                    Hallo!
                    </Typography>
                    <Typography align="center" variant="h1" style={{ fontWeight: fontWeight,  filter: "blur(8px)", position: 'absolute', color: textColorShadow, left: '40%', top: '70%' }}>
                    Hej!
                    </Typography>
                    <Typography align="center" variant="h1" style={{ fontWeight: fontWeight,  filter: "blur(8px)", position: 'absolute', color: textColorShadow, right: '0%', top: '80%' }}>
                    Oi!
                    </Typography>
                    <Typography align="center" variant="h1" style={{ fontWeight: fontWeight,  filter: "blur(8px)", position: 'absolute', color: textColorShadow, left: '0%', top: '50%' }}>
                    Privet
                    </Typography>
                    <Typography align="center" variant="h1" color="primary" style={{ fontWeight: fontWeight,  position: 'relative'}}>
                        Hey!
                    </Typography>
                </animated.div>
                <animated.div style={{ transform: interpHeaderB }}>
                    <Typography align="center" variant="h2" color="primary" color="primary" style={{fontWeight: fontWeight }}>
                        My name is James!
                    </Typography>
                </animated.div>

                <animated.div  style={{ transform: interpHeaderC }}>
                    <Typography align="center" variant="h3" color="primary" style={{fontWeight: fontWeight }}>
                        Welcome to my site!
                    </Typography>
                </animated.div>
            </Box>
            <Box className={styles.paralaxCard} p={4} alignItems="center">
                <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={3}>
                        <img src={logo} alt="Portrait" width="100%" />
                    </Grid>
                    <Grid item xs={9}>
                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <Spring delay={fadeDelay} to={{ opacity: isVisible ? 1 : 0 }}>
                                    {({ opacity }) => (
                                        <Typography variant="h5" color="secondary" style={{ opacity }}>
                                           I am a front end developer with a passion for visual creativity. After concluding my bachelor's Degree in the creative industries, I taught myself to code and joined the fast-paced digital environment of tech consulting.
                                        </Typography>
                                    )}
                                </Spring>
                            )}
                        </VisibilitySensor>
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" p={2} alignItems="center" className={styles.paralax} style={{ backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/parkinglot.png)", }}>
                    <Typography variant="h4" color="secondary">Check out my web portfolio site <a style={{ color: 'white' }} href="https://github.com/JoniBach/my-web-portfolio/">here!</a></Typography>

                </Box>
            </Box>

            <Box className={styles.paralaxCard} p={4} alignItems="center" height="50%">
                <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={10}>
                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <Spring delay={fadeDelay} to={{ opacity: isVisible ? 1 : 0 }}>
                                    {({ opacity }) => (

                                        <Typography variant="h5" color="secondary" style={{ opacity }}>
                                            I am passionate about injecting creativity into my work. I have a background in the creative industries stretching over 7 years. I have collated some of my favourite projects <a style={{ color: 'skyBlue' }} href="/creative portfolio" >here! </a>
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
            </Box>

            <Box display="flex" justifyContent="center" p={1} alignItems="center" className={styles.paralax} style={{ backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/strut.png)", }}>
                <Typography variant="h4" color="secondary"> Weird fact: <a align="center" style={{ color: 'white' }} href="https://www.instagram.com/p/B8eL2SKnJAy/">My office band performed for the OneShow</a></Typography>

            </Box>
            {/* <Box className={styles.paralaxCard} p={4} alignItems="center">
                <Grid container direction="row"
                    justify="center"
                    alignItems="center">

                    <Grid item justify="center"
                        alignItems="center" xs={9}>
                            <Typography variant="h5" align="center" color="secondary">
                                I love experimenting with new Node libraries and components. I have recently been developing my own applications to learn the ropes. Check out my website build <a style={{ color: 'skyBlue' }} href="https://github.com/JoniBach/my-web-portfolio/">here!</a>
                            </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box display="flex" justifyContent="center" p={2} alignItems="center" className={styles.paralax} style={{ backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Sight_Eye.jpg)", }}>
                <Typography align="center" variant="h4" color="secondary"> My top softskills are Empathy, Collaboration, Approachability, Creativity and Adaptability </Typography>
            </Box> */}
        </Box>

    );
}
