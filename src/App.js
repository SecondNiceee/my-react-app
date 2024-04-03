import react from "react";
// import { Route, Routes } from "react-router-dom";
import First from "./pages/First/First";
import "./css/Main.css";
import "./css/Fonts.css"
import AdCreating from "./pages/AdCreating/AdCreating";

function App() {
  return (
    <div className="MainContainer">

      {/* <Routes>
        <Route path="/" element = {
          <First/>
        }></Route>
      </Routes> */}

{/*       
      <First /> */}
      <AdCreating />
    </div>
  );
}

export default App;
