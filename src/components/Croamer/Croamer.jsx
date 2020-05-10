/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import { LinearProgress, Paper, TableContainer, Table, TableRow, TableBody, TableCell, TableHead, Typography, Button, TextField, Card, Box, Grid } from '@material-ui/core';
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import {
    XYPlot,
    FlexibleWidthXYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    MarkSeries,
    ChartLabel,
    MarkSeriesCanvas,
    Hint,
    DiscreteColorLegend,
} from 'react-vis';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';




class Croamer extends React.Component {
    state = {
        loading: true,
        record: null,
        countryName: null,
        xydata: null,

    };
    async componentDidMount() {
        const covidData = 'https://cors-anywhere.herokuapp.com/https://opendata.ecdc.europa.eu/covid19/casedistribution/json';
        const res = await fetch(covidData);
        const data = await res.json();
        const dataPairs = data.records.map(e => ({ x: new Date(e.year, e.month, e.day), y: e.cases, size: e.deaths, location: e.countriesAndTerritories }))
        // location: e.countriesAndTerritories,

        console.log(dataPairs)
        this.setState({ record: dataPairs, loading: false });

    };

    filterCountry = () => {
        const country = this.state.record.filter(d => d.countriesAndTerritories === 'United_States_of_America');
        console.log(country)
    }

    setCountryName = (countryName) => {
        this.setState({ countryName });
        console.log(countryName)
    }


    render() {

        return (
            <div>
                <div >
                    <AppBar position="static">
                        <Toolbar>
                            {/* <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon />
                            </IconButton> */}
                            <Typography variant="h6" noWrap>
                                My Covid Tracker
          </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                {this.state.loading || !this.state.record
                    ?
                    <div><LinearProgress />
                        <Typography variant="h5" align="center" color="primary">
                            loading new records
                </Typography></div>

                    :
                    <div>
                        {/* <TableContainer component={Paper}>
                            <Table aria-label="Covid Table" size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Location</TableCell>
                                        <TableCell align="right">Day</TableCell>
                                        <TableCell align="right">New Cases</TableCell>
                                        <TableCell align="right">New Deaths</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.record.filter(d => d.countriesAndTerritories === 'United_Kingdom').map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.countriesAndTerritories}
                                            </TableCell>
                                            <TableCell align="right">{row.dateRep}</TableCell>
                                            <TableCell align="right">{row.cases}</TableCell>
                                            <TableCell align="right">{row.deaths}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer> */}
                        <Box p={5}>
                        <Grid container
                        spacing={1}
                        // style={{ overflowX: 'auto', }}
                        >
                            
                            <Grid item xs={12}>
                                <Card>
                                    <Box p={2}>
                                    My covid traker runs on live data sourced by the
                                            <a href="opendata.ecdc.europa.eu/covid19"> ECDC </a>
                                            and is expecting new features soon!
                                    </Box>
                     
                                </Card>
                          
                            </Grid>
                            <Grid item xs={12}>
                                
                                    <Card>
                                        <FlexibleWidthXYPlot
                                            style={{ paddingLeft: 20 }}
                                            height={500}

                                        >
                                            <VerticalGridLines />
                                            <HorizontalGridLines style={{ strokeWidth: '0.5', stroke: 'gray' }} />
                                            <YAxis />
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
                                            <MarkSeries color="green" data={this.state.record.filter(d => d.location === 'Italy')} />
                                            <MarkSeries color="blue" data={this.state.record.filter(d => d.location === 'United_Kingdom')} />
                                            <MarkSeries color="red" data={this.state.record.filter(d => d.location === 'China')} />
                                            <MarkSeries color="orange" data={this.state.record.filter(d => d.location === 'United_States_of_America')} />
                                        </FlexibleWidthXYPlot>
                                    </Card>

                            </Grid>
                            <Grid item xs={12} paper>
                                <Card>
                                    <Box p={2}>
                                    <Typography >

<span style={{ color: 'blue' }}> United Kingdom </span> |
<span style={{ color: 'orange' }}> United States  </span> |
<span style={{ color: 'green' }}> Italy </span> |
<span style={{ color: 'red' }}> China </span> |
<br />
<span> Size: Fatalities </span>
<br />



</Typography>
                                    </Box>
                               
                                </Card>
                           
                            </Grid>
                        </Grid>
                        </Box>



                        {/* <div>Location: {data.countriesAndTerritories}, Day: {data.dateRep}, Cases: {data.cases}, Deaths: {data.deaths}</div> */}


                    </div>
                }


            </div>
        );
    }
}
export default Croamer;