/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { Slider, Paper, LinearProgress, Typography, Box, Grid, Button } from '@material-ui/core';
import {
    FlexibleWidthXYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    ChartLabel,
    LineSeries,
    DiscreteColorLegend,
    VerticalBarSeries,
    AreaSeries
} from 'react-vis';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../../../node_modules/react-vis/dist/style.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getCode, getName } from 'country-list';
// import { useFetch } from './hooks';

const isoPairs = { "BD": "BGD", "BE": "BEL", "BF": "BFA", "BG": "BGR", "BA": "BIH", "BB": "BRB", "WF": "WLF", "BL": "BLM", "BM": "BMU", "BN": "BRN", "BO": "BOL", "BH": "BHR", "BI": "BDI", "BJ": "BEN", "BT": "BTN", "JM": "JAM", "BV": "BVT", "BW": "BWA", "WS": "WSM", "BQ": "BES", "BR": "BRA", "BS": "BHS", "JE": "JEY", "BY": "BLR", "BZ": "BLZ", "RU": "RUS", "RW": "RWA", "RS": "SRB", "TL": "TLS", "RE": "REU", "TM": "TKM", "TJ": "TJK", "RO": "ROU", "TK": "TKL", "GW": "GNB", "GU": "GUM", "GT": "GTM", "GS": "SGS", "GR": "GRC", "GQ": "GNQ", "GP": "GLP", "JP": "JPN", "GY": "GUY", "GG": "GGY", "GF": "GUF", "GE": "GEO", "GD": "GRD", "GB": "GBR", "GA": "GAB", "SV": "SLV", "GN": "GIN", "GM": "GMB", "GL": "GRL", "GI": "GIB", "GH": "GHA", "OM": "OMN", "TN": "TUN", "JO": "JOR", "HR": "HRV", "HT": "HTI", "HU": "HUN", "HK": "HKG", "HN": "HND", "HM": "HMD", "VE": "VEN", "PR": "PRI", "PS": "PSE", "PW": "PLW", "PT": "PRT", "SJ": "SJM", "PY": "PRY", "IQ": "IRQ", "PA": "PAN", "PF": "PYF", "PG": "PNG", "PE": "PER", "PK": "PAK", "PH": "PHL", "PN": "PCN", "PL": "POL", "PM": "SPM", "ZM": "ZMB", "EH": "ESH", "EE": "EST", "EG": "EGY", "ZA": "ZAF", "EC": "ECU", "IT": "ITA", "VN": "VNM", "SB": "SLB", "ET": "ETH", "SO": "SOM", "ZW": "ZWE", "SA": "SAU", "ES": "ESP", "ER": "ERI", "ME": "MNE", "MD": "MDA", "MG": "MDG", "MF": "MAF", "MA": "MAR", "MC": "MCO", "UZ": "UZB", "MM": "MMR", "ML": "MLI", "MO": "MAC", "MN": "MNG", "MH": "MHL", "MK": "MKD", "MU": "MUS", "MT": "MLT", "MW": "MWI", "MV": "MDV", "MQ": "MTQ", "MP": "MNP", "MS": "MSR", "MR": "MRT", "IM": "IMN", "UG": "UGA", "TZ": "TZA", "MY": "MYS", "MX": "MEX", "IL": "ISR", "FR": "FRA", "IO": "IOT", "SH": "SHN", "FI": "FIN", "FJ": "FJI", "FK": "FLK", "FM": "FSM", "FO": "FRO", "NI": "NIC", "NL": "NLD", "NO": "NOR", "NA": "NAM", "VU": "VUT", "NC": "NCL", "NE": "NER", "NF": "NFK", "NG": "NGA", "NZ": "NZL", "NP": "NPL", "NR": "NRU", "NU": "NIU", "CK": "COK", "XK": "XKX", "CI": "CIV", "CH": "CHE", "CO": "COL", "CN": "CHN", "CM": "CMR", "CL": "CHL", "CC": "CCK", "CA": "CAN", "CG": "COG", "CF": "CAF", "CD": "COD", "CZ": "CZE", "CY": "CYP", "CX": "CXR", "CR": "CRI", "CW": "CUW", "CV": "CPV", "CU": "CUB", "SZ": "SWZ", "SY": "SYR", "SX": "SXM", "KG": "KGZ", "KE": "KEN", "SS": "SSD", "SR": "SUR", "KI": "KIR", "KH": "KHM", "KN": "KNA", "KM": "COM", "ST": "STP", "SK": "SVK", "KR": "KOR", "SI": "SVN", "KP": "PRK", "KW": "KWT", "SN": "SEN", "SM": "SMR", "SL": "SLE", "SC": "SYC", "KZ": "KAZ", "KY": "CYM", "SG": "SGP", "SE": "SWE", "SD": "SDN", "DO": "DOM", "DM": "DMA", "DJ": "DJI", "DK": "DNK", "VG": "VGB", "DE": "DEU", "YE": "YEM", "DZ": "DZA", "US": "USA", "UY": "URY", "YT": "MYT", "UM": "UMI", "LB": "LBN", "LC": "LCA", "LA": "LAO", "TV": "TUV", "TW": "TWN", "TT": "TTO", "TR": "TUR", "LK": "LKA", "LI": "LIE", "LV": "LVA", "TO": "TON", "LT": "LTU", "LU": "LUX", "LR": "LBR", "LS": "LSO", "TH": "THA", "TF": "ATF", "TG": "TGO", "TD": "TCD", "TC": "TCA", "LY": "LBY", "VA": "VAT", "VC": "VCT", "AE": "ARE", "AD": "AND", "AG": "ATG", "AF": "AFG", "AI": "AIA", "VI": "VIR", "IS": "ISL", "IR": "IRN", "AM": "ARM", "AL": "ALB", "AO": "AGO", "AQ": "ATA", "AS": "ASM", "AR": "ARG", "AU": "AUS", "AT": "AUT", "AW": "ABW", "IN": "IND", "AX": "ALA", "AZ": "AZE", "IE": "IRL", "ID": "IDN", "UA": "UKR", "QA": "QAT", "MZ": "MOZ" }

