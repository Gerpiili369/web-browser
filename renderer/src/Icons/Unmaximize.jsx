import React from 'react';
import Icon from './Icon';

class Minimize extends Icon {
    constructor(props) {
        super(props);

        this.state.content = (
            <svg width={ this.props.width } height={ this.props.height } viewBox="0 0 16 16">
                <path d="M4 4 L4 1 L15 1 L15 12 L12 12" />
                <rect x="1" y="4" width="11" height="11" />
            </svg>
        );
    }
}

export default Minimize;
