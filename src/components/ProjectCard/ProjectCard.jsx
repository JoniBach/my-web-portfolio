import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import theme from '../../theme'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { ResponsiveCalendar } from '@nivo/calendar'



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

const MyResponsiveCalendar = ({ data /* see data tab */ }) => (
    <ResponsiveCalendar
        data={data}
        from="2015-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
)


    return (
        <div className={classes.root}>
            {!matches ? 
                        <Grid container spacing={3}>
                        {
                            cardData.map((content) => (
                                <Grid item xs={12}>
                                    <Card width="100%">
                                      <CardActionArea onClick={() => window.open(content.href)}>
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
                            <CardActionArea onClick={() => window.open(content.href)}>
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
