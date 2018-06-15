export const addSlide = (e) => ({
    type: 'ADD_SLIDE'
});

export const selectSlide = (e, id) => {
    console.log('selectSlide',arguments);
    return {
        type: 'SELECT_SLIDE',
        id: id,
        value: e.target.value
    }
}