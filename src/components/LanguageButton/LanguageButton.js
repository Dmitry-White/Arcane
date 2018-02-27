import React, { Component } from 'react';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

class LanguageButton extends Component {
    state = {
        open: false,
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    handleOpen = () => {
        this.setState({ open: true });
    };
    render() {
        return (
            <form autoComplete="off">
                <FormControl>
                    <InputLabel htmlFor="controlled-open-select">Language</InputLabel>
                    <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.props.language}
                        onChange={this.props.languageChange}
                    >
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="russian">Russian</MenuItem>
                    </Select>
                </FormControl>
            </form>
        );
    }
}

export default LanguageButton;