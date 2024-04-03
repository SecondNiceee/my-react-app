import React from 'react';

const Dedline = ({deadline}: { deadline: string }) => {
    return (
        <div className='DeadlineContainer'>
            <p>Дедлайн</p>
            <p>{deadline}</p>
        </div>
    );
};

export default Dedline;