import React from 'react';
import cl from './TaskName.module.css'
import GreyText from '../../UI/GreyText/GreyText';
import CreateInput from '../../UI/CreateInput/CreateInput';

const TaskName = ({className, ...props}: { className?: string }) => {
    return (
        <div className = { className ? [className , cl.TaskName].join(' ') : cl.TaskName}>
            <GreyText className={cl.GreyText} > Название задания </GreyText>
            <CreateInput className={cl.CreateInput} placeholder = "Что нужно сделать?" />
            <p>Например, разработать дизайн для сайта</p>
        </div>
    );
};

export default TaskName;