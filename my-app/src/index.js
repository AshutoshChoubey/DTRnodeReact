import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import '../node_modules/bootstrap/dist/js/bootstrap';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import { Provider } from "react-redux";
import jwt from "jsonwebtoken";
const jwt_secret =
  "xsrHWRQStAHvOd4Eqe7tXvtKWCgFtkOhSXmmHtLNGVEvnOWAaWGMVtIVWnB8DBjC";
let token =localStorage.getItem('token');
if (token) {
  jwt.verify(token, jwt_secret, (err, decoded) => {
    // if (err) {
    //   localStorage.removeItem("token");
    //   token = null;
    // } else {
    //   if (decoded.iss !== "http://localhost:6000/api/users/login") {
    //     localStorage.removeItem("token");
    //     token = null;
    //   }
    // }
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
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // axios.post("http://localhost:6000/api/users/profile").then(res => {
  //   store.dispatch({ type: "SET_LOGIN", payload: res.data });
  //   render();
  // });

  // fetch('http://localhost:6000/api/users/profile', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "Authorization":`${token}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         localStorage.setItem("token", result.token);
  //         localStorage.setItem("user", JSON.stringify(result.user));
  //         this.props.setLogin(result.user);
  //         this.props.history.push("/home");
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     )
  //     .catch(err => {
  //       this.setState({ errors: err });
  //     });

  render();

} else {
  render();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
