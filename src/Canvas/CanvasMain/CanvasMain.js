import React from 'react';
import '../CanvasMain/CanvasMain.less'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time

class CanvasMain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { onDragStopConfigEvent, slideData } = this.props
        const { title, description, fontSize, backgroundColor} = slideData;
  
        return (
            <div className="canvas-main">
                {
                    title && title.value && 
                    <Draggable
                        axis="both"
                        bounds="div.main"
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