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
} from 'react-vis';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../../../node_modules/react-vis/dist/style.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ButtonAppBar() {
    const [selectedLocation, setSelectedLocation] = useState();
    const [loading, setLoading] = useState(true);
    const [casesRange, setCasesRange] = React.useState(60000);
    const handleChangeCasesRange = (event, newValue) => {
        setCasesRange(newValue);
    };
    const [locationData, setLocationData] = useState([]);
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
            const locations = json.records.map(e => ({ location: e.countriesAndTerritories }));
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
            {selectedLocation}
        ]);
    };

    console.log(newCountry);


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
                                                    <LineSeries color="green" data={covidData.filter(d => d.location === selectedLocation)} />
                                                    <LineSeries color="blue" data={covidData.filter(d => d.location === 'United_Kingdom')} />
                                                    <LineSeries color="red" data={covidData.filter(d => d.location === 'China')} />
                                                    <LineSeries color="orange" data={covidData.filter(d => d.location === 'United_States_of_America')} />
                                                    {
                                                        newCountry.map(e => (
                                                        <LineSeries color="green" data={covidData.filter(d => d.location === e.selectedLocation.location)} />
                                                        ))
                                                    }
                                                </FlexibleWidthXYPlot>
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
                                            <Box display="flex">
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
                                                    renderInput={(params) => <TextField {...params} fullWidth={true} label="Select Month" variant="outlined" />}

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
                                                <Typography >
                                                    <span style={{ color: 'blue' }}> United Kingdom </span> |
                                                    <span style={{ color: 'orange' }}> United States  </span> |
                                                    <span style={{ color: 'green' }}> Italy </span> |
                                                    <span style={{ color: 'red' }}> China </span>
                                                    <br />
                                                    {
                                                        newCountry.map(e => (
                                                        <span>{e.selectedLocation.location} | </span>
                                                        ))
                                                    }
                                                <span>{}</span>
                                                </Typography>
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

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];