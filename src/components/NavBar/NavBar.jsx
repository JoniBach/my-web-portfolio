/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Box, Fab, IconButton, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import theme from '../../theme'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '../Drawer/Drawer'
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';
import WebIcon from '@material-ui/icons/Web';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    fab: {
        position: 'fixed',
        top: theme.spacing(2),
        left: theme.spacing(2),
        zIndex: 2
    },
}));

const pages = [
    { label: 'About', link: '/', icon: <InfoIcon /> },
    { label: 'Creative', link: '/creativeportfolio', icon: <CreateIcon /> },
    { label: 'Web', link: '/webportfolio', icon: <WebIcon /> },
    { label: 'Covid', link: '/mycovidtracker', icon: <DataUsageIcon /> },
]
const links = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/james-crook-492652185/?originalSubdomain=uk', icon: <LinkedInIcon /> },
    { label: 'Instagram', link: 'https://www.instagram.com/infrageist/', icon: <InstagramIcon /> },
    // { label: 'CV', link: 'https://github.com/JoniBach', icon: <InsertDriveFileIcon /> },
    { label: 'GITHub', link: 'https://github.com/JoniBach', icon: <GitHubIcon /> },
]

export default function NavBar(props) {
    const classes = useStyles();
    const Nav = () => <Drawer pages={pages} links={links} />
    const BarNav = () => {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Nav />
                    {props.label 
                    ? <Typography>James Crook - {props.label}</Typography>
                    : <Typography>James Crook Dev</Typography>
                    }
                </Toolbar>
            </AppBar>
        )
    }
    const FabNav = () => {
        return (
            <Fab color="primary" className={classes.fab} >
                <Nav />
            </Fab>
        )
    }
    
    if (props.style === "fab") {
        return <FabNav />
    } else if (props.style === "bar") {
        return <BarNav />
    } else {
        return <BarNav />
    }
}

