import React from 'react';
import classes from './ResultCards.module.css';

import ResultCard from './ResultCard/';
import teal from 'material-ui/colors/teal';
import amber from 'material-ui/colors/amber';
import red from 'material-ui/colors/red';

const resultCards = props => {
    let cards = null;
    if (props.computable) {
        cards = (
            <div className={classes.Cards}>
                <ResultCard 
                    language={props.language}
                    cardType={"first"}
                    cardColor={teal["A700"]}
                    cardNum={props.firstArcana}
                    title={props.cardsInfo[props.firstArcana].title}
                    image={props.images[props.cardsInfo[props.firstArcana].id]}
                    personType={props.cardsInfo[props.firstArcana].personType}
                    fullDesc={props.cardsInfo[props.firstArcana].fullDesc}
                    selectCard={props.selectCard}
                />
                <ResultCard 
                    language={props.language}
                    cardType={"second"}
                    cardColor={amber[400]}
                    cardNum={props.secondArcana}
                    title={props.cardsInfo[props.secondArcana].title}
                    image={props.images[props.cardsInfo[props.secondArcana].id]}
                    personType={props.cardsInfo[props.secondArcana].personType}
                    fullDesc={props.cardsInfo[props.secondArcana].fullDesc}
                    selectCard={props.selectCard}
                />
                <ResultCard 
                    language={props.language}
                    cardType={"third"}
                    cardColor={red[400]}
                    cardNum={props.thirdArcana}
                    title={props.cardsInfo[props.thirdArcana].title}
                    image={props.images[props.cardsInfo[props.thirdArcana].id]}
                    personType={props.cardsInfo[props.thirdArcana].personType}
                    fullDesc={props.cardsInfo[props.thirdArcana].fullDesc}
                    selectCard={props.selectCard}
                />
            </div>
        )
    }
    return cards;
};

export default resultCards;