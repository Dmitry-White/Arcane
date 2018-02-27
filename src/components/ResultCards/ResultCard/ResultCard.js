import React from 'react';
import classes from './ResultCard.module.css';

import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';


const resultCard = props => {
    return (
        <Card className={classes.Card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
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
                    {props.shortDesck}
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
                        {props.fullDesc}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
};

export default resultCard;