/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import MainDisplay from './components/MainDisplay/MainDisplay';
import DemoSite from './components/DemoSite/DemoSite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExpensesDashboard from './components/ExpensesDashboard/ExpensesDashboard';

import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={DemoSite} />
                <Route path="/home" component={MainDisplay} />
                <Route path="/expensesdashboard" component={ExpensesDashboard} />
            </Switch>
        </Router>
    );
}

export default App;
