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
        this.toggleTabOpen = this.toggleTabOpen.bind(this);
    }

    componentDidMount() {
        ipcRenderer.on('createTab', this.createTab);
        ipcRenderer.on('closeTab', this.closeTab);
        ipcRenderer.on('tabUpdate', this.updateTab);
        ipcRenderer.on('toggleTabOpen', this.toggleTabOpen);
    }

    componentWillUnmount() {
        ipcRenderer.removeListener('createTab', this.createTab);
        ipcRenderer.removeListener('closeTab', this.closeTab);
        ipcRenderer.removeListener('tabUpdate', this.updateTab);
        ipcRenderer.removeListener('toggleTabOpen', this.toggleTabOpen);
    }

    createTab(event, args) {
        this.setState(state => state.tabs.push({
            url: args.url,
            isOpen: true,
        }));
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

    toggleTabOpen(event, id) {
        this.setState(state => {
            state.tabs[id].isOpen = !state.tabs[id].isOpen;
            return state;
        });
    }

    render() {
        remote.getCurrentWindow().webContents.send('tabList', this.state.tabs);

        return (
            <div className="open-tabs">
                { this.state.tabs.map((value, index) => (
                    value ? <Tab key={ index } id={ index } url={ value.url } isOpen={ value.isOpen } close={ this.closeTab }/> : null
                )) }
            </div>
        );
    }
}

export default OpenTabs;
