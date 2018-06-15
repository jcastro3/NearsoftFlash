import React from 'react';
import PropTypes from 'prop-types';
import { SlideListThumbnail, SlideListThumbnailEmpty } from './SlideListThumbnail/SlideListThumbnail';
import NSButton from '../presentation/NSButton/NSButton'

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
            <NSButton
                classStyle='slide-list-button'
                action={props.onAddSlide}
                text="+"/>
        </div>
    );
    
}

SlideList.propTypes = {
    slides: PropTypes.array
}

export default SlideList;