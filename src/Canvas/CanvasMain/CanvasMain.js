import React from 'react';
import '../CanvasMain/CanvasMain.less'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time

class CanvasMain extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setCanvasMainSize();
        window.addEventListener('resize', this.props.onResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize');
    }

    render() {
        const { onDragStopConfigEvent, slideData } = this.props
        const { title, description, fontSize, backgroundColor, backgroundImageUrl, imageFile} = slideData;
        const bgImage = (backgroundImageUrl && imageFile) ? { backgroundImage: `url(${backgroundImageUrl})`} : null;
        return (
            <div className="canvas-main" style={bgImage}>
                {
                    title && title.value && 
                    <Draggable
                        axis="both"
                        bounds="div.main"
                        position={{ x: title.positionX, y: title.positionY }}
                        onStop={(e) => onDragStopConfigEvent(e, 'main', 'title')}
                        >
                        <h1>{title.value}</h1>
                    </Draggable>
                }

                {
                    description && description.value &&
                    <Draggable
                        axis="both"
                        bounds="div.main"
                        position={{ x: description.positionX, y: description.positionY }}
                        onStop={(e) => onDragStopConfigEvent(e, 'main', 'description')}
                    >
                        <h1>{description.value}</h1>
                    </Draggable>
                }
                <p>{fontSize}</p>
            </div>
        );

    }
}

export default CanvasMain;