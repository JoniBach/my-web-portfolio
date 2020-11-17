/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Fab, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '../Drawer/Drawer'
import {pages, links} from '../../config/nav.cofig'

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

