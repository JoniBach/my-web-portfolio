// /* eslint-disable linebreak-style */
// /* eslint-disable react/jsx-indent */
// /* eslint-disable no-tabs */
// import React from 'react';
// import { Typography, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
// import NavBar from '../NavBar/NavBar'
// import ProjectCard from '../ProjectCard/ProjectCard'
// import Box from '@material-ui/core/Box'
// import logo from '../DemoSite/DemoSiteImages/wing_logo_01.png'

// const NavContent = [
//     /*
//     Each Object can take the following peramiters:  
//     buttonText: String
//     buttonlink: String
//     buttonIcon: Array<Object>
//     buttonColor: String
//     buttonlink: String
//     */
//     { buttonText: 'Home', buttonlink: '/home' },
//     { buttonText: 'Expenses Dash', buttonlink: '/expensesdashboard' },
//     { buttonText: 'My Work', buttonlink: '/' },

// ]

// const NavImages = [
//     /* 
//     Each Object can take the following peramiters:  
//     navImage: String
//     */
//     { navImage: logo },
// ]
// export default function DemoSite() {
//     const [showWebDesign, setShowWebDesign] = React.useState(true);
//     const handleShowWebDesign = (event) => {
//         setShowWebDesign(event.target.checked);
//     };


//     return (
//         <Box>
//             <NavBar navContent={NavContent} navImages={NavImages} />
//             <Box px={3}>
//                 <FormGroup row>
//                 <FormControlLabel
//                   control={(
//                             <Checkbox
//                                 checked={showWebDesign}
//                                 onChange={handleShowWebDesign}
//                                 inputProps={{ 'aria-label': 'primary checkbox' }}
//                             />
//                         )}
//                         label="Web Design"
//                     />
//                 </FormGroup>
//             </Box>

//             <Box px={3}>
//                 <FormGroup row>
//                 {showWebDesign ? (
//                         <div>
//                             <Box pt={4} pb={1}>
//                                 <Typography variant="h4" component="h2">Web Design</Typography>
//                             </Box>
//                         </div>
//                     )
//                         : null}
//                 </FormGroup>

//             </Box>
//         </Box>

//     );
// }

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Paper, Box } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem button >
                    <ListItemIcon>
                        <Checkbox
                            checked={'showWebDesign'}
                            onChange={'handleShowWebDesign'}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="What have you bought?" />
                </ListItem>
            </List>
            <List>
                <ListItem button >
                    <ListItemIcon>
                        <Checkbox
                            checked={'showWebDesign'}
                            onChange={'handleShowWebDesign'}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Where have you shopped?" />
                </ListItem>
            </List>
            <List>
                <ListItem button >
                    <ListItemIcon>
                        <Checkbox
                            checked={'showWebDesign'}
                            onChange={'handleShowWebDesign'}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="How much have you spent?" />
                </ListItem>
            </List>
            <Divider />
        </div >
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Your Expenses Dashboard
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container>
                    <Grid item xs={6}>
                        <Box p={2}>
                            <Paper >hi</Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box p={2}>
                            <Paper>hi</Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box p={2}>
                            <Paper>hi</Paper>
                        </Box>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any,
};

export default ResponsiveDrawer;
