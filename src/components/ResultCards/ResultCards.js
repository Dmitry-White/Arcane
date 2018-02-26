import React from 'react';
import classes from './ResultCards.module.css';

import ResultCard from './ResultCard/ResultCard'

const resultCards = props => {
    let cards = <h1>Input your birthdate</h1>;
    if (props.computable) {
        cards = (
            <div className={classes.Cards}>
                <ResultCard cardNum={props.firstArcane}/>
                <ResultCard cardNum={props.secondArcane}/>
                <ResultCard cardNum={props.thirdArcane}/>
            </div>
        )
    }
    return cards;
};

export default resultCards;