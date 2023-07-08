import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Global from "./styles/Global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Global />
  </BrowserRouter>
);
