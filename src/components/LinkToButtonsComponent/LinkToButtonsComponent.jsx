/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DriveIcon from '@material-ui/icons/InsertDriveFile';
import useStyles from './LinkToButtonsComponent.style';
import Instagram from '@material-ui/icons/Instagram';

type buttonProps = {
    buttonText: String;
    buttonIcon: Array<Object>;
    buttonlink: String;
}

const buttons = [
    {buttonText: 'LinkedIn', buttonIcon: <LinkedInIcon />, buttonlink:'https://www.linkedin.com/in/james-crook-492652185/'},
    {buttonText: 'Email', buttonIcon: <EmailIcon />, buttonlink: 'mailto:james@jamescrook.uk'},
    {buttonText: 'My CV', buttonIcon: <DriveIcon />, buttonlink: 'https://docs.google.com/document/d/1T7bBXvHs8SR6-YXDmXWAdowlkUAd7ONjOdUKwZ8-tvk/edit?usp=sharing?export=download' },
    {buttonText: 'Instagram', buttonIcon: <Instagram />, buttonlink: 'https://www.google.com'}
]
  
export default function LinkToButtonsComponent({ buttonText, buttonIcon, buttonlink }: buttonProps) {
    const styles = useStyles();

    return (
        <Box align="center" justifyContent="center" alignContent="center" display="flex" className={styles.fullScreen}>
            {
                buttons.map((button) => (
                    <Button href={button.buttonlink} color="secondary" variant="outlined" startIcon={button.buttonIcon}>{button.buttonText}</Button>
                ))
            }
        </Box>
    );
}
