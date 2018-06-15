import { connect } from 'react-redux';
import SlideList from '../SlideList/SlideList';
import { addSlide, selectSlide } from '../actions/index';

const mapStateToProps = (state) => ({
    slides: state.slidesReducer.slides
});

const mapDispatchToProps = (dispatch, props) => ({
    addSlide: () => dispatch(addSlide()),
    selectSlide: (e, id) => dispatch(selectSlide(e, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SlideList)