import React from 'react';
import cl from './SecondAddCreating.module.css'
import Cap from '../../../UI/Cap/Cap';
import Budget from '../Budget/Budget'
import DatePicker from '../DatePicker/DatePicker';
const SecondAddCreating = ({taskInformation , setTaskInformation}) => {
    return (
        <div className = {cl.SecondAddCreating}>
            <Cap className={cl.Cap}  step={2} />
            <Budget taskInformation={taskInformation} setTaskInformation={setTaskInformation}  className={cl.Budget} />
            <DatePicker taskInformation={taskInformation} setTaskInformation={setTaskInformation} className={cl.DatePicker} />
        </div>
    );
};

export default SecondAddCreating;