import React, { useEffect, useMemo, useState } from "react";
import FirstTop from "../components/First/FirstMain/FirstTop";
import "../css/FirstRem.css";
import FirstMain from "../components/First/FirstMain/FirstMain";
import FirstMenu from "../components/First/FirstMenu/FirstMenu";
import axios from "axios";
import FirstDetails from '../components/First/FirstDetails/FirstDetails'
import { useFilteredArr } from "../hooks/useFilteredArr";

const First = () => {
  const [ValuesArr, setValuesArr] = useState([
    {
      title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
      oneText: "Можно выполнить удаленно",
      twoText: "Начать 28 февраля, 00:00",
      price: "261 TON",
      rublPrice: "52 200 RUB",
      fullDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
      dedline : "Воскресенье, 10 марта 2024б 23:59",
      rate : '5',
      name : 'YourName',
      isActive : 'true',
      time : 'Создано когда-то , ..timing',
      watches : '51 просмотр'
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


  
  async function myFync(){
    const res = await axios.get("http://localhost:5000/some")
    console.log(res)
    return res
  }


  // useEffect( () => {
  //   setValuesArr ( myFync().data )    
  // }, []); 




  const [activeMenu, setActiveMenu] = useState(false);

  const [filterBy, setfilterBy] = useState("");


  // const filteredArr = useMemo(() => {
  //   return ValuesArr.filter((e) =>
  //     e.title.toLowerCase().includes(filterBy.toLowerCase())
  //   );
  // }, [filterBy, ValuesArr]);
  const filteredArr = useFilteredArr(ValuesArr , filterBy)

  const [isDetailsActive, setIsDetailsActive] = useState(false);

  
  return (
    <div className="First">

      <FirstTop setActiveMenu={setActiveMenu} setSortBy={setfilterBy} />

      <FirstMain setIsDetailsActive={setIsDetailsActive} ValuesArr = {filteredArr}  />

      <FirstMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      <FirstDetails isDetailsActive = {isDetailsActive}   ValuesArr = {ValuesArr[0]}  similarAds = {ValuesArr}  />
    </div>
  );


};

export default First;
