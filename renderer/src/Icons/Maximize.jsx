import React from 'react';
import Icon from './Icon';

class Maximize extends Icon {
    constructor(props) {
        super(props);

        this.state.content = (
            <svg width={ this.props.width } height={ this.props.height } viewBox="0 0 16 16">
                <rect x="1" y="1" width="14" height="14" />
            </svg>
        );
    }
}

export default Maximize;
