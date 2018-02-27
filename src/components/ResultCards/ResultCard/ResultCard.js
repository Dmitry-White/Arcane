import React from 'react';
import classes from './ResultCard.module.css';

import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';


const resultCard = props => {
    let cardDesc = null;
    if (props.cardType === "first") {
        cardDesc = "This is a person's face, the most outstanding qualities. Main character traits, behavior, interests."
    } else if (props.cardType === "second") {
        cardDesc = "This is a person's program, his mission and way though life. Speaks of his morality, karma and inner self."
    } else if (props.cardType === "third") {
        cardDesc = "This is a person's feature, additional quality of his mind. May shadow or twist first two cards sometimes."
    };
    return (
        <Card className={classes.Card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" style={{backgroundColor: props.cardColor}}>
                        {props.cardNum}
                    </Avatar>
                }
                title={props.title}
                subheader={props.personType}
            />
            <CardMedia
                className={classes.Media}
                image={props.image}
            />   
            <CardContent>
                <Typography component="p">
                    {cardDesc}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default resultCard;