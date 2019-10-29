import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
       
          <Component {...props} />
       
      }
    />
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    loggedIn: state.auth.loggedIn
  };
};
export default connect(mapStateToProps)(AuthRoute);
