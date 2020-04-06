/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from './DemoSite.style'
import { Typography, Button, Box, Grid } from '@material-ui/core';
import LinkToButtons from '../LinkToButtonsComponent/LinkToButtonsComponent'
import cover from './DemoSiteImages/selina01.jpg'

const buttons = [
    {buttonText: 'Welcome', buttonlink:'https://www.linkedin.com/in/james-crook-492652185/'},
    {buttonText: 'Menu', buttonlink: 'mailto:james@jamescrook.uk'},
    {buttonText: 'Press', buttonlink: '/demosite'},
]

export default function DemoSite() {
    const styles = makeStyles();

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={styles.title}>
                        Young Isle
                    </Typography>
                    <LinkToButtons buttons={buttons} /> 
                </Toolbar>
            </AppBar>


            <Box justifyContent="center" display="flex" className={styles.highlightImage}>
                <img src={cover} height="1000" />
            </Box>


        </Box>
    );
}