export default function ButtonAppBar() {

    console.log(getCode('United States of America')); // IS

    const [selectedLocation, setSelectedLocation] = useState();
    const [loading, setLoading] = useState(true);
    const [casesRange, setCasesRange] = React.useState(60000);
    const handleChangeCasesRange = (event, newValue) => {
        setCasesRange(newValue);
    };
    const [locationData, setLocationData] = useState([]);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [startDate, setStartDate] = React.useState(new Date('01/01/2020'));
    const unixStartDate = startDate.getTime();
    const unixCurrentDate = selectedDate.getTime();
    const [value, setValue] = React.useState([unixStartDate, unixCurrentDate]);
    const [caseData, setCaseData] = useState([]);
    const [deathData, setDeathData] = useState([]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const selectedStartDate = value[0];
    const selectedEndDate = value[value.length - 1];
    const useFetch = (url) => {
        const [data, setData] = useState([]);
        async function fetchUrl() {
            const response = await fetch(url);
            const json = await response.json();
            const xy = json.records.map(e => (
                { x: new Date(`${e.month}/${e.day}/${e.year}`), y: e.cases, location: e.countriesAndTerritories }));
            const locations = json.records.map(e => ({ location: e.countriesAndTerritories }));
            const casesToXY = json.records.map(e => ({ x: new Date(`${e.month}/${e.day}/${e.year}`), y: e.cases, location: e.countriesAndTerritories }));
            const deathsToXY = json.records.map(e => ({ x: new Date(`${e.month}/${e.day}/${e.year}`), y: e.deaths, location: e.countriesAndTerritories }));
            setCaseData(casesToXY);
            setDeathData(deathsToXY);
            setLocationData(locations);
            setData(xy);
            setLoading(false);
        }
        useEffect(() => {
            fetchUrl();
        }, []);

        return [data, loading];
    };
    const [covidData] = useFetch(
        "https://cors-anywhere.herokuapp.com/https://opendata.ecdc.europa.eu/covid19/casedistribution/json"
    )
    const uniq = new Set(locationData.map(e => JSON.stringify(e)));
    const uniqueLocations = Array.from(uniq).map(e => JSON.parse(e));
    const [newCountry, setNewCountry] = useState([]);

    const addCountryToGraph = (event) => {
        event.preventDefault();
        setNewCountry([
            ...newCountry,
            { selectedLocation }
        ]);
    };



    async function fetchUrl() {
        const response = await fetch('https://www.worldpop.org/rest/data/pop/wpgp?iso3=AUS');
        const json = await response.json();
        const casesToXY = json.records.map(e => ({ x: new Date(`${e.month}/${e.day}/${e.year}`), y: e.cases, location: e.countriesAndTerritories }));
        const deathsToXY = json.records.map(e => ({ x: new Date(`${e.month}/${e.day}/${e.year}`), y: e.deaths, location: e.countriesAndTerritories }));
        setCaseData(casesToXY);
        setDeathData(deathsToXY);

    }
    useEffect(() => {
        fetchUrl();
    }, []);

    return (
        <div>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            My Covid Tracker
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            {
                loading || !covidData
                    ? (
                        <div>
                            <LinearProgress />
                            <Typography variant="h5" align="center" color="primary">
                                loading new records
                            </Typography>
                        </div>
                    )
                    : (
                        <div>

                            <Box p={5}>
                                <Grid container
                                    spacing={1}
                                >
                                    <Grid item xs={12}>
                                        <Paper>
                                            <Box p={2} >
                                                My Covid Traker runs on live data sourced by the
                                                <a href="opendata.ecdc.europa.eu/covid19"> ECDC </a>
                                                and is expecting new features soon!
                                            </Box>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper>
                                            {
                                                newCountry.length === 0 ?
                                                    (
                                                        <Box
                                                            width="100%"
                                                            p={2}
                                                            fontStyle="oblique"
                                                            align="center"
                                                        >
                                                            {/* Please  */}
                                                            <Typography color="primary"> Select Region </Typography>
                                                        and press
                                                            <Typography color="primary"> "ADD" </Typography>
                                                        to view data...
                                                            <br />
                                                            <ArrowDownwardIcon color="primary" />
                                                        </Box>

                                                    )
                                                    : (
                                                        <>
                                                            <Box display="flex">
                                                                <Box pb={10} pt={5} pl={2} style={{ position: 'relative' }}>
                                                                    <Slider
                                                                        value={casesRange}
                                                                        onChange={handleChangeCasesRange}
                                                                        valueLabelDisplay="auto"
                                                                        max={60000}
                                                                        orientation="vertical"
                                                                    />
                                                                </Box>

                                                                <div style={{ width: '100%', position: 'relative' }}>


                                                                    <div style={{ width: '100%' }}>


                                                                        <FlexibleWidthXYPlot

                                                                            height={500}
                                                                            yDomain={[0, casesRange]}
                                                                            xDomain={[selectedStartDate, selectedEndDate]}
                                                                            margin={{ bottom: 80, left: 55 }}
                                                                        >
                                                                            <VerticalGridLines />
                                                                            <HorizontalGridLines style={{ strokeWidth: '0.5', stroke: 'gray' }} />
                                                                            <YAxis />
                                                                            <XAxis
                                                                                attr="x"
                                                                                attrAxis="y"
                                                                                orientation="bottom"
                                                                                tickFormat={function tickFormat(d) { return new Date(d).toLocaleDateString() }}
                                                                                tickTotal={8}
                                                                                tickLabelAngle={-45}
                                                                            />
                                                                            <ChartLabel
                                                                                text="Days"
                                                                                includeMargin={false}
                                                                                xPercent={0.01}
                                                                                yPercent={1.07}
                                                                            />
                                                                            <ChartLabel
                                                                                text="Cases"
                                                                                includeMargin={false}
                                                                                xPercent={-0.03}
                                                                                yPercent={0.06}
                                                                            />
                                                                            {/* <LineSeries color="green" data={covidData.filter(d => d.location === selectedLocation)} />
                                                <LineSeries color="blue" data={covidData.filter(d => d.location === 'United_Kingdom')} />
                                                <LineSeries color="red" data={covidData.filter(d => d.location === 'China')} />
                                                <LineSeries color="orange" data={covidData.filter(d => d.location === 'United_States_of_America')} /> */}
                                                                            {
                                                                                newCountry.map(e => (
                                                                                    <LineSeries data={caseData.filter(d => d.location === e.selectedLocation.location)} />
                                                                                ))
                                                                            }
                                                                            {/* {
                                                                newCountry.map(e => (
                                                                    <LineSeries color="blue" data={deathData.filter(d => d.location === e.selectedLocation.location)} />
                                                                ))
                                                            } */}

                                                                        </FlexibleWidthXYPlot>
                                                                    </div>



                                                                    <div style={{ position: 'absolute', top: 0, width: '100%' }}>


                                                                        <FlexibleWidthXYPlot
                                                                            height={500}
                                                                            yDomain={[0, casesRange]}
                                                                            xDomain={[selectedStartDate, selectedEndDate]}
                                                                            margin={{ bottom: 80, left: 55 }}

                                                                        >

                                                                            {
                                                                                newCountry.map(e => (
                                                                                    <LineSeries strokeDasharray={[5, 5]} data={deathData.filter(d => d.location === e.selectedLocation.location)} />
                                                                                ))
                                                                            }

                                                                        </FlexibleWidthXYPlot>
                                                                    </div>
                                                                </div>



                                                            </Box>

                                                            <Box pl={11} pr={5} pb={3} display="flex">
                                                                <Slider
                                                                    value={value}
                                                                    onChange={handleChange}
                                                                    valueLabelDisplay="auto"
                                                                    aria-labelledby="range-slider"
                                                                    min={unixStartDate}
                                                                    max={unixCurrentDate}
                                                                    valueLabelDisplay="off"
                                                                />
                                                            </Box>
                                                        </>
                                                    )}
                                            <Box display="flex" p={2}>
                                                <Autocomplete
                                                    id="combo-box-demo"
                                                    value={selectedLocation}
                                                    // onChange={(e) => setSelectedLocation(e.target.value)}
                                                    onChange={(event, newValue) => {
                                                        setSelectedLocation(newValue);
                                                    }}
                                                    options={uniqueLocations}
                                                    getOptionLabel={(option) => option.location}
                                                    fullWidth={true}
                                                    renderInput={(params) => <TextField {...params} fullWidth={true} label="Select Region" variant="outlined" />}

                                                />
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    onClick={addCountryToGraph}
                                                >
                                                    add
                                                </Button>

                                            </Box>

                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} paper>
                                        <Paper>
                                            <Box p={2}>
                                            <Typography variant="h6">Legend:</Typography>
                                                <Box display="flex" >
                                                    <Box pr={1} >
                                                        <Box style={{ borderBottom: '2px solid black'}} />
                                                        <Typography variant="body2">Cases</Typography>

                                                    </Box>
                                                    <Box pr={1}>
                                                    <Box pr={2} style={{ borderBottom: '2px dotted black'}} />
                                                    <Typography variant="body2">Fatalities</Typography>
                                                    </Box>
                                      
                                                </Box>
                                                <DiscreteColorLegend
                                                    orientation="horizontal"
                                                    items={newCountry.map(e => ([e.selectedLocation.location]))}
                                                />
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    )}
        </div>
    );
}
