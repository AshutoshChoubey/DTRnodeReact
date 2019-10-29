import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import axios from "axios";
class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
        Welcome To DTR
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.auth.user.name,
    email: state.auth.user.email
  };
};
export default connect(
  mapStateToProps,
  null
)(Profile);
