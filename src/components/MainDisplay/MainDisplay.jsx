/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import LinkToButtonsComponent from '../LinkToButtonsComponent/LinkToButtonsComponent';
import { Typography, Box } from '@material-ui/core';
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
                <LinkToButtonsComponent />
            </Box>
        </Box>
    );
}
