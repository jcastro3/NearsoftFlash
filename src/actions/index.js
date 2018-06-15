export const addSlide = (e) => ({
    type: 'ADD_SLIDE'
});

export const selectSlide = (e, id) => ({
    type: 'SELECT_SLIDE',
    id: id,
    value: e.target.value
})