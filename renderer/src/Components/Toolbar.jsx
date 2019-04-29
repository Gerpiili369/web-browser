import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: 'https://google.com',
        }

        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    handleChange(e) {
        this.setState({ address: e.target.value });
    }

    keyPress(e) {
        if (e.keyCode == 13) {
            this.props.activate(this.state.address);
        }
    }

    render() {

        return (
            <input value={ this.state.address } type="text" name="address" onKeyDown={ this.keyPress } onChange={ this.handleChange }/>
        );
    }
}

Toolbar.props = {
    activate: PropTypes.function,
}

export default Toolbar;