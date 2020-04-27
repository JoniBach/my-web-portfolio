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
        { buttonText: 'About Me', buttonlink: '/', buttonColor: 'secondary' },
        { buttonText: 'Creative Portfolio', buttonlink: '/creativeportfolio', buttonColor: 'secondary' },
        { buttonText: 'Web Portfolio', buttonlink: '/webportfolio', buttonColor: 'secondary' },

        // { buttonText: 'My Work', buttonlink: '/', buttonColor: 'secondary'}, 

    ];
    const NavImages = [
        /* 
        Each Object can take the following peramiters:  
        navImage: String
        */
        // { navImage: logo },
    ];

    const buttons = [
        { buttonText: 'LinkedIn', buttonIcon: <LinkedInIcon />, buttonColor: 'secondary', buttonlink: 'https://www.linkedin.com/in/james-crook-492652185/', buttonVariant: "outlined" },
        { buttonText: 'Email', buttonIcon: <EmailIcon />, buttonColor: 'secondary', buttonlink: 'mailto:james@jamescrook.uk', buttonVariant: "outlined" },
        { buttonText: 'CV', buttonIcon: <DriveIcon />, buttonColor: 'secondary', buttonlink: 'https://docs.google.com/document/d/1T7bBXvHs8SR6-YXDmXWAdowlkUAd7ONjOdUKwZ8-tvk/edit?usp=sharing?export=download', buttonVariant: "outlined" },
        { buttonText: 'Instagram', buttonIcon: <Instagram />, buttonColor: 'secondary', buttonlink: 'https://www.instagram.com/jzcrook/', buttonVariant: "outlined" },

    ]
    const [rotate, setRotate] = useState(0);
    const toggleRotate = () => setRotate(rotate + 90);


    return (


        <Box>
            {/* <Parallax >
                <Box>
                <img src="https://cdn2-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg" width="100%" />
                </Box>
            </Parallax>
            <Parallax y={[-10, -400]}>
                <Box>
                <img src="https://cdn2-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg" width="100%" height="400px" />

                </Box>
            </Parallax> */}

            {/* <Box className={style.container}>
            <img src="https://cdn2-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg" width="100%" />
            <Typography className={style.centered}>hi</Typography>
            </Box> */}



            <NavBar navContent={NavContent} navImages={NavImages} />
            <Box display="flex" justifyContent="center" p={1} alignItems="center" className={styles.paralax} style={{ backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/ButterflyCover.jpg)", }}>
                <Typography variant="h1" color="secondary">
                    Hey!
                </Typography>
            </Box>
            <Box className={styles.paralaxCard} p={4} alignItems="center">
                <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={3}>
                        <img src={logo} alt="My logo" className={styles.image} />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h5" color="secondary">
                            Thanks for checking me out! My name is James Crook. I am a front end developer with one year of experience as a software engineer. After concluding my bachelor's Degree in the creative industries, I taught myself to code and joined the fast-paced digital environment of Deloitte Systems Design & Engineering (where I am soon to complete my Industrial Placement). I am adept in the art of upskilling to address a wide-scale variety of tasks. I have demonstrated the ability to serve clients across a number of different mediums from the carefully controlled environment of the Public Sector; to the fast-paced and highly mobile environment of private sector eCommerce. Being able to learn quality soft skills from a decade of performing and creating art has helped me grow in the technology sector.                        </Typography>
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" p={1} alignItems="center" className={styles.paralax} style={{ backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/parkinglot.png)", }}>
                    <Buttons buttons={buttons} />
                </Box>
            </Box>
            {/* <Box display="flex" justifyContent="center" p={1} alignItems="center" className={styles.paralax} style={{ backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/strut.png)", }}>
                    <Typography variant="h1" color="secondary">I'm a bit of a show off!</Typography>
                </Box>
                <Box className={styles.paralaxCard} p={4} alignItems="center">
                <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={3}>
                    <Typography variant="h5" color="secondary"> TODO: Add clickable animation to advertise my portfolio</Typography>
                    </Grid>
                    <Grid item xs={9}>
               
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" p={1} alignItems="center" className={styles.paralax} style={{ backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/parkinglot.png)", }}>
                    <Buttons buttons={buttons} />
                </Box>
            </Box>
             */}
        </Box>
    );
}
