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
import { ResponsivePie } from '@nivo/pie';
import useStyles from './ExpensesDashboard.style';
// import AutoFill from '../AutoFill/AutoFill';


export default function ExpensesDashboard(props) {

    // function renderInput(inputProps) {
    //     const { InputProps, classes, ref, ...other } = inputProps;
      
    //     return (
    //       <TextField
    //         InputProps={{
    //           inputRef: ref,
    //           classes: {
    //             root: classes.inputRoot,
    //             input: classes.inputInput,
    //           },
    //           ...InputProps,
    //         }}
    //         {...other}
    //       />
    //     );
    //   }
    // Importing Style and theme
    const classes = useStyles();
    const theme = useTheme();

    // Setting state for newly entered variables
    const [newPurchase, setnewPurchase] = useState([]);
    const [newStoreName, setStoreName] = useState('');
    const [newTotalSpend, settotalSpend] = useState();
    const [newPurchaseType, setPurchaseType] = useState('');
    const [newSelectedDate, setnewSelectedDate] = React.useState(new Date());
    // Setting state for hiding components with ternary operators
    const [showPurchaseType, setShowPurchaseType] = React.useState(true);
    const [showRecentStores, setShowRecentStores] = React.useState(true);
    const [showMyPurchases, setShowMyPurchases] = React.useState(true);
    const [showAddNewPurchase, setShowAddNewPurchase] = React.useState(false);
    // Setting state for changing drawer when a mobile user is detected
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // parsing is required to convert the string received into a number type
    const parsedNewTotalSpend = parseInt(newTotalSpend);

    // Assigning the output for the purchase date to a string
    const newPurchaseDate = newSelectedDate.toString();


    // settinng event handlers to enable updating variables
    const handleDateChange = (date) => {
        setnewSelectedDate(date);
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleshowPurchaseType = (event) => {
        setShowPurchaseType(event.target.checked);
    };
    const handleshowRecentStores = (event) => {
        setShowRecentStores(event.target.checked);
    };
    const handleshowMyPurchases = (event) => {
        setShowMyPurchases(event.target.checked);
    };
    const handleShowAddNewPurchase = () => {
        setShowAddNewPurchase(true);
    };
    const handleHideAddNewPurchase = () => {
        setShowAddNewPurchase(false);
    };
    
    // calculating total spend and resolving null values as 0 so not to break total sum
    const reducedTotalSpend = newPurchase.reduce((a, b) => a + (!b.totalSpend ? 0 : b.totalSpend), 0);

    // setting an event handler to add the incoming data to an object in the newPurchase array
    const handleSubmit = (event) => {
        event.preventDefault();
        setnewPurchase([
            ...newPurchase,
            {
                day: newPurchaseDate, value: parsedNewTotalSpend, id: newPurchaseType, label: newPurchaseType, totalSpend: parsedNewTotalSpend, storeName: newStoreName, purchaseDate: newPurchaseDate, purchaseType: newPurchaseType,
            },
        ]);
    };

    const { container } = props;

    // const defaultProps = {
    //     options: StoreNamesList,
    //     getOptionLabel: (option) => option.title,
    // };

    // Checkboxes for hiding components (and content for drawer)
    const drawer = (
        <div className={classes.root}>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Checkbox
                            color="primary"
                            checked={showPurchaseType}
                            onChange={handleshowPurchaseType}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="What is your average purchase?" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Checkbox
                            color="primary"
                            checked={showRecentStores}
                            onChange={handleshowRecentStores}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Where have you recently shopped?" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Checkbox
                            color="primary"
                            checked={showMyPurchases}
                            onChange={handleshowMyPurchases}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="What have you bought?" />
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* Top Nav Bar */}
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
                        .ALPHA
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* implementing hidable drawer */}
            <nav className={classes.drawer} aria-label="mailbox folders">
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
                {/* setting up the main grid */}
                <Grid container>
                    {/* rendering new purchase card */}
                    <Grid item xs={12}>
                        <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                            <Paper>
                                <Box width="100%" alignSelf="flex-start" p={2}>

                                    <Button variant="contained" color="primary" onClick={handleShowAddNewPurchase}>
                                        <Typography>
                                            Add New purchase
                                        </Typography>
                                    </Button>
                                </Box>
                                <Box width="100%">
                                    {showAddNewPurchase ? (
                                        <Grid item xs={6}>
                                            <Box p={2}>
                                                <form
                                                    className={classes.textFields}
                                                    noValidate
                                                    autoComplete="off"
                                                    onSubmit={handleSubmit}
                                                    
                                                >
                                                    <TextField
                                                        required
                                                        label="Store Name"
                                                        placeholder="What store did you shop at?"
                                                        fullWidth
                                                        value={newStoreName}
                                                        onChange={(e) => setStoreName(e.target.value)}
                                                    />

                                                    {/* <Autocomplete
                                                        {...defaultProps}
                                                        options={StoreNamesList}
                                                        getOptionLabel={(option) => option.store}
                                                        onChange={(e) => setStoreName(e.target.value)}
                                                        renderInput={(params) =>
                                                            <TextField {...params} label="Shop Name" />}
                                                    /> */}
                                                    {/* <AutoFill /> */}
                                                    <TextField
                                                        label="Amount"
                                                        placeholder="How much did you spend?"
                                                        required
                                                        fullWidth
                                                        value={newTotalSpend}
                                                        onChange={(e) => settotalSpend(e.target.value)}
                                                        type="Number"
                                                        inputProps={{ min: 0 }}
                                                        startAdornment={<InputAdornment position="start">£</InputAdornment>}
                                                    />
                                                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                                                    <KeyboardDatePicker
                                                        required
                                                        disableToolbar
                                                        fullWidth
                                                        placeholder="What type of goods did you buy?"
                                                        variant="inline"
                                                        format="dd/MM/yyyy"
                                                        margin="normal"
                                                        id="date-picker-inline"
                                                        label="Purchase Date"
                                                        value={newSelectedDate}
                                                        onChange={handleDateChange}
                                                    />
                                                    {/* </MuiPickersUtilsProvider> */}
                                                    <TextField required label="Type" fullWidth value={newPurchaseType} onChange={(e) => setPurchaseType(e.target.value)} />
                                                    <Button variant="contained" color="primary" onClick={handleSubmit}>
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
                    {/* rendering new total spend card */}
                    <Grid item xs={12}>
                        <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                            <Paper>
                                <Box width="100%" alignSelf="center" py={1}>
                                    <Typography>
                                        Total Spend
                                    </Typography>
                                    <Typography color="primary" fontWeight="fontWeightBold">
                                        {reducedTotalSpend}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    {/* rendering purchase type card if checkbox is true */}
                    {showPurchaseType ? (
                        <Grid item xs={6}>
                            <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                                <Paper>
                                    <Box width="100%" alignSelf="center" py={1}>
                                        <Typography>
                                            Purchase Type
                                        </Typography>
                                        <div style={{ height: '35vw' }}>
                                            <ResponsivePie
                                                data={newPurchase}
                                                margin={{
                                                    top: 40, right: 80, bottom: 80, left: 80,
                                                }}
                                                innerRadius={0.5}
                                                padAngle={0.7}
                                                cornerRadius={3}
                                                colors={{ scheme: 'nivo' }}
                                                borderWidth={1}
                                                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                                                radialLabelsSkipAngle={10}
                                                radialLabelsTextXOffset={6}
                                                radialLabelsTextColor="#333333"
                                                radialLabelsLinkOffset={0}
                                                radialLabelsLinkDiagonalLength={16}
                                                radialLabelsLinkHorizontalLength={24}
                                                radialLabelsLinkStrokeWidth={1}
                                                radialLabelsLinkColor={{ from: 'color' }}
                                                slicesLabelsSkipAngle={10}
                                                slicesLabelsTextColor="#333333"
                                                animate
                                                motionStiffness={90}
                                                motionDamping={15}
                                            />
                                        </div>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    )
                        : null}
                    {/* rendering purchase type card if checkbox is true */}
                    {showRecentStores ? (
                        <Grid item xs={6}>
                            <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                                <Paper>
                                    <Box width="100%" alignSelf="center" py={1}>
                                        <Typography>
                                            Recent Stores
                                        </Typography>
                                        <div style={{ height: '35vw' }}>
                                            <TableContainer>
                                                <Table className={classes.table} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Store</TableCell>
                                                            <TableCell>Total</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {newPurchase.map((row) => (
                                                            <TableRow key={row.name}>
                                                                <TableCell>
                                                                    {row.storeName}
                                                                </TableCell>
                                                                <TableCell>
                                                                    £
                                                                    {row.totalSpend}
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    )
                        : null}
                    {/* rendering list of my purchases card if checkbox is true */}
                    {showMyPurchases ? (
                        <Grid item xs={12}>
                            <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                                <Paper>
                                    <Box width="100%" alignSelf="center" p={2}>
                                        <Typography>
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
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {newPurchase.map((row) => (
                                                        <TableRow key={row.name}>
                                                            <TableCell>
                                                                {row.totalSpend}
                                                            </TableCell>
                                                            <TableCell>{row.storeName}</TableCell>
                                                            <TableCell>{row.purchaseDate}</TableCell>
                                                            <TableCell>{row.purchaseType}</TableCell>
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
