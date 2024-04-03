import React from "react";
import FirstBlock from "../FirstMain/FirstBlock";
import FullDescription from "./FullDescription"
import Dedline from './Dedline'
import Status from './Status'
import Customer from './Customer'

type OrderInformationType = {
  fullDescription: string,
  deadline: string,
  customerName: string,
  rate: string,
  isActive: boolean,
  title: string,
  executionPlace: number,
  startTime: string,
  tonPrice: number,
  rublesPrice: number,
  setDetailsActive: any,
  isButton: boolean
}

const TaskDetailsContainer = ({orderInformation}: { orderInformation: OrderInformationType }) => {
  return (
    <div className="Task__container-one">
      <FirstBlock {...orderInformation} isButton = {false} />
      <FullDescription fullDescription={orderInformation.fullDescription} />
      <Dedline deadline={orderInformation.deadline} />
      <div className="TaskDetails-row">
        <Customer rate={orderInformation.rate} customerName={orderInformation.customerName} />
        <Status isActive={orderInformation.isActive} />
      </div>
    </div>
  );
};

export default TaskDetailsContainer;
