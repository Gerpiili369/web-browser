import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: this.props.content,
        }
    }

    render() {
        return (
            <div className={ `icon${ this.props.className ? ` ${ this.props.className }` : '' }` } onClick={ this.props.onClick }>
                { this.state.content }
            </div>
        );
    }
}

Icon.propTypes = {
    onClick: PropTypes,
    content: PropTypes.any,
    className: PropTypes.string,
}

export default Icon;