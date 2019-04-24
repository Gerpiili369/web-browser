import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import './Styles/import.scss';

class App extends Component {
    render() {
        return (
            <div>
                <p>Hello world</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
