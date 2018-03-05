import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import classes from './Header.module.css';

import BirthDateInput from '../../components/BirthDateInput';
import LanguageButton from '../../components/LanguageButton';

class Header extends Component {
    
    render() {
        return (
                <div className={classes.Header}>
                    <Grid 
                        container
                        spacing={24}
                        alignItems="center"
                        justify="space-around"
                    >
                        <Grid item xs className={classes.Hidden}/>
                        <Grid item xs>
                            <BirthDateInput 
                                getDate={this.props.getDate}
                                dateError={this.props.dateError}
                                showResults={this.props.showResults}
                                language={this.props.language}
                                languageChange={this.props.languageChange}
                            />
                        </Grid>
                        <Grid item xs>
                            <LanguageButton 
                                language={this.props.language}
                                languageChange={this.props.languageChange}
                            />      
                        </Grid>
                    </Grid>
                </div>           
        )
    };
}

export default Header;