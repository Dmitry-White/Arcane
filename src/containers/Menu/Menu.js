import React, { Component } from 'react';

import BirthDateInput from '../../components/BirthDateInput/BirthDateInput';
import ResultCards from '../../components/ResultCards/ResultCards'

class Menu extends Component {
    state = {
        birthdate: {
            day: "dd",
            month: "mm",
            year: "yyyy"
        },
        computable: false,
        arcane_1: null,
        arcane_2: null,
        arcane_3: null
    };

    getDateHandler = event => {
        const newYear = event.target.value.slice(0, 4);
        const newMonth = event.target.value.slice(5, 7);
        const newDay = event.target.value.slice(8, 10);
        this.setState({
            birthdate : {
                year: newYear,
                month: newMonth,
                day: newDay,
            }
        })
    };

    showResultsHander = () => {
        const day = Number(this.state.birthdate.day);
        const month = Number(this.state.birthdate.month);
        const year = Number(this.state.birthdate.year);
        if (!(isNaN(day) || isNaN(month) || isNaN(year))) {
            console.log("Valid Date");
            console.log("BD: ", day, month, year);
            const firstArcane = this.computeFirstArcane(day);
            const secondArcane = this.computeSecondArcane(day, month, year);
            const thirdArcane = this.computeThirdArcane(day, month, year);
            this.setState({
                computable: true,
                arcane_1: firstArcane,
                arcane_2: secondArcane,
                arcane_3: thirdArcane
            })
        } else {
            console.log("Invalid Date!");
        }
        console.log("Results: ", this.state.arcane_1, this.state.arcane_2, this.state.arcane_3);
    };

    computeFirstArcane = day => {
        if (day > 22) {
            return day - 22;
        } else return day;
    };


    computeSecondArcane = (day, month, year) => {
        let sum = 0;
        let daySum = this.sumOfDigits(day);
        let monthSum = this.sumOfDigits(month);
        let yearSum = this.sumOfDigits(year);
        sum = daySum + monthSum + yearSum;
        if (sum > 22){
            sum -= 22;
        }
        return sum;
    };

    
    computeThirdArcane = (day, month, year) => {
        let sum = 0;
        let daySum = this.sumOfDigits(day);
        let monthSum = this.sumOfDigits(month);
        let yearSum = this.sumOfDigits(year);
        while (daySum > 9) {
            daySum = this.sumOfDigits(daySum);
        }
        while (monthSum > 9) {
            monthSum = this.sumOfDigits(monthSum);
        }
        while (yearSum > 9) {
            yearSum = this.sumOfDigits(yearSum);
        }
        sum = daySum + monthSum + yearSum;
        if (sum > 22) {
            sum = this.sumOfDigits(sum);
        }
        return sum;
    };

    sumOfDigits = num => {
        let sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    render() {
        return (
            <>
                <BirthDateInput 
                    birthdate={this.state.birthdate} 
                    getDate={this.getDateHandler}
                    showResults={this.showResultsHander}
                />
                <ResultCards 
                    computable={this.state.computable}
                    firstArcane={this.state.arcane_1}
                    secondArcane={this.state.arcane_2}
                    thirdArcane={this.state.arcane_3}
                />
            </>
        )
    };
}

export default Menu;