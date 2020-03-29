import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        '& > *': {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#383234',
        },
    },

}));
