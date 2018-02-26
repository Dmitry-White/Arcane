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
    return (
        <Card className={classes.Card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        4
                    </Avatar>
                }
                title={cards["4"].title}
                subheader={cards["4"].personType}
            />
            <CardMedia
                className={classes.Media}
                image={require("../../../assets/images/4.Emperor.png")}
            />   
            <CardContent>
                <Typography component="p">
                    {cards["4"].shortDesc}
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
                    <Typography paragraph variant="body2">
                        Method:
                    </Typography>
                    <Typography paragraph>
                        {cards["4"].fullDesc}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
};

export default resultCard;