// WindowControl Component

import React, { Component } from 'react';

import Close from '../../Icons/Close';
import Unmaximize from '../../Icons/Unmaximize';
import Maximize from '../../Icons/Maximize';
import Minimize from '../../Icons/Minimize';

const { remote } = window.require('electron');

class WindowControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            get win() {
                return remote.getCurrentWindow();
            },
            maxMove: false,
            unmaxSize: remote.getCurrentWindow().getSize(),
            maximized: remote.getCurrentWindow().isMaximized(),
        }

        this.removeListeners = this.removeListeners.bind(this);
        this.handleMaximized = this.handleMaximized.bind(this);
        this.handleUnmaximized = this.handleUnmaximized.bind(this);
        this.handleWillResize = this.handleWillResize.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.minimize = this.minimize.bind(this);
        this.toggleMaximized = this.toggleMaximized.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        this.state.win.on('maximize', this.handleMaximized);
        this.state.win.on('unmaximize', this.handleUnmaximized);
        this.state.win.on('will-resize', this.handleWillResize);
        this.state.win.on('move', this.handleMove);
        window.addEventListener('beforeunload', this.removeListeners);
    }

    componentWillUnmount() {
        this.removeListeners();
    }

    removeListeners() {
        this.state.win.removeListener('maximize', this.handleMaximized);
        this.state.win.removeListener('unmaximize', this.handleUnmaximized);
        this.state.win.removeListener('will-resize', this.handleWillResize);
        this.state.win.removeListener('move', this.handleMove);
        window.removeEventListener('beforeunload', this.removeListeners);
    }

    handleMaximized() {
        this.setState({
            maximized: true,
            maxSize: this.state.win.getSize(),
        });
    }

    handleUnmaximized() {
        this.setState({
            maximized: false,
        });
        this.state.win.setSize(...this.state.unmaxSize);
    }

    handleWillResize(evt, newBounds) {
        this.setState({
            unmaxSize: [
                newBounds.width,
                newBounds.height,
            ]
        });
    }

    handleMove() {
        // There should be something here to fix the window not resizing after moving out of (button-initialized) maximized mode
    }

    minimize() {
        this.state.win.minimize();
    }

    toggleMaximized() {
        if (this.state.maximized) {
            this.state.win.unmaximize();
            this.handleUnmaximized();
        } else {
            this.state.win.maximize();
            this.handleMaximized();
        }
    }

    close() {
        this.state.win.close();
    }

    render() {
        return (
            <div className="window-control">
                <Minimize className="window-minimize" onClick={ this.minimize } width="10" height="10" />
                { this.state.maximized ?
                    <Unmaximize className="window-toggle-unmaximize" onClick={ this.toggleMaximized } width="10" height="10" /> :
                    <Maximize className="window-toggle-maximize" onClick={ this.toggleMaximized } width="10" height="10" />
                }
                <Close className="window-close" onClick={ this.close } width="10" height="10" />
            </div>
        );
    }
}


export default WindowControl;