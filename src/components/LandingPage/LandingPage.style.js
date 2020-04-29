import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        width: "100%",

    },
   
    centered: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    paralax: {
          /* The image used */
        //   backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/ButterflyCover.jpg)",

  /* Set a specific height */
  minHeight: '500px',

  /* Create the parallax scrolling effect */
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'noRepeat',
  backgroundSize: 'cover',
  
    },
    paralaxCard: {
        height: 'auto',
        backgroundColor: '#383234', 


    },
    image: {
        height: '350px',
    },
 
      
      colorChanging: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        placeContent: 'center',
        placeItems: 'center',
      
        margin: 0,
        padding: 0,
        perspective: '1000px',
      },
      
      
}))