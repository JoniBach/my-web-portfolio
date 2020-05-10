/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { motion } from "framer-motion"
import Buttons from '../LinkToButtonsComponent/LinkToButtonsComponent'


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
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    FormControl,
    InputLabel,
    Input,
    Select,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { ResponsivePie } from '@nivo/pie';
import useStyles from './ExpensesDashboard.style';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ResponsiveCalendar } from '@nivo/calendar'
// import AutoFill from '../AutoFill/AutoFill';
import MovingList from '../MovingList/MovingList';
import { Motion, spring } from 'react-motion';



export default function ExpensesDashboard(props) {
    const buttons = [
        { buttonText: 'About', buttonlink: '/', buttonColor: 'secondary' },
        { buttonText: 'Creative', buttonlink: '/creativeportfolio', buttonColor: 'secondary' },
        { buttonText: 'Web', buttonlink: '/webportfolio', buttonColor: 'secondary' },
        { buttonText: 'Covid', buttonlink: '/mycovidtracker', buttonColor: 'secondary' },
    ]
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
    const [showPurchaseHistory, setshowPurchaseHistory] = React.useState(true);
    const [showMyPurchases, setShowMyPurchases] = React.useState(true);
    const [showAddNewPurchase, setShowAddNewPurchase] = React.useState(false);
    // Setting state for changing drawer when a mobile user is detected
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // parsing is required to convert the string received into a number type
    const parsedNewTotalSpend = parseInt(newTotalSpend);

    // formatting the date to look more readable
    const formattedDate = newSelectedDate.getDate() + '/' + (newSelectedDate.getMonth() + 1) + '/' + newSelectedDate.getFullYear()
    const localDate = newSelectedDate.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
    // const formattedDateCalendar = newSelectedDate.getFullYear() + '-' + (newSelectedDate.getMonth() + 1) + '-' + newSelectedDate.getDate()
    // const month = newSelectedDate.getMonth() + 1;




    const parsedDate = localDate.split("/").join("-");



    // Assigning the output for the purchase date to a string
    const newPurchaseDate = (!formattedDate ? 'no date selected' : formattedDate.toString());

    // Assigning the output for the purchase date to a string


    // settinng event handlers to enable updating variable

    const handleDateChange = (date) => {
        setnewSelectedDate(date);
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleshowPurchaseType = (event) => {
        setShowPurchaseType(event.target.checked);
    };
    const handleshowPurchaseHistory = (event) => {
        setshowPurchaseHistory(event.target.checked);
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
            // order the purchases by value
            {
                day: parsedDate, value: parsedNewTotalSpend, id: newPurchaseType, label: newPurchaseType, totalSpend: parsedNewTotalSpend, storeName: newStoreName, purchaseDate: newPurchaseDate, purchaseType: newPurchaseType,
            },
        ]);
    };

    const { container } = props;

    // sorting functions for ordering the list views
    const sortTotalSpendLowHigh = newPurchase.sort(function (a, b) {
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        return 0;
    });
    const sortTotalSpendHighLow = newPurchase.sort(function (a, b) {
        if (a.value < b.value) return 1;
        if (a.value > b.value) return -1;
        return 0;
    });
    const sortDateNewOld = newPurchase.sort(function (a, b) {
        if (a.day < b.day) return 1;
        if (a.day > b.day) return -1;
        return 0;
    });
    const sortDateOldNew = newPurchase.sort(function (a, b) {
        if (a.day > b.day) return 1;
        if (a.day < b.day) return -1;
        return 0;
    });

    const purchaseTypeOptions = [
        // { typeOption: null },
        { typeOption: 'Other' },
        { typeOption: 'Groceries' },
        { typeOption: 'Entertainment' },
        { typeOption: 'Appliances' },
        { typeOption: 'Household' },
        { typeOption: 'Personal' },
        { typeOption: 'Groceries' },
        { typeOption: 'Electronics' },


    ];
    function goBack() {
        window.history.back();
    }


    const drawer = (
        <div className={classes.root}>

            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem>
                    <Button variant="outlined" onClick={goBack} fullWidth={true} >Return</Button>
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
                    <ListItemText primary="How much have you spent?" />
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <Checkbox
                            color="primary"
                            checked={showPurchaseHistory}
                            onChange={handleshowPurchaseHistory}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="What type of stores do you shop at?" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Checkbox
                            color="primary"
                            checked={showPurchaseType}
                            onChange={handleshowPurchaseType}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </ListItemIcon>
                    <ListItemText primary="See your purchase history" />
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


                                                    <Input
                                                        fullWidth
                                                        placeholder="How much did you spend?"
                                                        type="Number"
                                                        value={newTotalSpend}
                                                        onChange={(e) => settotalSpend(e.target.value)}
                                                        startAdornment={<InputAdornment position="start">£</InputAdornment>}
                                                    />
                                                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                                                    <KeyboardDatePicker
                                                        disableToolbar
                                                        fullWidth
                                                        variant="inline"
                                                        format="dd/MM/yyyy"
                                                        margin="normal"
                                                        id="date-picker-inline"
                                                        label="Purchase Date"
                                                        value={newSelectedDate}
                                                        onChange={handleDateChange}
                                                    // onChange={(e) => handleDateChange(e.target.value)}
                                                    />
                                                    <FormControl fullWidth className={classes.formControl}>
                                                        <InputLabel>Purchase Type</InputLabel>
                                                        <Select
                                                            native
                                                            value={newPurchaseType}
                                                            onChange={(e) => setPurchaseType(e.target.value)}
                                                            inputProps={{
                                                                name: 'Purchase Type',
                                                            }}
                                                        >
                                                            {
                                                                purchaseTypeOptions.map((options) => (
                                                                    <option>{options.typeOption}</option>
                                                                ))
                                                            }
                                                        </Select>
                                                    </FormControl>
                                                    {/* </MuiPickersUtilsProvider> */}
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


                    {showMyPurchases ? (
                        <Grid item xs={12}>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >

                                <Box p={2}>

                                    <ExpansionPanel>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box width="100%" align="center" justifyContent="center" alignContent="center">
                                                <Box width="100%" alignSelf="center" py={1} variant="h5">
                                                    <Typography gutterBottom>
                                                        Total Spend
                                                </Typography>
                                                    <Typography color="primary" variant="h4">

                                                        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(reducedTotalSpend) }}>
                                                            {(value) => <Typography color="primary" variant="h4">£{Math.round((value.x + Number.EPSILON) * 100) / 100}</Typography>}

                                                        </Motion>
                                                    </Typography>

                                                    <Box fontWeight="fontWeightLight" fontStyle="oblique">in {newPurchase.length} purchases</Box>

                                                </Box>
                                            </Box>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
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
                                                        {sortDateNewOld.map((row) => (
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
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>

                                </Box>
                            </motion.div>

                        </Grid>
                    )
                        : null}
                    {/* rendering purchase type card if checkbox is true */}
                    {showPurchaseType ? (
                        <Grid item xs={12}>
                            <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                                <Paper>
                                    <Box width="100%" alignSelf="center" py={1} overflow="auto">
                                        <Typography>
                                            Purchase Type
                                        </Typography>
                                        <div style={{ height: '300px' }}>
                                            <ResponsivePie
                                                data={newPurchase}
                                                margin={{
                                                    top: 20, right: 20, bottom: 20, left: 20,
                                                }}
                                                innerRadius={0.5}
                                                padAngle={0.7}
                                                cornerRadius={3}
                                                colors={{ scheme: 'nivo' }}
                                                borderWidth={1}
                                                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                                                enableRadialLabels={false}
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
                                                sliceLabel="id"
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
                    {showPurchaseHistory ? (
                        <Grid item xs={12}>
                            <Box p={2} width="100%" align="center" justifyContent="center" alignContent="center">
                                <Paper>
                                    <Box width="100%" alignSelf="center" py={1} overflow="auto">
                                        <Typography>
                                            Purchase History
                                        </Typography>
                                        <div style={{ height: '300px' }}>
                                            <ResponsiveCalendar
                                                data={newPurchase}
                                                from="2020-04-01"
                                                to="2020-04-30"
                                                emptyColor="#eeeeee"
                                                colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                                                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                                                yearSpacing={40}
                                                monthBorderColor="#ffffff"
                                                dayBorderWidth={2}
                                                dayBorderColor="#ffffff"
                                                legends={[
                                                    {
                                                        anchor: 'bottom-right',
                                                        direction: 'row',
                                                        translateY: 36,
                                                        itemCount: 4,
                                                        itemWidth: 42,
                                                        itemHeight: 36,
                                                        itemsSpacing: 14,
                                                        itemDirection: 'right-to-left',
                                                    },
                                                ]}
                                            />
                                        </div>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    )
                        : null}
                    {/* <Grid item xs={12}>
                            <MovingList/>
                        </Grid> */}
                </Grid>
            </main>
        </div>
    );
}
