import React from 'react';
import cl from './CreateInput.module.css'
const CreateInput = ({className , ...props}) => {
    return (
        <input className = {className ? [cl.CreateInput , className] : cl.CreateInput} type="text" {...props}  />
    );
};

export default CreateInput;