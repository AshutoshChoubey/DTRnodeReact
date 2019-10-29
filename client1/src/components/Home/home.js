import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { email: props.email, name: props.name, errors: {} };
  }

  handleInput = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleForm = e => {
    e.preventDefault();
    const data = { email: this.state.email, name: this.state.name };

    axios
      .patch("http://localhost:8000/api/auth/update", data)
      .then(res => {
        console.log(res.data);

        // this.props.updateUser(res.data.user);
      })
      .catch(e => this.setState({ errors: e.response.data }));
  };

  render() {
    return (
      <div >
        Home
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
