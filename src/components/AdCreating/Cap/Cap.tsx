import React from 'react';
import cl from './Cap.module.css';

const Cap = ({className , step}: { className: string, step: number }) => {
    return (
        <div className = {className ? [className , cl.Cap].join(' ') : cl.Cap}>
            <p> Создать объявление </p>
            <p>{step}  &nbsp;  / <span> &nbsp; 3</span></p>
        </div>
    );
};

export default Cap;