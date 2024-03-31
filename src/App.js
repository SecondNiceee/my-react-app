import react from "react";
import { Route, Routes } from "react-router-dom";
import First from "./pages/First";
import "./css/Main.css";

function App() {
  return (
    <div className="MainContainer">
      <Routes>
        <Route path="/" element={<First />}></Route>
      </Routes>
    </div>
  );
}

export default App;
