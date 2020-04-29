/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import useStyles from './LandingPage.style';
import { Parallax } from 'react-scroll-parallax';
import { Box, Typography, Grid } from '@material-ui/core';
import NavBar from '../NavBar/NavBar'
import logo from '../MainDisplay/portrait-01.jpg';
import Buttons from '../LinkToButtonsComponent/LinkToButtonsComponent'
import Instagram from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DriveIcon from '@material-ui/icons/InsertDriveFile';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { useState } from "react";
import { render } from "react-dom";
import { Frame } from "framer";
import designImage from "../DemoSite/DemoSiteImages/wing_logo_01_white_circle_transparent.png"
import appImage from "../DemoSite/DemoSiteImages/appIcon.png"
import AppIcon from "@material-ui/icons/Apps"
import './fadeAnimations.css';
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";




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


    return (


        <Box>
            <NavBar navContent={NavContent} navImages={NavImages} />
            <Box display="flex" justifyContent="center" p={1} alignItems="center" className={styles.paralax} style={{ backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/ButterflyCover.jpg)", }}>
                <Typography variant="h1" color="primary">
                    Hey!
                </Typography>
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
                                            Thanks for checking out my page! My name is James Crook. I am a front end developer with one year of experience as a software engineer. After concluding my bachelor's Degree in the creative industries, I taught myself to code and joined the fast-paced digital environment of Deloitte Systems Design & Engineering (where I am soon to complete my Industrial Placement).
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

            <Box className={styles.paralaxCard} p={4} alignItems="center">
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
