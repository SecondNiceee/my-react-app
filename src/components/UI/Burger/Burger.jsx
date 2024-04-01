import React from 'react';
import classes from "./Burger.module.css"
const Burger = (props) => {
    return (
        <div {...props} className= {classes.Burger}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Burger;