// MainApp Component

import React, { Component } from 'react';
import OpenTabs from './OpenTabs';

class MainApp extends Component {
    render() {
        return (
            <div className="main-app">
                <div className="toolbar">sidebar placeholder</div>
                <OpenTabs />
                <div className="tab-bar">tab bar placeholder</div>
            </div>
        );
    }
}

export default MainApp;
