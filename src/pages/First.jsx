import React, { useEffect, useMemo, useState } from "react";
import FirstTop from "../components/First/FirstMain/FirstTop";
import "../css/FirstRem.css";
import FirstMain from "../components/First/FirstMain/FirstMain";
import FirstMenu from "../components/First/FirstMenu/FirstMenu";
import axios from "axios";
import FirstDetails from '../components/First/FirstDetails/FirstDetails'
import { useFilteredArr } from "../hooks/useFilteredArr";

const First = () => {
  const [ordersInformation, setOrderInformation] = useState([
    {
      title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
      executionPlace: "Можно выполнить удаленно",
      startTime: "Начать 28 февраля, 00:00",
      tonPrice: "261 TON",
      rublesPrice: "52 200 RUB",
      fullDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
      dedline : "Воскресенье, 10 марта 2024 23:59",
      rate : '5',
      customerName : 'YourName',
      isActive : true,
      creationTime : 'Создано когда-то , ..timing',
      viewsNumber : '51'
    },
    {
      title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
      executionPlace: "Можно выполнить удаленно",
      startTime: "Начать 28 февраля, 00:00",
      tonPrice: "261 TON",
      rublesPrice: "52 200 RUB",
      fullDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
      dedline : "Воскресенье, 10 марта 2024 23:59",
      rate : '5',
      customerName : 'YourName',
      isActive : true,
      creationTime : 'Создано когда-то , ..timing',
      viewsNumber : '51'
    },
    {
      title: "UX/UI-дизайнер для разработки прототипа интернет-магазина",
      executionPlace: "Можно выполнить удаленно",
      startTime: "Начать 28 февраля, 00:00",
      tonPrice: "261 TON",
      rublesPrice: "52 200 RUB",
      fullDescription : "Необходимо разработать логотип для магазина! Пример стиля, и пример лого, от которого отталкиваться - предоставлю.",
      dedline : "Воскресенье, 10 марта 2024 23:59",
      rate : '5',
      customerName : 'YourName',
      isActive : true,
      creationTime : 'Создано когда-то , ..timing',
      viewsNumber : '51'
    },
  ]);


  
  async function myFync(){
    const res = await axios.get("http://localhost:5000/some")
    console.log(res)
    return res
  }

  const [isMenuActive, setMenuActive] = useState(false);

  const [filterBy, setFilterBy] = useState("");

  const filteredArr = useFilteredArr(ordersInformation , filterBy)

  const [isDetailsActive, setDetailsActive] = useState(false);

  
  return (
    <div className="First">

      <FirstTop setMenuActive={setMenuActive} setFilterBy = {setFilterBy} />

      <FirstMain setDetailsActive = {setDetailsActive} ordersInformation = {filteredArr}  />

      <FirstMenu isMenuActive={isMenuActive} setMenuActive={setMenuActive} />

      <FirstDetails isDetailsActive = {isDetailsActive} orderInformation = {ordersInformation[0]} similarAds = {ordersInformation}  />

    </div>
  );


};

export default First;
