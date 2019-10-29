import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cookie from "js-cookie";

function Layout(props) {
    const handleLogout = e => {
        e.preventDefault();
        cookie.remove("token");
        props.logout();
    };
    return (
        <div>
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <Link to="/" className="navbar-brand">DTR</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {!props.loggedIn ? (
                            <Fragment>
                                <li className="nav-item active">
                                    <Link to="/task" className="nav-link">Task<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/taskList" className="nav-link">TaskList</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/reminder" className="nav-link">Reminder</Link>
                                </li>
                            </Fragment>
                        ) : (
                                <Fragment>
                                    <li className="nav-item active">
                                        <Link to="/login" className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/logout" className="nav-link">Log Out</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/logout"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </Fragment>
                            )}
                    </ul>

                </div>
            </div>
            {props.children}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({ type: "SET_LOGOUT" })
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);
