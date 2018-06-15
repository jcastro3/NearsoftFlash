import React from 'react';
import PropTypes from 'prop-types';
import './SlideListThumbnail.less'


function SlideListThumbnail(props){
    const { slide , selectSlide } = props;
    return (
        <div className="slide-thumbnail"
            value={slide.id}
            onClick={(e) => selectSlide(e, slide.id)}>
            <h2>{slide.name}</h2>
        </div>
    );    
}

function SlideListThumbnailEmpty() {
    return (
        <div className="slide-thumbnail-empty"></div>
    );  
}

SlideListThumbnail.propTypes = {
    slides: PropTypes.array
}

export {
    SlideListThumbnail,
    SlideListThumbnailEmpty
};