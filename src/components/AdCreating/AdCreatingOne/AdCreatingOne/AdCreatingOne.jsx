import React from "react";
import cl from './AdCreatingOne.module.css'
import Cap from '../../../UI/Cap/Cap'
import Categories from "../Categories/Categories";
import TaskName from "../TaskName/TaskName";
import DescriptionAndPhoto from "../DescriptionAndPhoto/DescriptionAndPhoto";
import MakePrivate from "../MakePrivate/MakePrivate";
const AdCreatingOne = ( {taskInformation ,setTaskInformation }) => {
  return (
      <div className={cl.AdCreating}>
        <Cap step={1} className={cl.Cap} />
        <Categories className={cl.Categories} />
        <TaskName taskInformation = {taskInformation} setTaskInformation = {setTaskInformation} />
        <DescriptionAndPhoto taskInformation={taskInformation}  setTaskInformation={setTaskInformation} className={cl.DescriptionAndPhoto} />
        <MakePrivate
          isPrivate={taskInformation.isPrivate}
          setTaskInformation={setTaskInformation}
          className={cl.MakePrivate}
          taskInformation={taskInformation}
        />
      </div>
  );
};

export default AdCreatingOne;
