import React from 'react';
import cl from './CategoryItem.module.css'
const CategoryItem = ({className , value , name , icon }) => {
    return (
        <div value = {value} className = {className ? [cl.CategoryItem , className].join(' ') : cl.CategoryItem }>
            <img src= {icon} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default CategoryItem;