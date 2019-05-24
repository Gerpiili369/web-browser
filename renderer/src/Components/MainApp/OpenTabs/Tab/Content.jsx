// Content Component

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
    constructor(props) {
        super(props);

        this.webview = React.createRef();
    }

    componentDidMount() {

        this.webview.current.addEventListener('did-start-loading', this.props.onLoadStart);
        this.webview.current.addEventListener('did-stop-loading', this.props.onLoadStop);
        this.webview.current.addEventListener('page-favicon-updated', this.props.onFaviconUpdate);

    }


    componentWillUnmount() {

        this.webview.current.removeEventListener('did-start-loading', this.props.onLoadStart);
        this.webview.current.removeEventListener('did-stop-loading', this.props.onLoadStop);
        this.webview.current.removeEventListener('page-favicon-updated', this.props.onFaviconUpdate);

    }

    render() {
        return (
            <div className="content">
                <webview src={ this.props.url } ref={ this.webview } />
            </div>
        );
    }

}

Content.propTypes = {
    onLoadStart: PropTypes.function,
    onLoadStop: PropTypes.function,
    onFaviconUpdate: PropTypes.function,
    url: PropTypes.string
};

export default Content;
