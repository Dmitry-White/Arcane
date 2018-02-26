import React, { Component } from 'react';
import classes from './Menu.module.css'

import BirthDateInput from '../../components/BirthDateInput/BirthDateInput';
import ResultCards from '../../components/ResultCards/ResultCards'

class Menu extends Component {
    state = {
        birthdate: {
            day: 0,
            month: 0,
            year: 0
        }
    }
    render() {
        return (
            <>
                <BirthDateInput />
                <ResultCards />
            </>
        )
    };
}

export default Menu;