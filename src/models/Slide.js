import uuidv4  from 'uuid/v4';
const Slide = () => ({
    id: uuidv4(),
    name: "", 
    main: null,
    sevenGeese: null,
    footer: null,
    active: null
});



export default Slide;