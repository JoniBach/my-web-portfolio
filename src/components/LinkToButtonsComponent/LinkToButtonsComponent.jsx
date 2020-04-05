/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useStyles from './LinkToButtonsComponent.style';

type buttonProps = {
    buttonText: String;
    buttonIcon: Array<Object>;
    buttonlink: String;
}
  
export default function LinkToButtonsComponent({buttons}: buttonProps) {
    const styles = useStyles();

    return (
        <Box align="center" justifyContent="center" alignContent="center" display="flex" className={styles.fullScreen}>
            {
                buttons.map((button) => (
                    <Box px={0.5} >
                    <Button href={button.buttonlink} color="secondary" variant="outlined" startIcon={button.buttonIcon}>{button.buttonText}</Button>
                    </Box>
                ))
            }
        </Box>
    );
}
