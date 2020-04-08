import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App.js";
import { Provider } from "react-redux";
import store from "./components/store";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
