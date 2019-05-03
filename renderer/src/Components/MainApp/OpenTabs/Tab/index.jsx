// Tab Component

import React, { Component } from 'react';
import AddressBar from './AddressBar';
import Content from './Content';
import PropTypes from 'prop-types';

class Tab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            urlEntry: this.props.url,
            loading: false,
        }

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
        })
    }

    handleManualUrlChange(url) {
        this.setState({
            urlEntry: url,
        });
    }

    render() {
        return (
            <div className="tab">
                <AddressBar url={ this.state.url } loading={ this.state.loading } onManualUrlEntry={ this.handleManualUrlChange } />
                <Content url={ this.state.urlEntry } onLoadStart={ this.handleLoadStart } onLoadStop={ this.handleLoadStop } />
            </div>
        );
    }
}

Tab.propTypes = {
    url: PropTypes.string,
}

export default Tab;

