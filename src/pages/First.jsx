import React, { useEffect, useMemo, useState } from 'react';
import FirstTop from '../components/First/FirstTop';
import '../css/First.css'
import FirstMain from '../components/First/FirstMain';
import FirstMenu from '../components/First/FirstMenu';

const First = () => {
    const [ValuesArr, setValuesArr] = useState([
        {
          title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
          oneText: "Можно выполнить удаленно",
          twoText: "Начать 28 февраля, 00:00",
          price: "261 TON",
          rublPrice: "52 200 RUB",
        },
        {
          title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
          oneText: "Можно выполнить удаленно",
          twoText: "Начать 28 февраля, 00:00",
          price: "261 TON",
          rublPrice: "52 200 RUB",
        },
        {
          title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
          oneText: "Можно выполнить удаленно",
          twoText: "Начать 28 февраля, 00:00",
          price: "261 TON",
          rublPrice: "52 200 RUB",
        },
      ]);

    // useEffect( () => {
    //   fetch('').then(res => { return res.json() } ).then(data => console.log(data))
    // })






    const [filterBy , setfilterBy] = useState('')
    const changeArr = function(par){
        alert()
        setfilterBy(par)
    }

    const filteredArr = useMemo( () =>  {
    return ValuesArr.filter(e => e.title.toLowerCase().includes(filterBy))}  ,  [filterBy , ValuesArr]  )
    return (
        <div className='First'>
            <FirstTop setSortBy={setfilterBy} />
            
            {  (filteredArr.length)  ?   <FirstMain ValuesArr={filteredArr}/> :  <h1 className='EmptyText'> Нет таких предложений </h1>  }

            <FirstMenu/>
            
        </div>
    );
};

export default First; 