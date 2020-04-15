/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import MainDisplay from './components/MainDisplay/MainDisplay';
import DemoSite from './components/DemoSite/DemoSite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
    return (
        <Router>   
                <Switch>
<<<<<<< HEAD
                    <Route exact path='/' component={MainDisplay} />
                    <Route exact path='#/demosite' component={DemoSite} />
=======
                    <Route exact path='/' component={DemoSite} />
                    <Route path='/home' component={MainDisplay} />

                    {/* <Route exact path='/demosite' component={DemoSite} /> */}
>>>>>>> Disabling router until i can figure out a fix
                </Switch>
        </Router>
    );
}

export default App;
