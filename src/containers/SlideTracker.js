import { connect } from 'react-redux';
import SlideList from '../SlideList/SlideList';
import { addSlide } from '../actions/index';

const mapStateToProps = (state) => ({
    slides: state.slides
});

const mapDispatchToProps = dispatch => ({
    addSlide: () => dispatch(addSlide())
});

export default connect({
    mapStateToProps,
    mapDispatchToProps
})(SlideList)