import React from "react";
import ReactDOM from "react-dom/client";

//React Element => Creates an Object. After renderint it to DOM, it becomes HTML element

const jsxheading = <h1 id="heading">Krishna React using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);

