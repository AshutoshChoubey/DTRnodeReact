import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../../components/Home/home";
// import Login from "../../components/Auth/login";
import Reminder from "../../components/Reminder/reminder";
import TaskList from "../../components/TaskList/taskList";
import Task from '../../components/Task/task';
import register from "../Auth/register";
const Nav = () => {
    return (
        <Router>
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <Link to="/" className="navbar-brand">DTR</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/task" className="nav-link">Task<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/taskList" className="nav-link">TaskList</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reminder" className="nav-link">Reminder</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                           </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/" className="dropdown-item">Office Work1</Link>
                                <Link to="/" className="dropdown-item">Office Work2</Link>
                                <Link to="/" className="dropdown-item">Office Work3</Link>
                                <Link to="/" className="dropdown-item">Office Work4</Link>
                            </div>
                        </li> */}
                    </ul>

                </div>
            </div>
            <Route path="/task" exact component={Task} />
            <Route path="/taskList" exact component={TaskList} />
            <Route path="/reminder" exact component={Reminder} />
            <Route path="/" exact component={register} />
            <Route path="/home" exact component={Home} />
            {/* <Route path="/officeWork" component={Chat} /> */}
        </Router>
    )
};
export default Nav;