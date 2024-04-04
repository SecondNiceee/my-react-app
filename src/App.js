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
    path : '/',
    element :  <First /> 
  },
  {
    path : '/AdCreating',
    element : <AdCreating />
  }
])
function App() {
  return (
    <div className="MainContainer">
      {/* <BrowserRouter>
          <First/>
          <AdCreating />
      </BrowserRouter> */}
      <AdCreating />
     </div>
  );
}

export default App;
