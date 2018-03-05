import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import ResultCards from '../../components/ResultCards';
import FullCard from '../../components/FullCard';

class Body extends Component {

    componentWillMount() {
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <>
                <Route exact path="/" component={() => {
                    return <ResultCards
                        language={this.props.language} 
                        computable={this.props.computable}
                        images={this.props.images}
                        cardsInfo={this.props.cardsInfo}
                        firstArcana={this.props.firstArcana}
                        secondArcana={this.props.secondArcana}
                        thirdArcana={this.props.thirdArcana}
                        selectCard={this.props.selectCard}
                    />
                }}/>

                <Route path={"/" + this.props.selectedCard} component={() => {
                    return <FullCard 
                        selectedCard={this.props.selectedCard}
                        images={this.props.images}
                        cardsInfo={this.props.cardsInfo}
                    />
                }}/>                
            </>
        )
    };
}

export default Body;