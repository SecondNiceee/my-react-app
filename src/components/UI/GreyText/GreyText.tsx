import React from 'react';
import cl from './GreyText.module.css'

const GreyText = ({className,  ...props}: { className?: string, children?: string }) => {
    return (
        <p className= { className ? [cl.GreyText , className] : cl.GreyText  }>{ props.children }</p>
    );
};

export default GreyText;