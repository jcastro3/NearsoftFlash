import EmptyProject from '../models/EmptyProject';
import Slide from '../models/Slide';

const slides = (state = EmptyProject, action) => {
    switch (action.type) {
        case 'ADD_SLIDE':
            const slide = Slide();                
            return {
                slides: [slide, ...state.slides],
                currentSlide: slide
            }
            break;
    
        default:
        return state;
            break;
    }
}

export default slides;