import FirstBlock from "../FirstMain/FirstBlock";
import FullDescription from "./FullDescription"
import Dedline from './Dedline'
import Status from './Status'
import Customer from './Customer'

type DetailsPropType = {
  title: string,
  executionPlace: string,
  startTime: string,
  tonPrice: string,
  rublesPrice: string,
  fullDescription : string,
  deadline : string,
  rate : string,
  customerName : string,
  isActive : boolean,
  creationTime : string,
  viewsNumber : number
}

const TaskDetailsContainer = ({orderInformation}: { orderInformation: DetailsPropType }) => {
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
