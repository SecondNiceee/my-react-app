import React, { useState } from "react";
import Burger from "../UI/Burger/Burger";
import OneInput from "../UI/OneInput/OneInput";

import icon from "../../images/icon.png";
const FirstTop = ( {setSortBy , setActiveMenu} ) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="FirstTop">
      <Burger onClick = { () => {setActiveMenu(true)}} />
      <OneInput
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setSortBy(e.target.value)
        }}
        
        placeholder="Поиск по заданиям..."
      />
      <img src={icon} alt="" />
    </div>
  );
};

export default FirstTop;
