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


const buttons = [
    {buttonText: 'LinkedIn', buttonIcon: <LinkedInIcon />, buttonlink:'https://www.linkedin.com/in/james-crook-492652185/'},
    {buttonText: 'Email', buttonIcon: <EmailIcon />, buttonlink: 'mailto:james@jamescrook.uk'},
    {buttonText: 'My CV', buttonIcon: <DriveIcon />, buttonlink: 'https://docs.google.com/document/d/1T7bBXvHs8SR6-YXDmXWAdowlkUAd7ONjOdUKwZ8-tvk/edit?usp=sharing?export=download' },
    {buttonText: 'Instagram', buttonIcon: <Instagram />, buttonlink: 'https://www.instagram.com/jzcrook/'}
]

export default function MainDisplay() {
    const styles = useStyles();

    return (
        <Box align="center" justifyContent="center" alignContent="center" display="flex" className={styles.fullScreen}>
            <Box alignSelf="center" className={styles.root}>
                <img src={logo} alt="My logo" className={styles.image} />
                <Typography color="primary" variant="h4">
                        James Crook
                </Typography>
                <Typography color="primary" variant="h6">
                        Graduate Developer
                </Typography>
                <LinkToButtonsComponent buttons={buttons} />
            </Box>
        </Box>
    );
}
