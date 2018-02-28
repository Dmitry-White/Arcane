import React from 'react';
import { Link } from 'react-router-dom'
import classes from './ResultCard.module.css';

import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

const eng_firstArcana = "This is a person's face, the most outstanding qualities. Main character traits, behavior, interests.";
const eng_secondArcana = "This is a person's program, his mission and way though life. Speaks of his morality, karma and inner self.";
const eng_thirdArcana = "This is a person's feature, additional quality of his mind. May shadow or twist first two cards sometimes.";

const rus_firstArcana = "Это лицо человека, самые заметные качества. Основные черты характера, поведение, интересы.";
const rus_secondArcana = "Это программа человека, его миссия и жизненный путь. Говорит о морали человека, карме и развитии души";
const rus_thirdArcana = "Это сущность человека, дополнительная особенность его разума. Иногда может затемнять или извращать первые две карты.";

const resultCard = props => {
    let cardDesc = null;
    if (props.cardType === "first") {
        props.language === "eng" ? cardDesc = eng_firstArcana : cardDesc = rus_firstArcana;
    } else if (props.cardType === "second") {
        props.language === "eng" ? cardDesc = eng_secondArcana : cardDesc = rus_secondArcana;
    } else if (props.cardType === "third") {
        props.language === "eng" ? cardDesc = eng_thirdArcana : cardDesc = rus_thirdArcana;
    };
    return (
        <Card className={classes.Card} onClick={() => props.selectCard(props.cardNum)}>
            <Link to={"/" + props.cardNum}>
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
                    <Typography component="p" align="justify">
                        {cardDesc}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    )
};

export default resultCard;