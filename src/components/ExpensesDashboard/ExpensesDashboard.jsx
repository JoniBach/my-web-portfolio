/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
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
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
    Hidden,
    Drawer,
    Divider,
    CssBaseline,
    AppBar,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import DoughnutPlaceholder from './ExpensesDashboardImages/ChartjsDoughnutPlaceholder.png';
import useStyles from './ExpensesDashboard.style';

export default function ExpensesDashboard(props) {
    const [newStoreName, setStoreName] = useState('');

    const [newTotalSpend, settotalSpend] = useState('');

    const [newPurchaseType, setPurchaseType] = useState('');
    const [newPurchase, setnewPurchase] = useState([]);
    const parsedNewTotalSpend = parseInt(newTotalSpend)
    const [newSelectedDate, setnewSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setnewSelectedDate(date);
    };
    const newPurchaseDate = newSelectedDate.toString();
    const handleSubmit = (event) => {
        event.preventDefault();
        setnewPurchase([
            ...newPurchase,
            { totalSpend: parsedNewTotalSpend, storeName: newStoreName, purchaseDate: newPurchaseDate, purchaseType: newPurchaseType },
        ]);
    };
    const reducedTotalSpend = newPurchase.reduce((a, b) => {
        return a + b.totalSpend;
    },
    0);
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
    const drawer = (
        <div className={classes.root}>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem>
                    <ListItemIcon>
                      <Checkbox
                            color="primary"
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
                            color="primary"
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
                            color="primary"
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
                      ___Site under development
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

                                    <Button variant="contained" color="primary" onClick={handleShowAddNewPurchase}>
                                        <Typography>
                                          Add New purchase
                                        </Typography>
                                    </Button>
                                    {/* <Button variant="contained" color="primary" disabled>
                                        <Typography>
                                          Edit Existing purchase
                                        </Typography>
                                    </Button> */}
                                </Box>
                                <Box width="100%">
                                  {showAddNewPurchase ? (
                                        <Grid item xs={6}>
                                            <Box p={2}>
                                                <form
                                                className={classes.textFields}
                                                noValidate
                                                autoComplete="off"
                                                onSubmit={handleSubmit}>
                                                    <TextField
                                                    required
                                                    label="Shop Name"
                                                    fullWidth
                                                    value={newStoreName}
                                                    onChange={e => setStoreName(e.target.value)} />
                                                    <TextField
                                                    label="Ammount"
                                                    required
                                                    fullWidth
                                                    value={newTotalSpend}
                                                    onChange={e => settotalSpend(e.target.value)}
                                                    type="Number"
                                                    inputProps={{ min: 0 }}
                                                    startAdornment={<InputAdornment position="start">£</InputAdornment>} />
                                                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                                                  <KeyboardDatePicker
                                                        required
                                                        disableToolbar
                                                        fullWidth
                                                        variant="inline"
                                                        format="dd/mm/yyyy"
                                                        margin="normal"
                                                        id="date-picker-inline"
                                                        label="Purchase Date"
                                                        value={newSelectedDate}
                                                        onChange={handleDateChange}
                                                    />
                                                    {/* </MuiPickersUtilsProvider> */}
                                                    <TextField required label="Type" fullWidth value={newPurchaseType} onChange={e => setPurchaseType(e.target.value)} />
                                                  {/* <Box>
                                                        <Typography>Upload Receipt</Typography>
                                                        <Input type="file" disabled></Input>
                                                    </Box> */}
                                                    <Button variant="contained" color="primary" onClick={handleSubmit} >
                                                        <Typography>
                                                          Submit
                                                        </Typography>
                                                    </Button>
                                                    <Button variant="contained" color="warning" onClick={handleHideAddNewPurchase}>
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
                    <Grid item xs={12}>
                        <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                            <Paper >
                                <Box width="100%" alignSelf="center" py={1}>
                                    <Typography >
                                      Total Spend
                                    </Typography>
                                    <Typography color="primary" fontWeight="fontWeightBold">
                                      £{reducedTotalSpend}
                                    </Typography>
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
                                        chart.js coming soon
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
                                        chart.js coming soon
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
                                            {/* Top Purchases */}
                                            My Purchases
                                        </Typography>
                                        <TableContainer>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Total</TableCell>
                                                        <TableCell>Store</TableCell>
                                                        <TableCell>Date</TableCell>
                                                        <TableCell>Type</TableCell>
                                                        {/* <TableCell>Receipt</TableCell> */}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                  {newPurchase.map((row) => (
                                                        <TableRow key={row.name}>
                                                            <TableCell>£{row.totalSpend}</TableCell>
                                                            <TableCell>{row.storeName}</TableCell>
                                                            <TableCell>{row.purchaseDate}</TableCell>
                                                            <TableCell>{row.purchaseType}</TableCell>
                                                            {/* <TableCell><IconButton><FileIcon /></IconButton><IconButton><AddIcon /><EditIcon /></IconButton></TableCell> */}
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
