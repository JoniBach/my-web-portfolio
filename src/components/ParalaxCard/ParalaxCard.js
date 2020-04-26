import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        width: "100%",

    },
    butterflyCard: {
        width: "100%",
        height: 400,
                    backgroundImage: "url(https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/ButterflyCover.jpg)",
                    backgroundSize:"100%",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "center",
    },
}))