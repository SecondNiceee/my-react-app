import React, { useState } from "react";

import FirstBlock from "./FirstBlock";
const FirstMain = ({ValuesArr}) => {

  return (
    <div className="FirstMain">
      {ValuesArr.map((e) => {
        return <FirstBlock {...e} />;
      })}
    </div>
  );
};

export default FirstMain;
