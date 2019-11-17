import React, { Component } from "react";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: {}
    };
  }
  handleForm = e => {
    e.preventDefault();
    if(this.state.password==='' || this.state.password_confirmation==='' || this.state.email==='' || this.state.name==='')
    {
        NotificationManager.warning("Please Enter Name,Email Password And Confirm Password");
        return false;
    }
    else if(this.state.password!==this.state.password_confirmation)
    {
        NotificationManager.warning("Your Password Not Matched ! Please Check your pasword and confirm password");
        return false;
    }
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };
    axios
    .post("http://localhost:9000/api/users/register", data)
    .then(result => {
      NotificationManager.success(result.data.msg);
      this.props.history.push("/login");
    })
    .catch(err => {
      if (err.response && err.response.status === 400)
        NotificationManager.error(err.response.data.msg);
      else
        NotificationManager.error("Something Went Wrong");
      this.setState({ errors: err.response })
    });
};
    // fetch('http://localhost:9000/api/users/register', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       NotificationManager.success(result.msg)
    //     },
    //     (error) => {
    //       NotificationManager.error(error);
    //     }
    //   )
    //   .catch(err => {
    //     NotificationManager.error(err);
    //     this.setState({ errors: err });
    //   });
  //};
  handleInput = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="content">
        <NotificationContainer />
                <form onSubmit={this.handleForm}>
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-header text-center">Login</div>
                                <div className="card-body">
                                <div className="form-group">
                                        <label >Name</label>
                                        <input type="text" required name="name" onChange={this.handleInput} className="form-control" placeholder="Enter email" />
                                    </div>

                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" required name="email" onChange={this.handleInput} className="form-control" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" required name="password" onChange={this.handleInput} className="form-control" placeholder="Enter Password" />
                                    </div>
                                    <div className="form-group">
                                        <label >Confirm Password</label>
                                        <input type="password" required name="password_confirmation" onChange={this.handleInput} className="form-control" placeholder="Enter Password" />
                                    </div>
                                </div>
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Register</button></div>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>

                </form>
            </div>
    );
  }
}


export default Register;

