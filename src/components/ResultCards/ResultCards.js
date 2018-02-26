import React from 'react';
import classes from './ResultCards.module.css';

import ResultCard from './ResultCard/ResultCard'

const resultCards = props => {
    return (
        <div className={classes.Cards}>
            <ResultCard />
            <ResultCard />
            <ResultCard />
        </div>
    )
};

export default resultCards;