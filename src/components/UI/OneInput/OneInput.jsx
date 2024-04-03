import React from 'react';
import classes from './OneInput.module.css'
const OneInput = ( props ) => {
    return (
        <input style={props.style} {...props} type="text" className = {classes.OneInput}  />
    );
};

export default OneInput;