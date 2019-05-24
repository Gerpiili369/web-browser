// Bubble Component

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Close from '../Icons/Close';

class Bubble extends Component {
    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
        this.innerClick = this.innerClick.bind(this);
    }

    close() {
        this.props.close(this.props.id);
    }

    innerClick() {
        this.props.innerClick(this.props.id);
    }

    render() {
        return (
            <div className={ `bubble${ this.props.select ? ' select' : '' }` } >
                <div className="bubble__content">
                    <img src={ this.props.icon } className="bubble__icon" />
                    <Close className="bubble__close" width="10" height="10" onClick={ this.close } />
                    <div className="bubble__inner" onClick={ this.innerClick }></div>
                </div>
                <div className="bubble__title">{ this.props.title }</div>
            </div>
        );
    }
}

Bubble.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    select: PropTypes.bool,
    close: PropTypes.func,
    innerClick: PropTypes.func,
    id: PropTypes.number,
};

export default Bubble;
