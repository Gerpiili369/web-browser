import './Styles/import.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Tab from './Components/Tab';
import Toolbar from './Components/Toolbar';

class App extends Component {
    constructor(props) {
        super(props);

        this.tab = React.createRef();

        this.setSrc = this.setSrc.bind(this);
    }

    setSrc(url) {
        this.tab.current.setSrc(url);
    }

    render() {
        return (
            <div>
                <Toolbar activate={ this.setSrc } />
                <Tab url="https://google.com" ref={ this.tab } />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
