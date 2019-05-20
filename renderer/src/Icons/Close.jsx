import React from 'react';
import Icon from './Icon';

class Minimize extends Icon {
    constructor(props) {
        super(props);

        this.state.content = (
            <svg width={ this.props.width } height={ this.props.height } viewBox="0 0 16 16">
                <line x1="0" y1="0" x2="16" y2="16" />
                <line x1="16" y1="0" x2="0" y2="16" />
            </svg>
        );
    }
}

export default Minimize;
