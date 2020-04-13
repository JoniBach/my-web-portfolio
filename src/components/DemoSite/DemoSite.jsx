/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import makeStyles from './DemoSite.style'
import { Typography, Box } from '@material-ui/core';
import LinkToButtons from '../LinkToButtonsComponent/LinkToButtonsComponent'
import logo from './DemoSiteImages/wing_logo_01.png'
import NavBar from '../NavBar/NavBar'

const NavContent = [
    { buttonText: 'Home', buttonlink: '/' },
    { buttonText: 'My Projects', buttonlink: '' },
]

const NavImages = [
    { navImage: logo },
]

export default function DemoSite() {

    return (
        <NavBar navContent={NavContent} navImages={NavImages} />
    );
}
