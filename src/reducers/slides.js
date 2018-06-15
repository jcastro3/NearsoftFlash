import { EmptyProject } from '../models/EmptyProject';
import Slide from '../models/Slide';

const slidesReducer = (state = EmptyProject, action) => {
    switch (action.type) {
        case 'ADD_SLIDE': {
            const slide = Slide();
            //save the current slide being edited
            const slides = state.slides
                .map(s => (state.currentSlide.id === s.id) ? state.currentSlide : s);                
            return {
                slides: [slide, ...slides],
                currentSlide: slide
            }
            break;
        }
        case 'SELECT_SLIDE': {
            const slideId = action.value;
            //save the current slide being edited
            const slides = state.slides
                .map(s => (state.currentSlide.id === s.id) ? state.currentSlide : s);
            const selectedSlide = state.slides
                .find(s => s.id === action.id);

            return {
                currentSlide: selectedSlide,
                slides
            };
        }
        default:
        return state;
            break;
    }
}

export default slidesReducer;