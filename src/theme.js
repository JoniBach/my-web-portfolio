/* eslint-disable linebreak-style */
import { createMuiTheme } from '@material-ui/core'

import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

import purple from '@material-ui/core/colors/purple'
import grey from '@material-ui/core/colors/grey'





const colors = {
    primary: purple[400],
    secondary: grey[50],
    status: green[500],

};

export default createMuiTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        status: {
            main: colors.status,
        },

    },
});