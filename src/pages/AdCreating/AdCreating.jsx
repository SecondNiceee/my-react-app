import React, { useState } from 'react';
import AdCreatingOne from '../../components/AdCreating/AdCreatingOne/AdCreatingOne/AdCreatingOne';
import AdCreatingTwo from '../../components/AdCreating/ADCreatingTwo/AdCreatingTwo/AddCreatingTwo'
import cl from './AdCreating.module.css'
const AdCreating = () => {
    const [taskInformation , setTaskInformation] = useState( {
        category : 'дизайн',
        subcategory : 'дизайн сайтов и приложений',
        taskName : '',
        taskDescription : '',
        photos : '',
        budget : 0,
        taskDate : {start : '' , end : ''}
    })

    return (
        <div className= {cl.AdCreating}>
            {/* <AdCreatingOne taskInformation = {taskInformation}  setTaskInformation = {setTaskInformation} />  */}
            <AdCreatingTwo taskInformation={taskInformation} setTaskInformation={setTaskInformation}/>
        </div>
    );
};

export default AdCreating;