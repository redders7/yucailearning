import React from "react";
import ReactDOM from "react-dom/client"; // Note the '/client' import
import App from "./App";
import GlobalStyles from "./GlobalStyles";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
