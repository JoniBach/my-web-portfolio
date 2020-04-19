import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
    Grid, 
    Paper, 
    Box, 
    Button, 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    InputAdornment,
    FormControl,
    InputLabel,
    Input,

} from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FileIcon from '@material-ui/icons/FileCopyOutlined';
import EditIcon from '@material-ui/icons/Edit';
import DoughnutPlaceholder from './ExpensesDashboardImages/ChartjsDoughnutPlaceholder.png';
import TextField from '@material-ui/core/TextField'
import { KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './ExpensesDashboard.style.js'



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
    const [showAddNewPurchase, setShowAddNewPurchase] = React.useState(false);
    const handleShowAddNewPurchase = () => {
        setShowAddNewPurchase(true);
    };
    const handleHideAddNewPurchase = () => {
        setShowAddNewPurchase(false);
    };

    function createData(name, totalHighestSpend, storeName, dateHightestSpend, addReciept) {
        return { name, totalHighestSpend, storeName, dateHightestSpend, addReciept };
    }

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const rows = [
        createData(1, '£430.00', 'Goldsmiths', '16/02/20'),
        createData(2, '£134.79', 'Ebay', '12/02/20'),
        createData(3, '£67.99', 'Argos', '18/02/20'),
        createData(4, '£55.00', 'John Lewis', '22/02/20'),
        createData(5, '£49.99', 'Amazon', '02/02/20'),
    ];

    const drawer = (
        <div className={classes.root}>
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
                    <Typography variant="body2" noWrap>
                        ->  Site under development. Features will include placehoders until logic is complete
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
                    <Grid item xs={12}>
                        <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                            <Paper >
                                <Box width="100%" alignSelf="flex-start" p={2} >
                                    <Button variant="outlined" color="secondary" onClick={handleShowAddNewPurchase}>
                                        <Typography>
                                            Add New purchase
                                            </Typography>
                                    </Button>
                                    <Button variant="outlined" color="secondary" disabled>
                                        <Typography>
                                            Edit Existing purchase
                                            </Typography >
                                    </Button >
                                </Box>
                                <Box width="100%">
                                    {showAddNewPurchase ? (
                                        <Grid item xs={6}>
                                            <Box p={2}>
                                                <form className={classes.textFields} noValidate autoComplete="off">
                                                    <TextField required label="Shop Name" />
                                                    <FormControl required fullWidth>
                                                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                                                        <Input type="number" inputProps={{ min: 0 }} startAdornment={<InputAdornment position="start">$</InputAdornment>} />
                                                    </FormControl>
                                                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}

                                                    <KeyboardDatePicker
                                                    required
                                                        disableToolbar
                                                        variant="inline"
                                                        format="MM/dd/yyyy"
                                                        margin="normal"
                                                        id="date-picker-inline"
                                                        label="Date picker inline"
                                                        value={selectedDate}
                                                        onChange={handleDateChange}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                    {/* </MuiPickersUtilsProvider> */}
                                                    <TextField required label="Type of purchase" />
                                                    <Box>
                                                        <Typography>Upload Receipt</Typography>
                                                        <Input type="file">hi</Input>
                                                    </Box>
                                                    <Button variant="outlined" color="secondary" disabled>
                                                        <Typography>
                                                            Submit
                                            </Typography>
                                                    </Button>
                                                    <Button variant="outlined" color="warning" onClick={handleHideAddNewPurchase}>
                                                        <Typography>
                                                            Cancel
                                            </Typography>
                                                    </Button>
                                                </form>
                                            </Box>
                                        </Grid>
                                    )
                                        : null}
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
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
                                        <TableContainer>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Rank</TableCell>
                                                        <TableCell>Total</TableCell>
                                                        <TableCell>Store</TableCell>
                                                        <TableCell>Date</TableCell>
                                                        <TableCell>Receipt</TableCell>
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
                                                            <TableCell>
                                                                <IconButton>
                                                                    <FileIcon />
                                                                </IconButton>
                                                                <IconButton>
                                                                    <AddIcon /><EditIcon />
                                                                </IconButton>
                                                            </TableCell>
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
