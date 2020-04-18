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
import { Grid, Paper, Box, Button } from '@material-ui/core';
import DoughnutPlaceholder from './ExpensesDashboardImages/ChartjsDoughnutPlaceholder.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/AddCircleOutlineOutlined';

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

    const [showWhat, setShowWhat] = React.useState(true);
    const handleShowWhat = (event) => {
        setShowWhat(event.target.checked);
    };
    const [showWhere, setShowWhere] = React.useState(true);
    const handleShowWhere = (event) => {
        setShowWhere(event.target.checked);
    };
    const [showHowMuch, setShowHowMuch] = React.useState(true);
    const handleShowHowMuch = (event) => {
        setShowHowMuch(event.target.checked);
    };

    function createData(name, totalHighestSpend, storeName, dateHightestSpend, addReciept) {
        return { name, totalHighestSpend, storeName, dateHightestSpend, addReciept };
    }

    const rows = [
        createData(1, '£430.00', 'Goldsmiths', '16/02/20', ),
        createData(2, '£134.79', 'Ebay', '12/02/20', ),
        createData(3, '£67.99', 'Argos', '18/02/20', ),
        createData(4, '£55.00', 'John Lewis', '22/02/20', ),
        createData(5, '£49.99', 'Amazon', '02/02/20', ),
    ];

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Checkbox
                            checked={showWhat}
                            onChange={handleShowWhat}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="What have you bought?" />
                </ListItem>
                <ListItem >
                    <ListItemIcon>
                        <Checkbox
                            checked={showWhere}
                            onChange={handleShowWhere}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Where have you shopped?" />
                </ListItem>


                <ListItem >
                    <ListItemIcon>
                        <Checkbox
                            checked={showHowMuch}
                            onChange={handleShowHowMuch}
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
                    {showWhat ? (
                        <Grid item xs={6}>
                            <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                                <Paper >
                                    <Box width="100%" alignSelf="center" py={1}>
                                        <Typography >
                                            Purchase Type
                                        </Typography>
                                        <img src={DoughnutPlaceholder} width={200}></img>

                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    )
                        : null}

                    {showWhere ? (
                        <Grid item xs={6}>
                            <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                                <Paper >
                                    <Box width="100%" alignSelf="center" py={1}>
                                        <Typography >
                                            Purchase Details
                                        </Typography>
                                        <img src={DoughnutPlaceholder} width={200}></img>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    )
                        : null}
                    {showHowMuch ? (
                        <Grid item xs={12}>
                            <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                                <Paper >
                                    <Box width="100%" alignSelf="center" p={2}>
                                        <Typography >
                                            Top Purchase
                                    </Typography>
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Rank</TableCell>
                                                        <TableCell>Total</TableCell>
                                                        <TableCell>Store</TableCell>
                                                        <TableCell>Date</TableCell>
                                                        <TableCell>Add Reciepit</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <TableRow key={row.name}>
                                                            <TableCell component="th" scope="row">
                                                                {row.name}
                                                            </TableCell>
                                                            <TableCell>{row.totalHighestSpend}</TableCell>
                                                            <TableCell>{row.storeName}</TableCell>
                                                            <TableCell>{row.dateHightestSpend}</TableCell>
                                                            <TableCell><Button><AddIcon /></Button></TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    )
                        : null}
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
