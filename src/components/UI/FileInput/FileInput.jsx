import React from 'react';
import cl from './FileInput.module.css'
const FileInput = ({className}) => {
    return (
        <label for="file" >
            <div class={className ? [cl.FileInput, className] : cl.FileInput }>
                <p>Добавить фото</p>
                <input type="file"  id="file" class= {cl.none}/>
            </div>
        </label>
    );
};

export default FileInput;