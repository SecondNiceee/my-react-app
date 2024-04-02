import React from "react";
import FirstBlock from "../FirstMain/FirstBlock";
import FullDescription from "./FullDescription"
import Dedline from './Dedline'
import Status from './Status'
import Customer from './Customer'
const TaskDetailsContainer = ({ValuesArr}) => {
  return (
    <div className="Task__container-one">
      <FirstBlock {...ValuesArr} isButton = {false} />
      <FullDescription fullDescription={ValuesArr.fullDescription} />
      <Dedline dedline={ValuesArr.dedline} />
      <div className="TaskDetails-row">
        <Customer rate={ValuesArr.rate} name={ValuesArr.name} />
        <Status isActive={ValuesArr.isActive} />
      </div>
    </div>
  );
};

export default TaskDetailsContainer;
