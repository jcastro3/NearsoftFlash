import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import CanvasSevenGeese from './CanvasSevenGeese/CanvasSevenGeese';
import CanvasMain from './CanvasMain/CanvasMain';
import CanvasFooterContainer from './CanvasFooterContainer/CanvasFooterContainer';
import { SLIDE_TYPE } from '../shared/constants'

import '../Canvas/Canvas.less'

function EmptyCanvasSlideContainer(props) {
    return(
        <div className="slide-canvas--empty">
            <span>{props.conditionalData.text}</span>
        </div>
    )
}

const withEmptySlideChecker = (Component, conditionalData) => (props) => 
    (props.slideData === null) ? <EmptyCanvasSlideContainer conditionalData={conditionalData}/> : <Component {...props}/>;

const withConditionalRendering = compose(
    withEmptySlideChecker
)

const SevenGeese = withConditionalRendering(CanvasSevenGeese, {
    text: 'Empty 7Geese View, Click to Add Content'
});
const MainView = withConditionalRendering(CanvasMain, {
    text: 'Empty Main View, Click to Add Content'
});
const Footer = withConditionalRendering(CanvasFooterContainer, {
    text: 'Empty Footer View, Click to Add Content'
});


function Canvas(props) {
    const { currentSlide, onSelectContainerSevenGeese, onSelectContainerMain, onSelectContainerFooter, onDragStopConfigEvent } = props;
    const canvasStyle = (currentSlide.main && currentSlide.main.backgroundColor) ? { 'backgroundColor': currentSlide.main.backgroundColor || '#ffffff' } : null;
    return(
        <div className="slide-canvas">
            <div className="slide-canvas--left" onClick={onSelectContainerSevenGeese}>
                <SevenGeese
                    slideData={currentSlide.sevenGeese}/>
            </div>
            <div className="slide-canvas--right">
                <div className="main" style={canvasStyle} onClick={onSelectContainerMain}>
                    <MainView
                        slideData={currentSlide.main}
                        onDragStopConfigEvent={onDragStopConfigEvent}/>
                </div>
                <div className="footer" onClick={onSelectContainerFooter}>
                    <Footer
                        slideData={currentSlide.footer}/>
                </div>
            </div>
        </div>
    );
    
}

Canvas.propsTypes = {
    currentSlide: PropTypes.object
}

export default Canvas;