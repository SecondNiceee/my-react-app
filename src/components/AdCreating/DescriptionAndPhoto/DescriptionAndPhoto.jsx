import React from 'react';
import cl from './DescriptionAndPhoto.module.css'
import GreyText from '../../UI/GreyText/GreyText';
import CreateInput from '../../UI/CreateInput/CreateInput';
const DescriptionAndPhoto = ({className}) => {
    return (
        <div className= {className ? [cl.DescriptionAndPhoto , className] : cl.DescriptionAndPhoto}>
            <GreyText>Описание</GreyText>
            <div className="inputContainer">
                <p className='inputCounter'>0 / 500</p>
                <CreateInput className={cl.DescriptionInput} placeholder = "Дайте подробное тз..." />
                <input type="file" />
            </div>

            
        </div>
    );
};

export default DescriptionAndPhoto;