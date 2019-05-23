// App component

import './Styles/import.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TitleBar from './Components/TitleBar';
import MainApp from './Components/MainApp';

const { remote } = window.require('electron');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            background: remote.getGlobal('background'),
        };
    }

    render() {
        return (
            <div className="app" style={{
                backgroundImage: `url('${ this.state.background }')`
            }}>
                <TitleBar title={ document.querySelector('title').innerHTML } />
                <MainApp />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
