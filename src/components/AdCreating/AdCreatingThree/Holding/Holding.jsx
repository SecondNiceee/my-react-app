import React from 'react';
import cl from './Holding.module.css'
const Holding = ({className}) => {
    return (
        <div className={className ? [className , cl.Holding].join(' ') : cl.Holding}>
            <p>К ХОЛДУ</p>
            <p>{412} <span className={cl.TON}>TON</span></p>
            <p>~ 15 000 RUB</p>
        </div>
    );
};

export default Holding;