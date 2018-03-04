import React from 'react';
import { Route } from 'react-router-dom';

import classes from './BirthDateInput.module.css';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const birthDateInput = props => {
    let labelText, buttonText;
    if(props.language === "eng") {
        labelText = "Birthday";
        buttonText = "Result"
    } else {
        labelText = "Дата рождения";
        buttonText = "Результат"
    }
    return (
        <div className={classes.Container}>
            <form className={classes.Date} noValidate>
                <Route render={({history}) => (
                    <TextField
                        id="date"
                        type="date"
                        autoFocus
                        label={labelText}
                        placeholder="yyyy-mm-dd"
                        error={props.dateError}
                        className={classes.TextField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onKeyPress={(e) => {
                                const code = e.keyCode ? e.keyCode : e.which;
                                if(code === 13) {
                                    history.push('/');
                                    props.showResults();
                                }
                            }
                        }
                        onChange={props.getDate}
                    />
                )}/>
            </form>
            <Route render={({history}) => (
                <Button 
                    className={classes.Button}
                    variant="raised" 
                    onClick={() => {
                        history.push('/');
                        props.showResults();
                    }
                }>
                    {buttonText}
                </Button>
            )}/>
        </div>
    )
};

export default birthDateInput;