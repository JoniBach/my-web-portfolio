/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Email from '@material-ui/icons/Email';
import Drive from '@material-ui/icons/InsertDriveFile';


import { Typography } from '@material-ui/core';
import useStyles from './MainDisplay.style';
import logo from '../../logo2.svg';


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
                <Button href="https://www.linkedin.com/in/james-crook-492652185/" color="secondary" variant="outlined" startIcon={<LinkedInIcon />}>
                        LinkedIn
                </Button>
                <Button href="mailto:james@jamescrook.uk" color="secondary" variant="outlined" startIcon={<Email />}>
                    Email
                </Button>


            </Box>
        </Box>
    );
}
