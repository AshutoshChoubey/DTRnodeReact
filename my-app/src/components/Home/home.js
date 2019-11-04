import React, { Component } from "react";
import { connect } from "react-redux";
// import TaskForm from '../Task/taskForm';
import { Link } from 'react-router-dom'
class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      editUser:0
    }
  }
  handleEvent=e=>{
    this.setState({editUser:1})
  }
  render() {
    if (this.props.loggedIn) {
      return (
        <div className="container">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">WelCome {this.props.name}</h5>
              <p className="card-text">Email :{this.props.email}</p>
              <button onClick={this.handleEvent} className="btn btn-primary ">Edit</button>
            </div>
          </div>
        </div >
      )
    }
    else {
      return (
        <div> <h1>Welcome To DTR</h1>
          <h2>Please login to see inside <Link to="/login">Login</Link></h2>
          <h3>If you are new please register here <Link to="/register">Sign Up</Link></h3>
        </div >
      )
    }
  }
}

const mapStateToProps = state => {
  if (state.auth.loggedIn && state.auth.user) {
    let userData = JSON.parse(state.auth.user);
    return {
      name: userData.name,
      email: userData.email,
      loggedIn: state.auth.loggedIn
    };
  }
  else {
    return {};
  }
};
export default connect(
  mapStateToProps,
  null
)(Home);
