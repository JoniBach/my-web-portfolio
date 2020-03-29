/* eslint-disable linebreak-style */
import { createMuiTheme } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';


const colors = {
    primary: grey[50],
    secondary: green[500],
    status: blue[500],
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