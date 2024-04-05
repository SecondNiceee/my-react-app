import TaskDetailsContainer from './TaskDetailsContainer';
import TimeAndWatches from './TimeAndWatches';
import SimilarAds from './SimilarAds';

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

const FirstDetails = ({orderInformation, similarAds, isDetailsActive}: { orderInformation: DetailsPropType, similarAds: DetailsPropType[], isDetailsActive: boolean }) => {
    return (
        <div className  =  {isDetailsActive ? 'TaskDetails active' : 'TaskDetails'} >
            <TaskDetailsContainer  orderInformation = {orderInformation} />
            <TimeAndWatches time={orderInformation.startTime} watches={orderInformation.viewsNumber} />
            <SimilarAds similarAds = {[]} />

        </div>
    );
};

export default FirstDetails;