// TitleBar Component

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppIcon from "../../Icons/AppIcon";
import WindowControl from './WindowControl';


class TitleBar extends Component {
    render() {
        return (
            <div className="title-bar">
                <AppIcon />
                <div className="title">{ this.props.title }</div>
                <WindowControl />
            </div>
        );
    }
}

TitleBar.propTypes = {
    title: PropTypes.string
};

export default TitleBar;
