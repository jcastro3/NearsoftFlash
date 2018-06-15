import React from 'react';
import PropTypes from 'prop-types';
import { SlideListThumbnail, SlideListThumbnailEmpty } from './SlideListThumbnail/SlideListThumbnail';
import NSButton from '../presentation/NSButton/NSButton'

import '../SlideList/SlideList.less'
import { selectSlide } from '../actions';

function SlideList(props) {

    const renderThumbnails = ({ slides, selectSlide }) => {
        if(slides.length) {
            return slides.map((slide, index) => {
                return <SlideListThumbnail
                    key={slide.id}
                    slide={slide}
                    selectSlide={selectSlide} />
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
                action={props.addSlide}
                text="+"/>
        </div>
    );
    
}

SlideList.propTypes = {
    slides: PropTypes.array
}

export default SlideList;