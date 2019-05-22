// Toolbar Component

import React, { Component } from 'react';
import Plus from '../../../Icons/Plus';
import PropTypes from 'prop-types';

const { remote } = window.require('electron');

class Toolbar extends Component {

    newTab() {
        remote.getCurrentWindow().webContents.send('createTab', { url: 'https://google.com' });
    }

    render() {
        return (
            <div className="toolbar">
                <Plus height="24" width="24" onClick={ this.newTab } />
            </div>
        );
    }
}

Toolbar.propTypes = {
    newTab: PropTypes.func.isRequired
};

export default Toolbar;
