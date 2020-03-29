/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography } from '@material-ui/core';
import portrait from './portrait-01.jpg';
import theme from '../../theme';


const useStyles = makeStyles(() => ({
    image: {
        height: '500px',
    },
    button: {
        backgroundColour: theme.palette.common.white,
    },

}));


export default function MainDisplay() {
    const classes = useStyles();

    return (
        <Box>
            <img className={classes.image} src={portrait} alt="logo" />
            <Box>
                <Typography color="primary" variant="h4">
                    James Crook
                </Typography>
                <Typography color="primary" variant="h6">
                    Graduate Developer
                </Typography>
                <Button href="https://www.linkedin.com/in/james-crook-492652185/" color="secondary" variant="outlined" startIcon={<LinkedInIcon />}>
                  View Portfolio
                </Button>
            </Box>
        </Box>
    );
}
