import React from 'react';
import classes from './ResultCards.module.css';
import cardsInfo from '../../assets/cards.json';

import ResultCard from './ResultCard/ResultCard';
import teal from 'material-ui/colors/teal';
import amber from 'material-ui/colors/amber';
import red from 'material-ui/colors/red';

const resultCards = props => {
    let cards = null;
    if (props.computable) {
        cards = (
            <div className={classes.Cards}>
                <ResultCard 
                    cardType={"first"}
                    cardColor={teal["A700"]}
                    cardNum={props.firstArcana}
                    title={cardsInfo[props.firstArcana].title}
                    image={props.images[cardsInfo[props.firstArcana].id]}
                    personType={cardsInfo[props.firstArcana].personType}
                    fullDesc={cardsInfo[props.firstArcana].fullDesc}
                />
                <ResultCard 
                    cardType={"second"}
                    cardColor={amber[400]}
                    cardNum={props.secondArcana}
                    title={cardsInfo[props.secondArcana].title}
                    image={props.images[cardsInfo[props.secondArcana].id]}
                    personType={cardsInfo[props.secondArcana].personType}
                    fullDesc={cardsInfo[props.secondArcana].fullDesc}
                />
                <ResultCard 
                    cardType={"third"}
                    cardColor={red[400]}
                    cardNum={props.thirdArcana}
                    title={cardsInfo[props.thirdArcana].title}
                    image={props.images[cardsInfo[props.thirdArcana].id]}
                    personType={cardsInfo[props.thirdArcana].personType}
                    fullDesc={cardsInfo[props.thirdArcana].fullDesc}
                />
            </div>
        )
    }
    return cards;
};

export default resultCards;