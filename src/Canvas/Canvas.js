import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import CanvasSevenGeese from './CanvasSevenGeese/CanvasSevenGeese';
import CanvasMain from './CanvasMain/CanvasMain';
import CanvasFooterContainer from './CanvasFooterContainer/CanvasFooterContainer';
import { SLIDE_TYPE } from '../shared/constants'

import '../Canvas/Canvas.less'

function EmptyCanvasSlideContainer() {
    return(
        <div>
            Empty Slide, Click to Add Content
        </div>
    )
}

const withEmptySlideChecker = (Component) => (props) => 
    (props.slideData === null) ? <EmptyCanvasSlideContainer/> : <Component {...props}/>;

const withConditionalRendering = compose(
    withEmptySlideChecker
)

const SevenGeese = withConditionalRendering(CanvasSevenGeese);
const MainView = withConditionalRendering(CanvasMain);
const Footer = withConditionalRendering(CanvasFooterContainer);


function Canvas(props) {
    
    return(
        <div className="slide-canvas">
            <div className="slide-canvas__left-container">
                <SevenGeese
                    slideData={props.currentSlide.sevenGeese}/>
            </div>
            <div className="slide-canvas__right-container">
                <MainView
                    slideData={props.currentSlide.main}/>
                <Footer
                    slideData={props.currentSlide.footer}/>
            </div>
        </div>
    );
    
}

Canvas.propsTypes = {
    currentSlide: PropTypes.object
}

export default Canvas;