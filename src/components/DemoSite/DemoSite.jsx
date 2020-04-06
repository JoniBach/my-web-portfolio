/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from './DemoSite.style'
import { Typography, Box } from '@material-ui/core';
import LinkToButtons from '../LinkToButtonsComponent/LinkToButtonsComponent'
import cover from './DemoSiteImages/selina01.jpg'
import logo from './DemoSiteImages/wing_logo_01.png'
import badgeWhite from './DemoSiteImages/wing_logo_01_white_circle_transparent.png'
import badgeBlack from './DemoSiteImages/wing_logo_01_black_circle_transparent.png'
import dataEar from './DemoSiteImages/data_ear.png'
import cover2 from './DemoSiteImages/selina02.jpg'



const buttons = [
    { buttonText: 'Our Locations', buttonlink: '' },
    { buttonText: 'Contact Us', buttonlink: '' },
    { buttonText: 'Newsletter', buttonlink: '' },
]

export default function DemoSite() {
    const styles = makeStyles();

    return (
        <div>

            <AppBar position="static">
                <Toolbar>
                    <Box mr={1}><img src={logo} height="50px" /></Box>
                    <Typography variant="h6" className={styles.title}>
                        Young Isle
                    </Typography>
                    <LinkToButtons buttons={buttons} />
                </Toolbar>
            </AppBar>
            <Box className={styles.root} justifyContent="center" display="flex">
                <Box className={styles.page}>
                    <Box justifyContent="center" display="flex" className={styles.highlightImage}>
                        <img src={cover} height="1000" />
                    </Box>
                    <Box p={5} className={styles.blackCard} >
                        <Grid container>
                            <Grid container direction="row" justify="flex-start" alignItems="center" item xs={4}>
                                <img src={badgeWhite} className={styles.image} />
                            </Grid>
                            <Grid container item xs={8} alignItems="center">
                                <Typography item variant="h5" >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box p={5} className={styles.whiteCard} >
                        <Grid container>
                            <Grid container item xs={7} alignItems="center">
                                <Typography item variant="h5" >
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </Typography>
                            </Grid>
                            <Grid container direction="row" justify="left" alignItems="center" item xs={5}>
                                <img src={dataEar} className={styles.page} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box justifyContent="center" alignItems="flex-end" display="flex" className={styles.highlightImage}>
                        <img src={cover2} height="1000" />
                    </Box>

                </Box>
            </Box>
        </div>
    );
}

