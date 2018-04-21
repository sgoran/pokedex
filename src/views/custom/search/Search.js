import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.triggerChange = this.triggerChange.bind(this);
    }

    componentDidMount() {
        this.timer = null;
    }
    
    handleChange = e => {

        clearTimeout(this.timer);

        this.setState({ value: e.target.value });

        this.timer = setTimeout(this.triggerChange, (e.target.value.length>0 ? WAIT_INTERVAL : 0));

    }

    handleKeyDown = e => {
        
        if (e.keyCode === ENTER_KEY) {
            clearTimeout(this.timer);
            this.triggerChange();
        }

    }

    triggerChange() {

        this.props.onDelayedChange(this.state.value);

    }

    render() {
        return (

            <TextField
                fullWidth
                id="search"
                label="Type pokemon name"
                type="search"
                style={{
                    margin: '5px 0px 20px 0px'
                }}
                value={this.state.value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            />

        );
    }
}

export default Search;