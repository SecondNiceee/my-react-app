import React from 'react';
import cl from './FileInput.module.css'
const FileInput = ({className}: { className: string }) => {
    return (
        <label htmlFor="file" >
            <div className={className ? [cl.FileInput, className] : cl.FileInput }>
                <p>Добавить фото</p>
                <input type="file"  id="file" className= {cl.none}/>
            </div>
        </label>
    );
};

export default FileInput;