/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { Slider, LinearProgress, Paper, TableContainer, Table, TableRow, TableBody, TableCell, TableHead, Typography, Button, TextField, Card, Box, Grid } from '@material-ui/core';
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
    LineSeries,
} from 'react-vis';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import '../../../node_modules/react-vis/dist/style.css';

// import { useFetch } from './hooks';

export default function ButtonAppBar() {
    const [loading, setLoading] = useState(true);
    const [value, setValue] = React.useState(60000);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const useFetch = (url) => {
        const [data, setData] = useState([]);
        const [record, setRecord] = useState([]);
        async function fetchUrl() {
            const response = await fetch(url);
            const json = await response.json();
            const xy = json.records.map(e => ({ x: new Date(e.year, e.month, e.day), y: e.cases, size: e.deaths, location: e.countriesAndTerritories }));
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
    console.log('new data', covidData.filter(d => d.location === 'Italy'));
    return (
        <div>
        {/* {
             this.countries.map((data) => {
                 <div>
             <Typography>{data.country}</Typography>

                 </div>
             })
         } */}

         
     <div >
      
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
         ?
         <div>
             <LinearProgress />
             <Typography variant="h5" align="center" color="primary">
                 loading new records
             </Typography>
         </div>
         :
         <div>
             <Box p={5}>
                 <Grid container
                     spacing={1}
                 >
                     <Grid item xs={12}>
                         <Card>
                             <Box p={2}>
                                 My Covid Traker runs on live data sourced by the
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
                                 yDomain={[0, value]}
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
                                 <LineSeries color="green" data={covidData.filter(d => d.location === 'Italy')} />
                                 <LineSeries color="blue" data={covidData.filter(d => d.location === 'United_Kingdom')} />
                                 <LineSeries color="red" data={covidData.filter(d => d.location === 'China')} />
                                 <LineSeries color="orange" data={covidData.filter(d => d.location === 'United_States_of_America')} />
                             </FlexibleWidthXYPlot>
                             <Box px={10}>
                             <Slider 
                             value={value} 
                             onChange={handleChange} 


                            valueLabelDisplay="auto"
                            max={60000}

                             />
                             </Box>
                      

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
         </div>
     }
 </div>
    )
}
