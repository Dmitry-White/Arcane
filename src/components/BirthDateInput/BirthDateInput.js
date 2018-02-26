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
                    defaultValue="yyyy-mm-dd"
                    className={classes.TextField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <Button variant="raised" className={classes.button}>
                Result
            </Button>
        </div>
    )
};

export default birthDateInput;