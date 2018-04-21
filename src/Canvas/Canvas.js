import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import SevenGeese from './SevenGeese/SevenGeese';
import Main from './Main/Main';
import Footer from './Footer/Footer';
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

const _SevenGeese = withConditionalRendering(SevenGeese, {
    text: 'Empty 7Geese View, Click to Add Content'
});
const _Main = withConditionalRendering(Main, {
    text: 'Empty Main View, Click to Add Content'
});
const _Footer = withConditionalRendering(Footer, {
    text: 'Empty Footer View, Click to Add Content'
});


function Canvas(props) {
    const { currentSlide, onSelectContainerSevenGeese, onSelectContainerMain, onSelectContainerFooter, onDragStopConfigEvent, onResize, setCanvasMainSize } = props;
    const canvasStyle = (currentSlide.main && currentSlide.main.backgroundColor) ? { 'backgroundColor': currentSlide.main.backgroundColor || '#ffffff' } : null;
    return(
        <div className="slide-canvas">
            <div className="slide-canvas--left" onClick={onSelectContainerSevenGeese}>
                <_SevenGeese
                    slideData={currentSlide.sevenGeese}/>
            </div>
            <div className="slide-canvas--right">
                <div className="main" style={canvasStyle} onClick={onSelectContainerMain}>
                    <_Main
                        slideData={currentSlide.main}
                        onDragStopConfigEvent={onDragStopConfigEvent}
                        setCanvasMainSize={setCanvasMainSize}
                        onResize={onResize}/>
                </div>
                <div className="footer" onClick={onSelectContainerFooter}>
                    <_Footer
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