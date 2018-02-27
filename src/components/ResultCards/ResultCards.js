import React from 'react';
import classes from './ResultCards.module.css';
import cardsInfo from '../../assets/cards.json';

import ResultCard from './ResultCard/ResultCard';

const resultCards = props => {
    let cards = <h1>Input your birthdate</h1>;
    if (props.computable) {
        cards = (
            <div className={classes.Cards}>
                <ResultCard 
                    cardNum={props.firstArcane}
                    title={cardsInfo[props.firstArcane].title}
                    image={props.images[cardsInfo[props.firstArcane].id]}
                    personType={cardsInfo[props.firstArcane].personType}
                    shortDesc={cardsInfo[props.firstArcane].shortDesc}
                    fullDesc={cardsInfo[props.firstArcane].fullDesc}
                />
                <ResultCard 
                    cardNum={props.secondArcane}
                    title={cardsInfo[props.secondArcane].title}
                    image={props.images[cardsInfo[props.secondArcane].id]}
                    personType={cardsInfo[props.secondArcane].personType}
                    shortDesc={cardsInfo[props.secondArcane].shortDesc}
                    fullDesc={cardsInfo[props.secondArcane].fullDesc}
                />
                <ResultCard 
                    cardNum={props.thirdArcane}
                    title={cardsInfo[props.thirdArcane].title}
                    image={props.images[cardsInfo[props.thirdArcane].id]}
                    personType={cardsInfo[props.thirdArcane].personType}
                    shortDesc={cardsInfo[props.thirdArcane].shortDesc}
                    fullDesc={cardsInfo[props.thirdArcane].fullDesc}
                />
            </div>
        )
    }
    return cards;
};

export default resultCards;