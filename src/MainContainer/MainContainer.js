import React from 'react';
import { compose } from 'redux';
import SlidesList from '../SlideList/SlideList.js'
import Canvas from '../Canvas/Canvas.js'
import SlideConfiguration from '../SlideConfiguration/SlideConfiguration.js'
import Slide from '../models/Slide';
import Main from '../models/Main';
import Footer from '../models/Footer';
import SevenGeese from '../models/SevenGeese';
import './MainContainer.less'

function EmptyContainer(props) {
    return (
        <div className={props.style}>
            {props.text}
        </div>
    )
}

const withEmptyContainer = (Component, text, style) => (props) =>
    (props.currentSlide === null) ? <EmptyContainer text={text} style={style}/> : <Component {...props}/>

const withConditionalRendering = compose(
    withEmptyContainer
);

const CanvasWithConditionalRendering = withConditionalRendering(Canvas, 'Empty Canvas, Add new Slide to Begin...', 'slide-canvas--empty');
const SlideConfigurationWithConditionalRendering = withConditionalRendering(SlideConfiguration, 'Empty config.', 'slide-configuration--empty');       

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

    onSlideSelect(e, id) {
        e.preventDefault();
        const slideId = e.target.value;
        const slides = this.state.slides
            .map( s => (this.state.currentSlide.id === s.id) ? this.state.currentSlide : s);
        const selectedSlide = this.state.slides
            .find( s => s.id === id);

        this.setState({
            currentSlide: selectedSlide,
            slides
        });
    }

    onSelectContainerSevenGeese(e) {
        let currentSlide;
        if(this.state.currentSlide.sevenGeese === null) {
            const sevenGeese = SevenGeese();        
            this.setState({       
                currentSlide: Object.assign(this.state.currentSlide, { sevenGeese, active: 'sevenGeese' })
            });
        } else {
            this.setState({
                currentSlide: Object.assign(this.state.currentSlide, { active: 'sevenGeese' })
            })
        }        
    }

    onSelectContainerMain(e) {
        let currentSlide;
        if(this.state.currentSlide.main === null) {
            const main = Main();        
            this.setState({       
                currentSlide: Object.assign(this.state.currentSlide, { main, active: 'main' })
            });
        } else {
            this.setState({
                currentSlide: Object.assign(this.state.currentSlide, {active: 'main'})
            })
        }       
    }

    onSelectContainerFooter(e) {
        let currentSlide;
        if(this.state.currentSlide.footer === null) {
            const footer = Footer();        
            this.setState({       
                currentSlide: Object.assign(this.state.currentSlide, { footer, active: 'footer'  })
            });
        } else {
            this.setState({
                currentSlide: Object.assign(this.state.currentSlide, { active: 'footer' })
            })
        }         
    }

    
    render() {
        return(
            <div className="main-container">
                <SlidesList 
                    slides={this.state.slides}
                    onAddSlide={this.onAddSlide.bind(this)}
                    onSlideSelect={this.onSlideSelect.bind(this)}
                    />
                <CanvasWithConditionalRendering
                    currentSlide={this.state.currentSlide}
                    onSelectContainerSevenGeese={this.onSelectContainerSevenGeese.bind(this)}
                    onSelectContainerMain={this.onSelectContainerMain.bind(this)}
                    onSelectContainerFooter={this.onSelectContainerFooter.bind(this)}
                    />
                <SlideConfigurationWithConditionalRendering
                    currentSlide={this.state.currentSlide}/>
            </div>
        );
    }
}

export default MainContainer;