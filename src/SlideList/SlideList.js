import React from 'react';
import PropTypes from 'prop-types';
import { SlideListThumbnail, SlideListThumbnailEmpty } from './SlideListThumbnail/SlideListThumbnail';
import SlideListAddButton from './SlideListAddButton/SlideListAddButton'

import '../SlideList/SlideList.less'

function SlideList(props) {

    const renderThumbnails = ({ slides, onSlideSelect }) => {
        if(slides.length) {
            return slides.map((slide, index) => {
                return <SlideListThumbnail
                    key={index}
                    slide={slide}
                    onSlideSelect={onSlideSelect} />
            });
        } else {
            return <SlideListThumbnailEmpty/>
        }
    }

    return(
        <div className="slide-list">            
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