import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { NotificationContainer, NotificationManager } from 'react-notifications';

class UserModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: JSON.parse(localStorage.getItem('user'))._id,
            name: JSON.parse(localStorage.getItem('user')).name,
            email: JSON.parse(localStorage.getItem('user')).email,
            changePassword: false,
            currentPassword: '',
            password: '',
            password_confirmation: ''
        }
    }
    handleInput = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    handleForm = event => {
        event.preventDefault();
        axios
            .put("http://localhost:9000/api/users/update", this.state)
            .then(result => {
                localStorage.setItem("user", JSON.stringify(result.data.updatedData));
                if (result.data.success) NotificationManager.success(result.data.msg);
            })
            .catch(erro => {
                NotificationManager.error("Something Went Wrong");
                this.setState({ errors: erro })
            });
    }
    render() {
        return (
            <div>
                <NotificationContainer />
                <button onClick={this.handleEvent} className="btn btn-primary" data-toggle="modal" data-target="#myModal" ><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={this.handleForm}  >
                                <div className="modal-header">
                                    <h4 className="modal-title">Update User Details</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">

                                    <div className="row">
                                        <div className="col-sm-6" >
                                            <div className="form-group">
                                                <input type="text" className="form-control" required placeholder="Name" name="name" onChange={this.handleInput} value={this.state.name} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6" >
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6" >
                                            <div className="form-group">
                                                Change Password:
                                                <label className="radio-inline"><input type="radio" name="changePassword" checked />Yes</label>
                                                <label className="radio-inline"><input type="radio" name="changePassword" />No</label>
                                            </div>
                                        </div>
                                        {this.state.changePassword ? (
                                           <React.Fragment>
                                                <div className="col-sm-6" >
                                                    <div className="form-group">
                                                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInput} placeholder="New Password" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6" >
                                                    <div className="form-group">
                                                        <input type="password" className="form-control" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleInput} placeholder="Confirm New Password" />
                                                    </div>
                                                </div>
                                                </React.Fragment>
                                        ) : null}
                                        <div className="col-sm-6" >
                                            <div className="form-group">
                                                <input type="password" className="form-control" required name="currentPassword" value={this.state.currentPassword} onChange={this.handleInput} placeholder="Current Password" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <input type="submit" className="btn btn-primary" value="Submit" />
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
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
)(UserModal);