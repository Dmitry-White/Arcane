import React from 'react';
import classes from './BirthDateInput.module.css';

import TextField from 'material-ui/TextField';

const birthDateInput = props => {
    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="yyyy-mm-dd"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    )
};

export default birthDateInput;