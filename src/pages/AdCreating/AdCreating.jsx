import React from 'react';
import cl from './AdCreating.module.css'
import Cap from '../../components/AdCreating/Cap/Cap';
import Categories from '../../components/AdCreating/Categories/Categories';
import TaskName from '../../components/AdCreating/TaskName/TaskName';
import DescriptionAndPhoto from '../../components/AdCreating/DescriptionAndPhoto/DescriptionAndPhoto';
const AdCreating = () => {
    return (
        <div className= {cl.AdCreating}>
            <Cap step = {1} className={cl.Cap} />
            <Categories className={cl.Categories} />
            <TaskName />
            <DescriptionAndPhoto />
        </div>
    );
};

export default AdCreating;