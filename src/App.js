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

<script   src="https://telegram.org/js/telegram-web-app.js"  ></script>

function App() {
  window.Telegram.WebApp.isVisible = true;
  console.log(window.Telegram)
  // var BackButton = Telegram.WebApp.BackButton;
  // BackButton.isVisible = true;
  // BackButton.show();
  // BackButton.onClick(function() {
  //   WebApp.showAlert("Нет пути назад!");
  //   BackButton.hide();
  // });
  // WebApp.onEvent('backButtonClicked', function() {
  //   /* код */
  // });
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
      

      useEffect(() => {
        let startTouchX = 0;
        let endTouchX = 0;
        let startTouchY = 0;
        let endTouchY = 0;
        document.addEventListener('touchstart' , (e) => {
          startTouchX = e.changedTouches[0].pageX
          startTouchY = e.changedTouches[0].pageY
        })
        document.addEventListener('touchend' , (e) => {
          endTouchX = e.changedTouches[0].pageX
          endTouchY = e.changedTouches[0].pageY
          if (endTouchX > startTouchX && (Math.abs(startTouchY - endTouchY) < 60)) setMenuActive(true)
          if (isMenuActive){
            if (endTouchX < startTouchX && (Math.abs(startTouchY - endTouchY) < 60)){ 
              setMenuActive(false) }
          }
        })


      }, [isMenuActive])



      return (
        <div className="MainContainer" >
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
