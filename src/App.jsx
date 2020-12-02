/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import WebDash from './components/CreativePortfolio/WebDashboard';
import CreativeDash from './components/CreativePortfolio/CreativeDashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import ButterflyHalo from './components/LandingPage/Halos/ButterflyHalo'
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Route exact path="/webportfolio" component={WebDash} />
                <Route exact path="/creativeportfolio" component={CreativeDash} />
                <Route exact path="/" component={ButterflyHalo} />
                </MuiPickersUtilsProvider>
            </Switch>
        </Router>
    );
}

export default App;
