import React from 'react';
import PropTypes from 'prop-types';
import './SlideListThumbnail.less'


function SlideListThumbnail(props){
    const { slide , onSlideSelect } = props;
    return (
        <div className="slide-thumbnail" onClick={onSlideSelect}>
            <h2>{slide.name}</h2>
        </div>
    );    
}

SlideListThumbnail.propTypes = {
    slides: PropTypes.array
}

export default SlideListThumbnail;