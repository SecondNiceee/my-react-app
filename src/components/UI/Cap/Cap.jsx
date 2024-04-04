import React from 'react';
import cl from './Cap.module.css';
const Cap = ({className , step}) => {
    return (
        <div className = {className ? [className , cl.Cap].join(' ') : cl.Cap}>
            <p> Создать объявление </p>
            <p>{step.toString()}  &nbsp;  / <span> &nbsp; 3</span></p>
        </div>
    );
};

export default Cap;