import React from 'react';

function ImageUpload(props) {
    return(
        <div>
            <input type="file" onChange={props.onImageChange}/>
        </div>        
    );
}
    
export default ImageUpload;