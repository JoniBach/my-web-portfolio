import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        // textAlign: 'center', 
      },
      highlightImage: {
          maxHeight: '700px',
          overflow: 'hidden',
          width: '100%',
      },


}));