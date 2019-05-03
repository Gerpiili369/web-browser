// OpenTabs Component

import React, { Component } from 'react';
import Tab from './Tab';

class OpenTabs extends Component {
    render() {
        return (
            <div className="open-tabs">
                <Tab url="https://google.com" />
            </div>
        );
    }
}

export default OpenTabs;
