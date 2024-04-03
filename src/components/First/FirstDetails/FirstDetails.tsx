import TaskDetailsContainer from './TaskDetailsContainer';
import TimeAndWatches from './TimeAndWatches';
import SimilarAds from './SimilarAds';

type DetailsPropType = {
    orderInformation: {
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
        isButton: boolean,
        time: string,
        watches: number
    },
    similarAds: string,
    isDetailsActive: boolean
}

const FirstDetails = ({orderInformation , similarAds , isDetailsActive}: DetailsPropType) => {
    return (
        <div className  =  {isDetailsActive ? 'TaskDetails active' : 'TaskDetails'} >
            <TaskDetailsContainer  orderInformation = {orderInformation} />
            <TimeAndWatches time={orderInformation.time} watches={orderInformation.watches} />
            <SimilarAds similarAds = {[]} />

        </div>
    );
};

export default FirstDetails;