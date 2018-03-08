import React from 'react';
import PropTypes from 'prop-types';
import '../SlideConfiguration/SlideConfiguration.less'

function SlideConfiguration(props) {
    const { currentSlide } = props;
    const activeType = currentSlide.active;
    return(
        <div className="slide-configuration">
            {JSON.stringify(currentSlide[activeType])}
        </div>
    );
}

SlideConfiguration.prototype = {
    currentSlide: PropTypes.object
}

export default SlideConfiguration;