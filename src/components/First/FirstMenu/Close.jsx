import React from 'react';

const Close = ({isMenuActive , setMenuActive}) => {
    return (
            <div className='close'  onClick = {() => { setMenuActive(!isMenuActive)}  } >
                <div className="close__container" style={{position : 'relative'}}>
                    <span></span>
                    <span></span>
                </div>
            </div>
    );
};

export default Close;