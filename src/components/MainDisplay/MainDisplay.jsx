/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import Instagram from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DriveIcon from '@material-ui/icons/InsertDriveFile';
import logo from './portrait-01.jpg';
import useStyles from './MainDisplay.style';
import LinkToButtonsComponent from '../LinkToButtonsComponent/LinkToButtonsComponent';
import MenuBookIcon from '@material-ui/icons/MenuBook';


const buttons = [
    {buttonText: 'LinkedIn', buttonIcon: <LinkedInIcon />, buttonColor: 'secondary', buttonlink:'https://www.linkedin.com/in/james-crook-492652185/'},
    {buttonText: 'Email', buttonIcon: <EmailIcon />, buttonColor: 'secondary',buttonlink: 'mailto:james@jamescrook.uk'},
    {buttonText: 'Portfolio', buttonIcon: <MenuBookIcon />, buttonColor: 'secondary', buttonlink: '#/demosite'},
    {buttonText: 'CV', buttonIcon: <DriveIcon />, buttonColor: 'secondary', buttonlink: 'https://docs.google.com/document/d/1T7bBXvHs8SR6-YXDmXWAdowlkUAd7ONjOdUKwZ8-tvk/edit?usp=sharing?export=download' },
    {buttonText: 'Instagram', buttonIcon: <Instagram />, buttonColor: 'secondary', buttonlink: 'https://www.instagram.com/jzcrook/'},

]

export default function MainDisplay() {
    const styles = useStyles();

    return (
        <Box width="100%" align="center" justifyContent="center" alignContent="center" display="flex" className={styles.fullScreen}>
            <Box width="100%" alignSelf="center" className={styles.root}>
                <img src={logo} alt="My logo" className={styles.image} />
                <Typography color="primary" variant="h4">
                        James Crook
                </Typography>
                <Typography color="primary" variant="h6">
                        Graduate Developer
                </Typography>
                <Box py={1}>
                <LinkToButtonsComponent buttons={buttons} />
                </Box>
            </Box>
        </Box>
    );
}
