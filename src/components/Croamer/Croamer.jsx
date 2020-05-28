/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { Slider, Paper, LinearProgress, Typography, Card, Box, Grid } from '@material-ui/core';
import {
    FlexibleWidthXYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    ChartLabel,
    LineSeries,
} from 'react-vis';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../../../node_modules/react-vis/dist/style.css';

export default function ButtonAppBar() {
    const [loading, setLoading] = useState(true);
    const [casesRange, setCasesRange] = React.useState(60000);
    const handleChangeCasesRange = (event, newValue) => {
        setCasesRange(newValue);
    };


    // const firstDate =  selectedDate.getMonth()

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [startDate, setStartDate] = React.useState(new Date('02/01/2020'));

    const unixStartDate = startDate.getTime();
    const unixCurrentDate = selectedDate.getTime();

    const [value, setValue] = React.useState([unixStartDate, unixCurrentDate]);
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
            const xy = json.records.map(e => ({ x: new Date(`${e.month}/${e.day}/${e.year}`), y: e.cases, size: e.deaths, location: e.countriesAndTerritories }));
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
                                            <Box display="flex">
                                                <Box pb={10} pt={5} pl={2}>
                                                    <Slider
                                                        value={casesRange}
                                                        onChange={handleChangeCasesRange}
                                                        valueLabelDisplay="auto"
                                                        max={60000}
                                                        orientation="vertical"
                                                    />
                                                </Box>
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
                                                        tickTotal={7}
                                                        tickLabelAngle={-90}
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
                                                    <LineSeries color="green" data={covidData.filter(d => d.location === 'Italy')} />
                                                    <LineSeries color="blue" data={covidData.filter(d => d.location === 'United_Kingdom')} />
                                                    <LineSeries color="red" data={covidData.filter(d => d.location === 'China')} />
                                                    <LineSeries color="orange" data={covidData.filter(d => d.location === 'United_States_of_America')} />
                                                </FlexibleWidthXYPlot>
                                            </Box>
                                            <Box pl={17} pr={5} pb={3} display="flex">
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
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} paper>
                                        <Paper>
                                            <Box p={2}>
                                                <Typography >
                                                    <span style={{ color: 'blue' }}> United Kingdom </span> |
                                                    <span style={{ color: 'orange' }}> United States  </span> |
                                                    <span style={{ color: 'green' }}> Italy </span> |
                                                    <span style={{ color: 'red' }}> China </span> |
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    )}
        </div>
    )
}
