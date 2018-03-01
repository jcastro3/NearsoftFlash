import React from 'react';
import { compose } from 'redux';
import SlidesList from '../SlideList/SlideList.js'
import Canvas from '../Canvas/Canvas.js'
import SlideConfiguration from '../SlideConfiguration/SlideConfiguration.js'
import Slide from '../models/Slide';
import './MainContainer.less'

function EmptyCanvasContainer() {
    return (
        <div>
            Empty Canvas, Add new Slide to Begin...
        </div>
    )
}

const withEmptyCanvasSlide = (Component) => (props) =>
    (props.currentSlide === null) ? <EmptyCanvasContainer/> : <Component {...props}/>

const withConditionalRendering = compose(
    withEmptyCanvasSlide
);

const CanvasWithConditionalRendering = withConditionalRendering(Canvas);

class MainContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            slides: [],
            currentSlide: null
        }
    }

    onAddSlide(e) {
        const slide = Slide();
        this.setState({
            slides: [slide, ...this.state.slides],
            currentSlide: slide
        });
    }

    onSlideSelect(e) {
        console.log(e);
    }

    
    render() {
        return(
            <div className="main-container">
                <SlidesList 
                    slides={this.state.slides}
                    onAddSlide={this.onAddSlide.bind(this)}
                    onSlideSelect={this.onSlideSelect.bind(this)}/>
                <CanvasWithConditionalRendering
                    currentSlide={this.state.currentSlide}/>
                <SlideConfiguration/>
            </div>
        );
    }
}

export default MainContainer;