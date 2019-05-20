// AddressBar Component

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddressBar extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);

        this.state = {
            url: this.props.url,
            oldUrl: this.props.url,
        };
    }

    componentDidUpdate() {
        if (this.state.oldUrl != this.props.url) this.setState({
            url: this.props.url,
            oldUrl: this.props.url,
        });
    }

    handleChange(event) {
        this.setState({ url: event.target.value });
    }

    keyPress(evt) {
        if (evt.keyCode == 13) {
            this.props.onManualUrlEntry(this.state.url);
        }
    }


    render() {
        return (
            <div className="address-bar">
                <input value={ this.state.url } type="text" name="address" onKeyDown={ this.keyPress } onChange={ this.handleChange } />
            </div>
        );
    }
}

AddressBar.propTypes = {
    url: PropTypes.string,
    loading: PropTypes.bool,
    onManualUrlEntry: PropTypes.function,
};

export default AddressBar;
