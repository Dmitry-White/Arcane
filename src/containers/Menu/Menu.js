import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Grid from 'material-ui/Grid';

import classes from './Menu.module.css';

import BirthDateInput from '../../components/BirthDateInput/BirthDateInput';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import ResultCards from '../../components/ResultCards/ResultCards';
import FullCard from '../../components/ResultCards/FullCard/FullCard';

class Menu extends Component {
    state = {
        language: "eng",
        birthdate: {
            day: "dd",
            month: "mm",
            year: "yyyy"
        },
        dateError: false,
        computable: false,
        arcana_1: null,
        arcana_2: null,
        arcana_3: null,
        selectedCard: null
    };

    getDateHandler = event => {
        if (event.target.value === "") {
            this.setState({
                birthdate : {
                    year: "yyyy",
                    month: "mm",
                    day: "dd",
                }
            })
        } else {
            const newYear = event.target.value.slice(0, 4);
            const newMonth = event.target.value.slice(5, 7);
            const newDay = event.target.value.slice(8, 10);
            this.setState({
                birthdate : {
                    year: newYear,
                    month: newMonth,
                    day: newDay,
                },
                dateError: false
            })
        };
        
    };

    showResultsHander = () => {
        const day = Number(this.state.birthdate.day);
        const month = Number(this.state.birthdate.month);
        const year = Number(this.state.birthdate.year);
        if (!(isNaN(day) || isNaN(month) || isNaN(year)))  {
            const firstArcana = this.computeFirstArcana(day);
            const secondArcana = this.computeSecondArcana(day, month, year);
            const thirdArcana = this.computeThirdArcana(day, month, year);
            this.setState({
                computable: true,
                arcana_1: firstArcana,
                arcana_2: secondArcana,
                arcana_3: thirdArcana
            })
        } else this.setState({dateError: true});
    };

    computeFirstArcana = day => {
        if (day > 22) {
            return day - 22;
        } else return day;
    };


    computeSecondArcana = (day, month, year) => {
        let sum = 0;
        const daySum = this.sumOfDigits(day);
        const monthSum = this.sumOfDigits(month);
        const yearSum = this.sumOfDigits(year);
        sum = daySum + monthSum + yearSum;
        if (sum > 22){
            return sum - 22;
        } else return sum;
    };

    
    computeThirdArcana = (day, month, year) => {
        let sum = 0;
        let daySum = this.sumOfDigits(day);
        let monthSum = this.sumOfDigits(month);
        let yearSum = this.sumOfDigits(year);
        daySum = this.moreThanNine(daySum);
        monthSum = this.moreThanNine(monthSum);
        yearSum = this.moreThanNine(yearSum);
        sum = daySum + monthSum + yearSum;
        if (sum > 22) {
            return this.sumOfDigits(sum);
        } else return sum;
    };

    sumOfDigits = num => {
        let sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    moreThanNine = num => {
        while (num > 9) {
            num = this.sumOfDigits(num);
        }
        return num;
    };

    languageChangeHadler = event => {
        this.setState({language: event.target.value});
    };

    selectCardHandler = cardNum => {
        this.setState({selectedCard: cardNum});
    }

    render() {
        return (
            <>
                <div className={classes.Menu}>
                    <Grid 
                        container
                        spacing={24}
                        alignItems="center"
                        justify="space-around"
                    >
                        <Grid item xs className={classes.Hidden}>
                        </Grid>
                        <Grid item xs>
                            <BirthDateInput 
                                getDate={this.getDateHandler}
                                dateError={this.state.dateError}
                                showResults={this.showResultsHander}
                                language={this.state.language}
                                languageChange={this.languageChangeHadler}
                            />
                        </Grid>
                        <Grid item xs>
                            <LanguageButton 
                                language={this.state.language}
                                languageChange={this.languageChangeHadler}
                            />      
                        </Grid>
                    </Grid>
                </div>
                <Route exact path="/" component={() => {
                    return <ResultCards
                        language={this.state.language} 
                        computable={this.state.computable}
                        images={this.props.images}
                        cardsInfo={this.props.jsons[this.state.language]}
                        firstArcana={this.state.arcana_1}
                        secondArcana={this.state.arcana_2}
                        thirdArcana={this.state.arcana_3}
                        selectCard={this.selectCardHandler}
                    />
                }}/>

                <Route path={"/" + this.state.selectedCard} component={() => {
                    return <FullCard 
                        selectedCard={this.state.selectedCard}
                        images={this.props.images}
                        cardsInfo={this.props.jsons[this.state.language]}
                    />
                }}/>                
            </>
        )
    };
}

export default Menu;