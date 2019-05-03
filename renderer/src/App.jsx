// App component

import './Styles/import.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MainApp from './Components/MainApp';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="title-bar">titlebar placeholder</div>
                <MainApp />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
