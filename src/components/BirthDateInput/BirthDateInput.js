import React from 'react';
import classes from './BirthDateInput.module.css';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const birthDateInput = props => {
    return (
        <div className={classes.Container}>
            <form className={classes.Date} noValidate>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue={props.birthdate.year + "-" + props.birthdate.month+ "-" + props.birthdate.day}
                    className={classes.TextField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={props.getDate}
                />
            </form>
            <Button variant="raised" className={classes.button} onClick={props.showResults}>
                Result
            </Button>
        </div>
    )
};

export default birthDateInput;