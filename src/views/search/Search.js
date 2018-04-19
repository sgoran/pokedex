import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Search extends Component {
    render() {
        return (
            <TextField
                id="search"
                label="Search field"
                type="search"
                margin="normal"
            />
        );
    }
}

export default Search;