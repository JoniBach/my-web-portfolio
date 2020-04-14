/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useStyles from '../LinkToButtonsComponent/LinkToButtonsComponent.style';
import theme from '../../theme'


type navProps = {
    buttonText: String;
    buttonIcon: Array<Object>;
    buttonlink: String;
    buttonColour: String;
    buttonVariant: String;
    navImage: Array<Object>;
}

export default function DemoSite({ navContent, navImages }: navProps) {
    const styles = useStyles(theme);
    return (
        <AppBar position="static">
            <Toolbar>
                <Box mr={1}>

                    {
                        navImages.map((image) => (
                            <img src={image.navImage} height="50px" alt="Logo" />
                        ))}

                </Box>
                <Box align="center" justifyContent="center" alignContent="center" display="flex" className={styles.fullScreen}>
                    {
                        navContent.map((button) => (
                            <Box px={0.5} >
                                <Button href={button.buttonlink} color={button.buttonColor} variant={button.buttonVariant} startIcon={button.buttonIcon}>{button.buttonText}</Button>
                            </Box>
                        ))
                    }
                </Box>
            </Toolbar>
        </AppBar>
    );
}

