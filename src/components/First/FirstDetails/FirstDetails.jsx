import React from 'react';
import FirstBlock from '../FirstMain/FirstBlock';
import TaskDetailsContainer from './TaskDetailsContainer';
import TimeAndWatches from './TimeAndWatches';
import SimilarAds from './SimilarAds';
const FirstDetails = ({orderInformation , similarAds , isDetailsActive}) => {
    return (
        <div className  =  {isDetailsActive ? 'TaskDetails active' : 'TaskDetails'} >
            <TaskDetailsContainer  orderInformation = {orderInformation} />
            <TimeAndWatches time={orderInformation.time} watches={orderInformation.watches} />
            <SimilarAds similarAds = {[]} />

        </div>
    );
};

export default FirstDetails;