import React from 'react';
import cl from './Categories.module.css'
const Categories = ({className}) => {
    return (
        <div className = { className ? [cl.Categories , className].join(' ') : cl.Categories   }>
            <div className={cl.Categories__block}>
                <p>Категория</p>
                <a className = {cl.Category__link} href="">Дизайн</a>
            </div>
            <hr className={cl.line} />
            <div className={cl.Categories__block}>
                <p>Подкатегория</p>
                <a className={cl.Category__link} href="">Дизайн сайтов и прил.</a>
            </div>
        </div>
    );
};

export default Categories;