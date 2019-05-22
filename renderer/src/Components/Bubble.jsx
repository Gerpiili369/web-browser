// Bubble Component

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icons/Icon';
import Close from '../Icons/Close';

class Bubble extends Component {
    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
    }

    close() {
        this.props.close(this.props.id);
    }

    render() {
        return (
            <div className="bubble">
                <div className="bubble__content">
                    <Icon className="bubble__icon" width="16" height="16" />
                    <Close className="bubble__close" width="8" height="8" onClick={ this.close } />
                </div>
                <div className="bubble__title">{ this.props.title }</div>
            </div>
        );
    }
}

Bubble.propTypes = {
    title: PropTypes.string,
    close: PropTypes.func,
    id: PropTypes.number,
};

export default Bubble;
