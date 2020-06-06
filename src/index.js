import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <div>
    <App myName="Anees" sirName="Sir Zia Khan" sirAge={25} myAge={22} />
  </div>,
  document.getElementById("root")
);
