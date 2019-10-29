import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import { Provider } from "react-redux";
import axios from "axios";
import cookie from "js-cookie";
import jwt from "jsonwebtoken";

const jwt_secret =
  "xsrHWRQStAHvOd4Eqe7tXvtKWCgFtkOhSXmmHtLNGVEvnOWAaWGMVtIVWnB8DBjC";

let token = cookie.get("token");
if (token) {
  jwt.verify(token, jwt_secret, (err, decoded) => {
    if (err) {
      cookie.remove("token");
      token = null;
    } else {
      if (decoded.iss !== "http://localhost:8000/api/auth/login") {
        cookie.remove("token");
        token = null;
      }
    }
  });
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.post("http://localhost:8000/api/auth/me").then(res => {
    store.dispatch({ type: "SET_LOGIN", payload: res.data });
    render();
  });
} else {
  render();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
