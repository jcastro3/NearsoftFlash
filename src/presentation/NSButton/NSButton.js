import React from 'react';
import PropTypes from 'prop-types';

import './NSButton.less'


function NSButton(props) {    
    return (
        <div className={props.classStyle} onClick={props.action}>
            <span>{props.text}</span>
        </div>
    );    
}

NSButton.propsTypes = {
    action: PropTypes.func
}

export default NSButton;