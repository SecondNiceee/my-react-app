import react, { useEffect, useRef } from "react";
// import { Route, Routes } from "react-router-dom";
import First from "./pages/First/First";
import "./css/Main.css";
import "./css/Fonts.css";

import AdCreatingTwo from './pages/ADCreatingTwo/AdCreatingTwo/AddCreatingTwo'


import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import FirstDetails from "./components/First/FirstDetails/FirstDetails";
import { useState } from "react";
import AdCreatingOne from "./pages/AdCreatingOne/AdCreatingOne/AdCreatingOne";
import AdCreatingThree from "./pages/AdCreatingThree/AdCreatingThree";
import FirstMenu from "./pages/FirstMenu/FirstMenu";
import { useTon } from "./hooks/useTon";



function App() {
      const [taskInformation, setTaskInformation] = useState({
        category: "дизайн",
        subcategory: "дизайн сайтов и приложений",
        taskName: "",
        taskDescription: "",
        photos: "",
        budget: 0,
        tonValue: 0,
        taskDate: { start: "", end: "" },
      });

      const tonConstant = useTon()
      const [isMenuActive ,  setMenuActive] = useState(false)
      const menuRef = useRef(null)


      return (
        <div className="MainContainer" style={{scale : 0.8}}>
          {/* <Routes>
              <Route path="/" element = {<FirstMenu isMenuActive={isMenuActive} setMenuActive={setMenuActive} />}>
                <Route path="/"  element = {<First setMenuActive={setMenuActive} />}  />
                <Route path="/AdCreatingOne"  element = {<AdCreatingOne taskInformation={taskInformation} setTaskInformation={setTaskInformation}  /> 
               } 
                
                />
              </Route>
          </Routes> */}

          {/* <AdCreatingTwo taskInformation={taskInformation} setTaskInformation={setTaskInformation} tonConstant = {tonConstant} />
          <AdCreatingThree taskInformation={taskInformation} setTaskInformation={setTaskInformation} /> */}

          <FirstMenu menuRef = {menuRef} isMenuActive={isMenuActive} setMenuActive={setMenuActive}  />
          <First setMenuActive={setMenuActive } isMenuActive={isMenuActive} />
        </div>
      );
}

export default App;
