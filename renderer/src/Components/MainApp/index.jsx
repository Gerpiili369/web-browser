// MainApp Component

import React, { Component } from 'react';
import Toolbar from './Toolbar';
import OpenTabs from './OpenTabs';
import TabBar from './TabBar';

class MainApp extends Component {
    render() {
        return (
            <div className="main-app">
                <Toolbar />
                <OpenTabs />
                <TabBar />
            </div>
        );
    }
}

export default MainApp;
