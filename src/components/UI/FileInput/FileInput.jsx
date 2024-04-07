import React, { useState } from 'react';
import cl from './FileInput.module.css'
import file  from '../../../images/icons/file.svg'
import trash from '../../../images/icons/trash.svg'
const FileInput = ({className}) => {
    const [images , setImages] = useState([])
    const [counter , setCounter] = useState(0)
    const [files , setFiles] = useState([])
    const [haveImages , setHaveImages] = useState(false)
    return (


            <div className={className ? [cl.FileInput, className].join(' ') : cl.FileInput }>
                                {images.map( (e) => {
                    return(
                        <div className={cl.imageFeetContainer}>
                            <img onClick={(obj) => {
                                setFiles([...files].filter(obj => URL.createObjectURL(obj) !=  URL.createObjectURL(obj)  ))
                                setImages([...images].filter((m) => m!=e)) 
                                console.log(files.length ,  images.length)
                                }} src={trash} alt="" className={cl.removeIcon} />
                            <img   className={cl.imageFeet} src = {e}  alt="" />
                        </div>
                    )

                }
                )}
            <label className={images.length !== 0 ? cl.ActiveMainLabel : cl.MainLabel} htmlFor="file">
                    <input onChange={(event) => {
                            if (event.target.files && event.target.files[0]) {
                                console.log(event.target.files[0])
                                setFiles([...files , event.target.files[0]])
                                setImages([...images , URL.createObjectURL(event.target.files[0])]);
        }

                        }} type="file"  id="file" multiple accept="image/*" class= {cl.none}/>




                <img className={cl.fileImage} src={file} alt="" />
                <p>Добавить фото</p>
            </label>
            </div>

    );
};

export default FileInput;