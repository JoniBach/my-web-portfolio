/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import { LinearProgress, Paper, TableContainer, Table, TableRow, TableBody, TableCell, TableHead, Typography, Button, TextField } from '@material-ui/core';

class Croamer extends React.Component {
    state = {
        loading: true,
        record: null,
        countryName: null,

    };
    async componentDidMount() {
        const covidData = 'https://opendata.ecdc.europa.eu/covid19/casedistribution/json';
        const res = await fetch(covidData);
        const data = await res.json();
        this.setState({ record: data.records, loading: false });

    };

    filterCountry = () => {
        const country = this.state.record.filter(d => d.countriesAndTerritories === 'United_Kingdom');
        console.log(country)
    }

    setCountryName = (countryName) => {
        this.setState({ countryName });
        console.log(countryName)
    }


    render() {

        return (
            <div>
                {this.state.loading || !this.state.record
                    ?
                    // <div>Loading new records...</div> 

                    <div><LinearProgress />
                        <Typography variant="h5" align="center" color="primary">
                            loading new records
                </Typography></div>

                    :
                    <div>
                        <TableContainer component={Paper}>
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
                        </TableContainer>

                        {/* <div>Location: {data.countriesAndTerritories}, Day: {data.dateRep}, Cases: {data.cases}, Deaths: {data.deaths}</div> */}


                    </div>
                }


            </div>
        );
    }
}
export default Croamer;