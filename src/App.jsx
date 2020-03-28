import React from 'react';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


import './App.css';

function App() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <PersonPinIcon />
      <Typography>James&apos; portfolio comming soon! </Typography>
    </Box>
  );
}

export default App;
