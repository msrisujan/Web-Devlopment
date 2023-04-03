import React from "react";
import ReactDOM from "react-dom";

const name = "Sujan";
const currentDate = new Date();
const year = currentDate.getFullYear();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>
);
