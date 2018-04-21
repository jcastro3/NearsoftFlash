import React from 'react';
import '../SevenGeese/SevenGeese.less'

class SevenGeese extends React.Component {

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

export default SevenGeese;