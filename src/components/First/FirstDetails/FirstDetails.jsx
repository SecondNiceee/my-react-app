import React from 'react';
import FirstBlock from '../FirstMain/FirstBlock';
import '../../../css/TaskDetails.css';
import TaskDetailsContainer from './TaskDetailsContainer';
import TimeAndWatches from './TimeAndWatches';
const FirstDetails = ({ValuesArr , similarAds , isDetailsActive}) => {
    return (
        <div className  =  {isDetailsActive ? 'TaskDetails active' : 'TaskDetails'} >
            <TaskDetailsContainer  ValuesArr = {ValuesArr} />
            <TimeAndWatches time={ValuesArr.time} watches={ValuesArr.watches} />
            <div className='similarAds'>
                <h2>Похожие объявления</h2>
                <div className="similarAds__contaier">
                    {similarAds.map(e => {
                        return (
                            <FirstBlock {...e} />
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default FirstDetails;