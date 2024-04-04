import react from "react";
// import { Route, Routes } from "react-router-dom";
import First from "./pages/First/First";
import "./css/Main.css";
import "./css/Fonts.css"
import AdCreating from "./pages/AdCreating/AdCreating";

import { BrowserRouter, createBrowserRouter , Route, RouterProvider, Routes } from "react-router-dom";
import FirstDetails from "./components/First/FirstDetails/FirstDetails";

const router = createBrowserRouter ([
  {
    path : '/AdCreating',
    element :  <First /> 
  },
  {
    path : '/',
    element : <AdCreating />
  }
])
function App() {
  return (
    <div className="MainContainer">

          {/* <First/> */}
          <AdCreatinrg />

     </div>
  );
}

export default App;
