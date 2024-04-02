import React, { useState } from "react";

import FirstBlock from "./FirstBlock";
const FirstMain = ({ ValuesArr, setIsDetailsActive }) => {
  return (
    <div className="FirstMain">
      {ValuesArr.legth === 0 ? (
        <h1 className="EmptyText"> Нет таких предложений </h1>
      ) : (
        ValuesArr.map((e) => {
          return <FirstBlock setIsDetailsActive={setIsDetailsActive}   {...e} isButton = {true} />;
        })
      )}
    </div>
  );
};

export default FirstMain;
