import React from 'react';
import Icon from './Icon';

class Minimize extends Icon {
    constructor(props) {
        super(props);

        this.state.content = (
            <svg width={ this.props.width } height={ this.props.height } viewBox="0 0 16 16">
                <rect x="2" y="7" width="12" height="2" />
                <rect x="7" y="2" width="2" height="12" />
            </svg>
        );
    }
}

export default Minimize;
