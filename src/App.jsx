/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import MainDisplay from './components/MainDisplay/MainDisplay';
import useStyles from './App.style';

import './App.css';

function App() {
  const styles = useStyles();

    return (
        <div className={styles.root}>
            <MainDisplay />
        </div>
    );
}

export default App;
