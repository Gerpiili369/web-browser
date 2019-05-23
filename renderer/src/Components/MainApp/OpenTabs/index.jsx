// OpenTabs Component

import React, { Component } from 'react';
import Tab from './Tab';

const { ipcRenderer, remote } = window.require('electron');

class OpenTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabs: [],
        };

        this.createTab = this.createTab.bind(this);
        this.closeTab = this.closeTab.bind(this);
        this.updateTab = this.updateTab.bind(this);
    }

    componentDidMount() {
        ipcRenderer.on('createTab', this.createTab);
        ipcRenderer.on('closeTab', this.closeTab);
        ipcRenderer.on('tabUpdate', this.updateTab);
    }

    componentWillUnmount() {
        ipcRenderer.removeListener('createTab', this.createTab);
        ipcRenderer.removeListener('closeTab', this.closeTab);
        ipcRenderer.removeListener('tabUpdate', this.updateTab);
    }

    createTab(event, args) {
        this.setState(state => state.tabs.push({ url: args.url }));
    }

    closeTab(event, id) {
        this.setState(state => {
            state.tabs[id] = null;
            return state;
        });
    }

    updateTab(event, args) {
        this.setState(state => {
            if (args.key && state.tabs[args.id]) state.tabs[args.id][args.key] = args.value;
            return state;
        });
    }

    render() {
        remote.getCurrentWindow().webContents.send('tabList', this.state.tabs);

        return (
            <div className="open-tabs">
                { this.state.tabs.map((value, index) => (
                    value ? <Tab key={ index } id={ index } url={ value.url } close={ this.closeTab }/> : null
                )) }
            </div>
        );
    }
}

export default OpenTabs;
