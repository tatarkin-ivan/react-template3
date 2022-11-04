import React from "react";
import "./App.css";
import Navigate from "./Components/Navigate/Navigate"
import Home from "./Pages/Home/Home";
import NavigateTab from "./Components/NavigateTab/NavigateTab";

function App() {
  return (
    <div>
      <Navigate/>
      <div className="AppBlock">
        <NavigateTab/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
