import React, { useEffect, useState } from 'react';
import AdCreatingOne from '../../components/AdCreating/AdCreatingOne/AdCreatingOne/AdCreatingOne';
import AdCreatingTwo from '../../components/AdCreating/ADCreatingTwo/AdCreatingTwo/AddCreatingTwo'
import cl from './AdCreating.module.css'
import AdCreatingThree from '../../components/AdCreating/AdCreatingThree/AdCreatingThree';
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
    const [tonValue , setTonValue] = useState(0);
    const [dollarValue , setDollarValue ]= useState(0);
    async function getCurrencies() {
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const data = await response.json();
        const result = await data;
        console.log('Был вызов!!Снижение производительности!')
        setDollarValue(result.Valute.USD.Value);
    }

    async function getTonPrice() {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/the-open-network');
        const data = await response.json();
        console.log('Был вызов!!Снижение производительности!')
        return data.market_data.current_price.usd;
    }

    function getTonByRuble(){
        getTonPrice().then(tonPrice => { setTonValue()}) 
    }

    //  useEffect (getCurrencies , [])
     useEffect( getTonByRuble , [])
    console.log(tonValue)



    return (
        <div className= {cl.AdCreating}>
            {/* <AdCreatingOne taskInformation = {taskInformation}  setTaskInformation = {setTaskInformation} />  */}
            {/* <AdCreatingTwo taskInformation={taskInformation} setTaskInformation={setTaskInformation}/> */}
            <AdCreatingThree/>
        </div>
    );
};

export default AdCreating;