// TabControls Component

import React, { Component } from 'react';
import AddressBar from '../../../../AddressBar';
import PropTypes from 'prop-types';

class TabControls extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab-controls">
                <AddressBar url={ this.props.tabState.url } loading={ this.props.tabState.loading } onManualUrlEntry={ this.props.onManualUrlEntry } />
            </div>
        );
    }
}

TabControls.propTypes = {
};

export default TabControls;
