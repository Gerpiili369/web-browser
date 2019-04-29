import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    constructor(props) {
        super(props);

        this.webview = React.createRef();

        this.handleLoadStart = this.handleLoadStart.bind(this);
        this.handleLoadStop = this.handleLoadStop.bind(this);
    }

    componentDidMount() {

        this.webview.current.addEventListener('did-start-loading', this.handleLoadStart);
        this.webview.current.addEventListener('did-stop-loading', this.handleLoadStop);

    }


    componentWillUnmount() {

        this.webview.current.removeEventListener('did-start-loading', this.handleLoadStart);
        this.webview.current.removeEventListener('did-stop-loading', this.handleLoadStop);

    }

    handleLoadStart(evt) {
        console.log(this, evt);
    }

    handleLoadStop(evt) {
        console.log(this, evt.target.getURL());
    }

    setSrc(url) {
        this.webview.current.loadURL(url);
    }

    render() {
        return (
            <webview src={ this.props.url } ref={ this.webview } />
        );
    }

}

Tab.propTypes = {
    url: PropTypes.string,
}

export default Tab;
