import React from 'react';
import cl from './Budget.module.css'
import GreyText from '../../../UI/GreyText/GreyText'
import BudgetInput from '../BudgetInput/BudgetInput';
const Budget = ({className , taskInformation , setTaskInformation}) => {
    return (
        <div className = {className ? [className , cl.Budget].join(' ') : cl.Budget}>
           <GreyText className = {cl.GreyText}>  Ваш бюджет </GreyText> 
           <BudgetInput budget={taskInformation.budget} setBudget={(e) => {setTaskInformation({...taskInformation , budget : e }) }}    />
        </div>
    );
};

export default Budget;