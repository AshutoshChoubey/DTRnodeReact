import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GuestRoute from "./components/GuestRoute";
import AuthRoute from "./components/AuthRoute";
import './App.css';
// import Nav from './components/Nav/nav';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Home from "./components/Home/home";
import register from "./components/Auth/register";
import Login from "./components/Auth/login";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <div >
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={register} />
          <AuthRoute path="/home" component={Home} />
        </div>
      </Layout>
    </Router>
  );
}

export default App;
