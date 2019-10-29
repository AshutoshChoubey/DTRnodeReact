import React, { Component } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errors: {} };
  }
  handleForm = e => {
    e.preventDefault();
    const data = { email: this.state.email, password: this.state.password };

    axios
      .post("http://localhost:8000/api/auth/login", data)
      .then(res => {
        // cookie.set("token", res.data.access_token);
        localStorage.setItem("token", res.data.access_token);
        this.props.setLogin(res.data.user);
        this.props.history.push("/home");
      })
      .catch(e => this.setState({ errors: e.response.data.errors }));
  };
  handleInput = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleForm}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="card">
                <div className="card-header text-center">Login</div>
                <div className="card-body">

                  <div className="form-group">
                    <label >Email address</label>
                    <input type="email" name="email" onChange={this.handleInput} className="form-control" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label >Password</label>
                    <input type="password" name="password" onChange={this.handleInput} className="form-control" placeholder="Enter Password" />
                  </div>
                </div>
                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
              </div>
            </div>
            <div className="col-sm-2"></div>
          </div>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogin: user => dispatch({ type: "SET_LOGIN", payload: user })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Login);
