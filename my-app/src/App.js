import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home/home";
// import Reminder from "./components/Reminder/reminder";
import TaskList from "./components/TaskList/taskList";
import TaskDetail from "./components/TaskList/taskDetail";
import TaskForm from './components/Task/taskForm';
import Register from "./components/Auth/Register";
import GuestRoute from "./components/GuestRoute";
import AuthRoute from "./components/AuthRoute";
import Layout from "./components/Layout";
import ForgetPassword from './components/Auth/forgetpassword';
import ResetPassword from './components/Auth/resetPassword';
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <Router>
      <Layout>
        <div>
          <GuestRoute path="/login" component={Login} />
          <GuestRoute path="/register" component={Register} />
          <AuthRoute path="/task" component={TaskForm} />
          <AuthRoute path="/taskList" component={TaskList} />
          <AuthRoute path="/task-detail/:id" component={TaskDetail} />
          <GuestRoute path="/forget-password" component={ForgetPassword} />
          <GuestRoute path="/change-password/:slug" component={ResetPassword} />
          <AuthRoute path="/home" component={Home} />
        </div>
        <Route path="/" exact component={Home} />
      </Layout>
    </Router>
  );
}

export default App;
