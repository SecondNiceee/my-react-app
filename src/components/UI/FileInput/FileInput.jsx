import React from 'react';
import cl from './FileInput.module.css'
const FileInput = ({className}) => {
    return (
        <label htmlFor="file" >
            <div className={className ? [cl.FileInput, className].join(' ') : cl.FileInput }>
                <p>Добавить фото</p>
                <input type="file"  id="file" class= {cl.none}/>
            </div>
        </label>
    );
};

export default FileInput;