// TabBar Component

import React, { Component } from 'react';
import Bubble from '../../Bubble';

const { ipcRenderer, remote } = window.require('electron');

class TabBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: [],
        };

        this.updateTabs = this.updateTabs.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        ipcRenderer.on('tabList', this.updateTabs);
    }

    componentWillUnmount() {
        ipcRenderer.removeListener('tabList', this.updateTabs);
    }

    updateTabs(event, tabs) {
        this.setState({ tabs });
    }

    toggleOpen(id) {
        remote.getCurrentWindow().webContents.send('toggleTabOpen', id);
    }

    close(id) {
        remote.getCurrentWindow().webContents.send('closeTab', id);
    }

    render() {
        return (
            <div className="tab-bar">
                { this.state.tabs.map((value, index) => (
                    value ? <Bubble title={ value.url } id={ index } close={ this.close } select={ value.isOpen } innerClick={ this.toggleOpen }/> : null
                )) }
            </div>
        );
    }
}

export default TabBar;
