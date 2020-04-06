/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useStyles from './LinkToButtonsComponent.style';
import theme from '../../theme'


type buttonProps = {
    buttonText: String;
    buttonIcon: Array<Object>;
    buttonlink: String;
    buttonColour: String;
}
  
export default function LinkToButtonsComponent({buttons}: buttonProps) {
    const styles = useStyles(theme);

    return (
        <Box align="center" justifyContent="center" alignContent="center" display="flex" className={styles.fullScreen}>
            {
                buttons.map((button) => (
                    <Box px={0.5} >
                    <Button href={button.buttonlink} color={button.buttonColor} variant="outlined" startIcon={button.buttonIcon}>{button.buttonText}</Button>
                    </Box>
                ))
            }
        </Box>
    );
}
