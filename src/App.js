import react, { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
import First from "./pages/First/First";
import "./css/Main.css";
import "./css/Fonts.css";
import AdCreating from "./pages/AdCreating/AdCreating";
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


window.Telegram.WebApp.isVisible = true;
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

      const [tonConstant, setTonConstant] = useState(0);
      const [dollarValue, setDollarValue] = useState(0);

      async function getCurrencies() {
        const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
        const data = await response.json();
        const result = await data;
        console.log("Был вызов!!Снижение производительности!");
        return result.Valute.USD.Value;
      }

      async function getTonPrice() {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/the-open-network"
        );
        const data = await response.json();
        console.log("Был вызов!!Снижение производительности!");
        return data.market_data.current_price.usd;
      }
      function getDollarByRuble() {
        console.log("Функция была вызывана!!!");
        getCurrencies().then((dollarPrice) => {
          console.log(dollarPrice);
          setDollarValue(dollarPrice);
        });
        return null;
      }

      function getTonByRuble() {
        getTonPrice().then((tonPrice) => {
          setTonConstant(dollarValue * tonPrice);
        });
        return null;
      }

      useEffect(() => {
        getDollarByRuble();
        getTonByRuble();
      }, [tonConstant, dollarValue]);


      const [isMenuActive ,  setMenuActive] = useState(false)

      return (
        <div className="MainContainer">
          <Routes>
              <Route path="/" element = {<FirstMenu isMenuActive={isMenuActive} setMenuActive={setMenuActive} />}>
                <Route path="/"  element = {<First setMenuActive={setMenuActive} />}  />
                <Route path="/AdCreatingOne"  element = {<AdCreatingOne taskInformation={taskInformation} setTaskInformation={setTaskInformation}  /> 
               } 
                
                />
              </Route>
          </Routes>

          {/* <AdCreatingTwo taskInformation={taskInformation} setTaskInformation={setTaskInformation} tonConstant = {tonConstant} />
          <AdCreatingThree taskInformation={taskInformation} setTaskInformation={setTaskInformation} /> */}
        </div>
      );
}

export default App;
