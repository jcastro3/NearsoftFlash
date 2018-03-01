import React from 'react';
import PropTypes from 'prop-types';
import SlideListThumbnail from './SlideListThumbnail/SlideListThumbnail';
import SlideListAddButton from './SlideListAddButton/SlideListAddButton'

import '../SlideList/SlideList.less'

function SlideList(props) {

    const renderThumbnails = ({ slides, onSlideSelect }) => {
        return slides.map((slide, index) => {
            return <SlideListThumbnail
                key={index}
                slide={slide}
                onSlideSelect={onSlideSelect} />
        });
    }

    return(
        <div className="slide-list">            
            <h2>SlideList</h2>
            { renderThumbnails(props) }
            <SlideListAddButton
                onAddSlide={props.onAddSlide}/>
        </div>
    );
    
}

SlideList.propTypes = {
    slides: PropTypes.array
}

export default SlideList;