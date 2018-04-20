import React from 'react';
import PropTypes from 'prop-types';
import ImageUpload from '../shared/ImageUpload';
import '../SlideConfiguration/SlideConfiguration.less'

function MainConfig(props) {
    const { currentSlide, handleInputChange, onImageChange } = props;
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
            <ImageUpload
                onImageChange={onImageChange}
            />                
        </div>
    );
}

function SlideConfiguration(props) {
    const { currentSlide, handleConfigInputChangeForMainContainer, onImageChange } = props;
    const activeType = currentSlide.active;
    return(
        <div className="slide-configuration">
            { 
                activeType === 'main' &&
                <MainConfig 
                    currentSlide={currentSlide} 
                    handleInputChange={handleConfigInputChangeForMainContainer}
                    onImageChange={onImageChange}/>
             
            }
        </div>
    );
}

SlideConfiguration.prototype = {
    currentSlide: PropTypes.object
}

export default SlideConfiguration;