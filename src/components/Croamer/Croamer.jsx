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
} from 'react-vis';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import '../../../node_modules/react-vis/dist/style.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getCode } from 'country-list';
import NavBar from '../NavBar/NavBar';
// import { useFetch } from './hooks';

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
                <NavBar label="Covid Tracker" />
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
                                                                            {
                                                                                newCountry.map(e => (
                                                                                    <LineSeries data={caseData.filter(d => d.location === e.selectedLocation.location)} />
                                                                                ))
                                                                            }
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
