import './Styles/import.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Tab from './Components/Tab';

class App extends Component {
    render() {
        return (
            <div>
                <Tab url="https://google.com" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
