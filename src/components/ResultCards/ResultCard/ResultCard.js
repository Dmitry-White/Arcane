import React from 'react';
import classes from './ResultCard.module.css';
import cards from '../../../assets/cards.json'

import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';


const resultCard = props => {
    const link = cards[props.cardNum].image;
    console.log(link)
    console.log("../../../assets/images/11.Strength.jpg")
    return (
        <Card className={classes.Card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        {props.cardNum}
                    </Avatar>
                }
                title={cards[props.cardNum].title}
                subheader={cards[props.cardNum].personType}
            />
            <CardMedia
                className={classes.Media}
                image={require("../../../assets/images/4_Emperor.jpg")}
            />   
            <CardContent>
                <Typography component="p">
                    {cards[props.cardNum].shortDesc}
                </Typography>
            </CardContent>
            <CardActions className={classes.Actions} disableActionSpacing>
                <IconButton
                    onClick={() => console.log("OPEN")}
                    aria-label="Show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={true} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {cards[props.cardNum].fullDesc}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
};

export default resultCard;