import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100vw%',
      },
      page: {
        maxWidth: '100%',
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
      },
      logo: {
        paddingRight: 5,
      },
      blackCard: {
        background: 'black',
        color: 'white',
      },
      greyCard: {
        background: 'grey',
        color: 'white',
      },
      whiteCard: {
        background: 'white',
        color: 'black',
      },
      image: {
        paddingRight: 20,
        maxWidth: '100%',
      }
}));