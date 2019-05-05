import React from 'react';
import Icon from './Icon';

class AppIcon extends Icon {
    constructor(props) {
        super(props);

        this.state.content = (
            <span>icon</span>
        );
    }
}

export default AppIcon;
