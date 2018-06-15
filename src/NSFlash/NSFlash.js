import React from 'react';
import { compose } from 'redux';
import SlidesList from '../SlideList/SlideList.js'
import Canvas from '../Canvas/Canvas.js'
import SlideConfiguration from '../SlideConfiguration/SlideConfiguration.js'
import Slide from '../models/Slide';
import Main from '../models/Main';
import Footer from '../models/Footer';
import SevenGeese from '../models/SevenGeese';
import './NSFlash.less'

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

const _Canvas = withConditionalRendering(Canvas, 'Empty Canvas, Add new Slide to Begin...', 'slide-canvas--container-empty');
const _SlideConfiguration = withConditionalRendering(SlideConfiguration, 'Empty config.', 'slide-configuration--empty');       

class NSFlash extends React.Component {
    constructor() {
        super();
        this.state = {
            slides: [],
            currentSlide: null,
            width: 0,
            height: 0
        }
    }

    onAddSlide(e) {
        const slide = Slide();
        const slides = this.state.slides
            .map(s => (this.state.currentSlide.id === s.id) ? this.state.currentSlide : s);
        this.setState({
            slides: [slide, ...slides],
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

    handleConfigInputChangeForMainContainer(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        const currentSlide = Object.assign({}, this.state.currentSlide);
        if(name === 'title') {
            currentSlide.main[name].value = value;
        }
        if(name === 'description') {
            currentSlide.main[name].value = value; 
        }
        if(name === 'backgroundColor') {
            currentSlide.main[name] = value; 
        }
        this.setState({ currentSlide });
    }

    onDragStopConfigEvent(e, container, property) {
        //que pishe coshi 🐖 but it works!!!
        const currentSlide = Object.assign({}, this.state.currentSlide);
        currentSlide[container][property].positionX = parseInt(e.target.style.transform.match(/([0-9]){1,5}/g)[0]);
        currentSlide[container][property].positionY = parseInt(e.target.style.transform.match(/([0-9]){1,5}/g)[1]);
        this.setState({ currentSlide })
    }

    onImageChange(e) {
        e.preventDefault();
        const reader = new FileReader();
        const imageFile = e.target.files[0];
        const currentSlide = Object.assign({}, this.state.currentSlide);
 
        reader.onloadend = () => {
            currentSlide.main.imageFile = imageFile;
            currentSlide.main.backgroundImageUrl = reader.result;
            this.setState({
                currentSlide
            });
        }
        reader.readAsDataURL(imageFile);        
    }

    setCanvasMainSize() {
        const width = document.querySelector('.main').offsetWidth;
        const height = document.querySelector('.main').offsetHeight;
        this.setState( {
            width,
            height
        })
    }

    onResize() {
        const currentWidth = document.querySelector('.main').offsetWidth;
        const currentHeight = document.querySelector('.main').offsetHeight;
        const currentSlide = Object.assign({}, this.state.currentSlide);
        currentSlide.main.title.positionX = Math.ceil(( currentWidth * currentSlide.main.title.positionX) / this.state.width);
        currentSlide.main.title.positionY = Math.ceil(( currentHeight * currentSlide.main.title.positionY) / this.state.height);
        currentSlide.main.description.positionX = Math.ceil(( currentWidth * currentSlide.main.description.positionX) / this.state.width);
        currentSlide.main.description.positionY = Math.ceil(( currentHeight * currentSlide.main.description.positionY) / this.state.height);
        this.setState({
            currentSlide,
            width: currentWidth,
            height: currentHeight
        });   
    }
    
    render() {
        return(
            <div className="main-container">
                <SlidesList 
                    slides={this.state.slides}
                    onAddSlide={this.onAddSlide.bind(this)}
                    onSlideSelect={this.onSlideSelect.bind(this)}
                    />
                <_Canvas
                    currentSlide={this.state.currentSlide}
                    onSelectContainerSevenGeese={this.onSelectContainerSevenGeese.bind(this)}
                    onSelectContainerMain={this.onSelectContainerMain.bind(this)}
                    onSelectContainerFooter={this.onSelectContainerFooter.bind(this)}
                    onDragStopConfigEvent={this.onDragStopConfigEvent.bind(this)}
                    setCanvasMainSize={this.setCanvasMainSize.bind(this)}
                    onResize={this.onResize.bind(this)}
                />
                <_SlideConfiguration
                    handleConfigInputChangeForMainContainer={this.handleConfigInputChangeForMainContainer.bind(this)}
                    onImageChange={this.onImageChange.bind(this)}
                    currentSlide={this.state.currentSlide}/>
            </div>
        );
    }
}

export default NSFlash;