/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import CreativeDash from './components/CreativePortfolio/CreativeDashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExpensesDashboard from './components/ExpensesDashboard/ExpensesDashboard';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LandingPage from './components/LandingPage/LandingPage';
import Croamer from './components/Croamer/Croamer';
import ButterflyHalo from './components/LandingPage/Halos/ButterflyHalo'
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Route exact path="/creativeportfolio" component={CreativeDash} />
                {/* <Route exact path="/" component={LandingPage} /> */}
                <Route exact path="/" component={ButterflyHalo} />
                <Route exact path="/webportfolio" component={ExpensesDashboard} />
                <Route exact path="/mycovidtracker" component={Croamer} />
                </MuiPickersUtilsProvider>
            </Switch>
        </Router>
    );
}

export default App;
