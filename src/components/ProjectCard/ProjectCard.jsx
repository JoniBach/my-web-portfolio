import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import theme from '../../theme'
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 200,
    },
    paper: {
        padding: theme.spacing(2),
    },
});

type cardDataProps = {
    image: String;
    title: String;
    description: String;
}



export default function MediaCard({ cardData }: cardDataProps) {
    const classes = useStyles();
    const theme = useTheme();


const matches = useMediaQuery(theme.breakpoints.up('sm'));


    return (
        <div className={classes.root}>
            {!matches ? 
                        <Grid container spacing={3}>
                        {
                            cardData.map((content) => (
                                <Grid item xs={12}>
                                    <Card width="100%">
                                        <CardActionArea href={content.href} onClick={content.function} >
                                            {content.image ? <CardMedia className={classes.media} image={content.image} /> : null}
                                            {content.title || content.description ?
                                                <CardContent>
                                                    {content.title ? <Typography gutterBottom variant="h5" component="h2">{content.title}</Typography> : null}
                                                    {content.description ? <Typography variant="body2" color="textSecondary" component="p">{content.description}</Typography> : null}
                                                </CardContent>
                                                : null}
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
            : 
            <Grid container spacing={3}>
            {
                cardData.map((content) => (
                    <Grid item xs={4}>
                        <Card width="100%">
                            <CardActionArea href={content.href} onClick={content.function} >
                                {content.image ? <CardMedia className={classes.media} image={content.image} /> : null}
                                {content.title || content.description ?
                                    <CardContent>
                                        {content.title ? <Typography gutterBottom variant="h5" component="h2">{content.title}</Typography> : null}
                                        {content.description ? <Typography variant="body2" color="textSecondary" component="p">{content.description}</Typography> : null}
                                    </CardContent>
                                    : null}
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
            }


        </div>
    );
}
