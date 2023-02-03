import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Clock from "./clock.js";

function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
