/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import DemoSite from './components/CreativePortfolio/CreativePortfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExpensesDashboard from './components/ExpensesDashboard/ExpensesDashboard';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LandingPage from './components/LandingPage/LandingPage';
import Croamer from './components/Croamer/Croamer';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Route exact path="/creativeportfolio" component={DemoSite} />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/webportfolio" component={ExpensesDashboard} />
                <Route exact path="/mycovidtracker" component={Croamer} />
                </MuiPickersUtilsProvider>
            </Switch>
        </Router>
    );
}

export default App;
