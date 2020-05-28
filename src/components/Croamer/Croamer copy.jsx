/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
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
import { ResponsiveLine } from '@nivo/line';

// import { useFetch } from './hooks';

export default function ButtonAppBar() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const useFetch = (url) => {
        const [record, setRecord] = useState([]);
        async function fetchUrl() {
            const response = await fetch(url);
            const json = await response.json();
            const data = json.records
                .map((e) => ({
                    x: `${e.year}-${e.month}-${e.day}`,
                    y: e.cases,
                    size: e.deaths,
                    location: e.countriesAndTerritories
                }));
            const formattedData = {
                id:0,
                data,
              };
            setData(formattedData);
            setLoading(false);
            // console.log('newdata',formattedData);
        }
        useEffect(() => {
            fetchUrl();
        }, []);

        return [data, loading];
    };
   
    


    const [covidData] = useFetch(
        "https://cors-anywhere.herokuapp.com/https://opendata.ecdc.europa.eu/covid19/casedistribution/json"
    )

    // console.log('new data', covidData.filter(d => d.location === 'Italy'));
    // const italy = covidData.filter(d => d.location === 'Italy');

    // console.log('italy', italy)

    console.log('covid data', {covidData});

   const [chartData, setChartData] = useState([
    {
      id: 0,
      
      data: [
        { x: "2020-04-24", y: 0.8063946735624102 },
      ]
    }
  ]);

  console.log('dummy data',chartData)

    return (
        //         <div>
        //         {/* {
        //              this.countries.map((data) => {
        //                  <div>
        //              <Typography>{data.country}</Typography>

        //                  </div>
        //              })
        //          } */}
        //      <div >

        //          <AppBar position="static">
        //              <Toolbar>
        //                  <Typography variant="h6" noWrap>
        //                      My Covid Tracker
        //                  </Typography>
        //              </Toolbar>
        //          </AppBar>
        //      </div>
        //      {
        //      loading || !covidData
        //          ?
        //          <div>
        //              <LinearProgress />
        //              <Typography variant="h5" align="center" color="primary">
        //                  loading new records
        //              </Typography>
        //          </div>
        //          :
        //          <div>
        //              <Box p={5}>
        //                  <Grid container
        //                      spacing={1}
        //                  >
        //                      <Grid item xs={12}>
        //                          <Card>
        //                              <Box p={2}>
        //                                  My Covid Traker runs on live data sourced by the
        //                                  <a href="opendata.ecdc.europa.eu/covid19"> ECDC </a>
        //                                  and is expecting new features soon!
        //                          </Box>
        //                          </Card>
        //                      </Grid>
        //                      <Grid item xs={12}>
        //                          <Card>
        //                              <FlexibleWidthXYPlot
        //                                  style={{ paddingLeft: 20 }}
        //                                  height={500}
        //                              >
        //                                  <VerticalGridLines />
        //                                  <HorizontalGridLines style={{ strokeWidth: '0.5', stroke: 'gray' }} />
        //                                  <YAxis />
        //                                  <ChartLabel
        //                                      text="Days"
        //                                      includeMargin={false}
        //                                      xPercent={0.01}
        //                                      yPercent={1.07}
        //                                  />
        //                                  <ChartLabel
        //                                      text="Cases"
        //                                      includeMargin={false}
        //                                      xPercent={-0.03}
        //                                      yPercent={0.06}
        //                                  />
        //                                  <LineSeries color="green" data={covidData.filter(d => d.location === 'Italy')} />
        //                                  <LineSeries color="blue" data={covidData.filter(d => d.location === 'United_Kingdom')} />
        //                                  <LineSeries color="red" data={covidData.filter(d => d.location === 'China')} />
        //                                  <LineSeries color="orange" data={covidData.filter(d => d.location === 'United_States_of_America')} />
        //                              </FlexibleWidthXYPlot>
        //                          </Card>
        //                      </Grid>
        //                      <Grid item xs={12} paper>
        //                          <Card>
        //                              <Box p={2}>
        //                                  <Typography >
        //                                      <span style={{ color: 'blue' }}> United Kingdom </span> |
        //                                      <span style={{ color: 'orange' }}> United States  </span> |
        //                                      <span style={{ color: 'green' }}> Italy </span> |
        //                                      <span style={{ color: 'red' }}> China </span> |
        //                                      <br />
        //                                      <span> Size: Fatalities </span>
        //                                      <br />
        //                                  </Typography>
        //                              </Box>
        //                          </Card>
        //                      </Grid>
        //                  </Grid>
        //              </Box>
        //          </div>
        //      }
        //  </div>
        <div style={{ height: 500 }}>
     
                    <ResponsiveLine
                    data={covidData}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        xScale={{
                            type: "time",
                            format: "%Y-%m-%d"
                          }}
                          xFormat="time:%Y-%m-%d"
                          yScale={{
                            type: "linear",
                            min: "auto",
                            max: "auto",
                            stacked: false,
                            reverse: false
                          }}
                          axisTop={null}
                          axisRight={null}
                          axisLeft={{
                            orient: "left",
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: "count",
                            legendOffset: -40,
                            legendPosition: "middle"
                          }}
                          axisBottom={{
                            format: "%b %d",
                            //tickValues: "every 2 days",
                            // tickRotation: -90,
                            legend: "time scale",
                            legendOffset: -12
                          }}
                          colors={{ scheme: "nivo" }}
                          pointSize={10}
                          pointColor={{ theme: "background" }}
                          pointBorderWidth={2}
                          pointBorderColor={{ from: "serieColor" }}
                          pointLabel="y"
                          pointLabelYOffset={-12}
                          useMesh={true}
                          legends={[
                            {
                              anchor: "bottom-right",
                              direction: "column",
                              justify: false,
                              translateX: 100,
                              translateY: 0,
                              itemsSpacing: 0,
                              itemDirection: "left-to-right",
                              itemWidth: 80,
                              itemHeight: 20,
                              itemOpacity: 0.75,
                              symbolSize: 12,
                              symbolShape: "circle",
                              symbolBorderColor: "rgba(0, 0, 0, .5)",
                              effects: [
                                {
                                  on: "hover",
                                  style: {
                                    itemBackground: "rgba(0, 0, 0, .03)",
                                    itemOpacity: 1
                                  }
                                }
                              ]
                            }
                          ]}
                        />






        </div>
    )
}
