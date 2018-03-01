import React from 'react';
import PropTypes from 'prop-types';

import './SlideListAddButton.less'


function SlideListAddButton(props) {    
    return (
        <div className="slide-list-button" onClick={props.onAddSlide}>
            <i className="fa fa-plus">+</i>
        </div>
    );    
}

SlideListAddButton.propsTypes = {
    onAddSlide: PropTypes.func
}

export default SlideListAddButton;