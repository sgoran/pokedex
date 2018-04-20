import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Search extends Component {

    render() {
        return (

            <TextField
                fullWidth
                id="search"
                label="Type pokemon name"
                type="search"
                margin="normal"
                {...this.props}
                
            />

        );
    }
}

export default Search;