// Tab Component

import React, { Component } from 'react';
import TabControls from './TabControls';
import Content from './Content';
import PropTypes from 'prop-types';

const { remote } = window.require('electron');

class Tab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            urlEntry: this.props.url,
            loading: false,
        };

        this.handleLoadStart = this.handleLoadStart.bind(this);
        this.handleLoadStop = this.handleLoadStop.bind(this);
        this.handleManualUrlChange = this.handleManualUrlChange.bind(this);
    }

    handleLoadStart() {
        this.setState({
            loading: true,
        });
    }

    handleLoadStop(evt) {
        this.setState({
            loading: false,
            url: evt.target.getURL(),
        });
        remote.getCurrentWindow().webContents.send('tabUpdate', { id: this.props.id, key: 'url', value: this.state.url });
    }

    handleManualUrlChange(url) {
        this.setState({
            urlEntry: url,
        });
    }

    render() {
        return (
            <div className={ `tab${ this.props.isOpen ? ' open' : ' hidden' }` }>
                <TabControls tabState={ this.state } tabId={ this.props.id } onManualUrlEntry={ this.handleManualUrlChange } />
                <Content url={ this.state.urlEntry } onLoadStart={ this.handleLoadStart } onLoadStop={ this.handleLoadStop } />
            </div>
        );
    }
}

Tab.propTypes = {
    url: PropTypes.string,
    id: PropTypes.number,
    isOpen: PropTypes.bool,
};

export default Tab;

