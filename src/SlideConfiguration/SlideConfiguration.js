import React from 'react';
import PropTypes from 'prop-types';
import '../SlideConfiguration/SlideConfiguration.less'

function MainConfig(props) {
    const { currentSlide, handleInputChange } = props;
    return(
        <div className="slide-configuration--main">
            <input type="text" 
                name="title" 
                placeholder="Title" 
                value={currentSlide.main.title.value}
                onChange={handleInputChange}/>
            <textarea type="text" 
                name="description"
                placeholder="Description" 
                value={currentSlide.main.description.value}
                onChange={handleInputChange}/>
            {/* <input type="file" 
                name="backgroundImage" 
                placeholder="Background Image" 
                value={currentSlide.main.backgroundImage}
                onChange={handleInputChange}/> */}
            <input type="text" 
                name="fontSize" 
                placeholder="Font Size" 
                value={currentSlide.main.fontSize}
                onChange={handleInputChange}/>
            <input type="color" 
                name="backgroundColor" 
                placeholder="Background Color" 
                value={currentSlide.main.backgroundColor}
                onChange={handleInputChange}/>
        </div>
    );
}

function SlideConfiguration(props) {
    const { currentSlide, handleConfigInputChangeForMainContainer } = props;
    const activeType = currentSlide.active;
    return(
        <div className="slide-configuration">
            { 
                activeType === 'main' &&
                <MainConfig 
                    currentSlide={currentSlide} 
                    handleInputChange={handleConfigInputChangeForMainContainer}/>
             
            }
        </div>
    );
}

SlideConfiguration.prototype = {
    currentSlide: PropTypes.object
}

export default SlideConfiguration;