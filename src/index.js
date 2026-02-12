import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/Store";
import "animate.css";
import "./css/common.css";
import "./language/Language";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={Store}>
      <App />
    </Provider>
  </Router>
);

reportWebVitals();
