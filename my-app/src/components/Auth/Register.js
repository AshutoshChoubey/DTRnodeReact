import React, { Component } from "react";
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
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };
    fetch('http://localhost:9000/api/users/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.props.history.push("/login");
        },
        (error) => {
          console.log(error);
        }
      )
      .catch(err => {
        this.setState({ errors: err });
      });
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
                                        <label >Name</label>
                                        <input type="text" name="name" onChange={this.handleInput} className="form-control" placeholder="Enter email" />
                                    </div>

                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" name="email" onChange={this.handleInput} className="form-control" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" name="password" onChange={this.handleInput} className="form-control" placeholder="Enter Password" />
                                    </div>
                                    <div className="form-group">
                                        <label >Confirm Password</label>
                                        <input type="password" name="password_confirmation" onChange={this.handleInput} className="form-control" placeholder="Enter Password" />
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

