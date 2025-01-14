import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {render} from "react-dom"
import {BrowserRouter, Route, Link} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
