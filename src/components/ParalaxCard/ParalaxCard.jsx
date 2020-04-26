/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import useStyles from './LandingPage.style';

import { ParallaxProvider } from 'react-scroll-parallax';







export default function MainDisplay() {
    function onScroll(info) {
        console.log(info.offset, info.velocity)
      }

    const styles = useStyles();

    return (
        // <div className={styles.root}>
        //     <div

        //     >
        //         <Frame width="100%" className={styles.butterflyCard} >

        //         </Frame>
        //         <Frame width="100%" background="">hi</Frame>
        //         <Frame >
        //             Goodbyeeee
        //         </Frame>

        //     </div>

        // </div>
        <div >

<Scroll onScroll={onScroll} />




        </div>
    );
}
