import React, { useEffect, useMemo, useState } from "react";
import FirstTop from "../components/First/FirstTop";
import "../css/FirstRem.css";
import FirstMain from "../components/First/FirstMain";
import FirstMenu from "../components/First/FirstMenu";
import axios from "axios";

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


  const filteredArr = useMemo(() => {
    return ValuesArr.filter((e) =>
      e.title.toLowerCase().includes(filterBy.toLowerCase())
    );
  }, [filterBy, ValuesArr]);

  
  return (
    <div className="First">
      <FirstTop setActiveMenu={setActiveMenu} setSortBy={setfilterBy} />

      {filteredArr.length ? (
        <FirstMain ValuesArr={filteredArr} />
      ) : (
        <h1 className="EmptyText"> Нет таких предложений </h1>
      )}

      <FirstMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />


    </div>
  );


};

export default First;
