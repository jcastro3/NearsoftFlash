import React from 'react';
import '../CanvasSevenGeese/CanvasSevenGeese.less'

class CanvasSevenGeese extends React.Component {

    openConfig() {
        
    }

    render() {
        return (
            <div className="canvas-geese" onClick={this.openConfig}>
                Seven Geese
            </div>
        );

    }
}

export default CanvasSevenGeese;