import React, { Component } from 'react'
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default class resetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { linkDate:"",email:"",password: "",confirm_password: "", errors: {} };
    }
    componentDidMount() {
        let slugParam = this.props.match.params.slug;
        let splitSlug=slugParam.split("+++");
        let reqDate=splitSlug[0];
        let email=splitSlug[1];
        console.log(reqDate);
        console.log(email);
        this.setState({email:email,linkDate:reqDate});
        let date1 = new Date(reqDate);
        let currentDate = new Date();
        let differenceinMS = currentDate - date1
        if (differenceinMS > 3600000) {
            NotificationManager.error("Link Not Valid link will be valid for 15 min.Please sent the reset link Again");
            this.props.history.push("/login");
        }
    }
    handleInput = e => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    handleForm = e => {
        e.preventDefault();
        if (this.state.email === '') {
            NotificationManager.warning("Email is Required");
            return false;
        }
        // const data = { email: this.state.email, };
        // console.log(data)
        axios
            .post("http://localhost:9000/api/users/updatePassword", this.state)
            .then(result => {
                NotificationManager.success(result.data.msg);
            })
            .catch(err => {
                if (err.response && err.response.status === 404)
                    NotificationManager.error(err.response.data.msg);
                else
                    NotificationManager.error("Something Went Wrong");
                this.setState({ errors: err.response })
            });

    }
    render() {
        return (
            <div className="content">
                <NotificationContainer />
                <form onSubmit={this.handleForm}>
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header text-center">Reset Password</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" name="password" value={this.state.password} onChange={this.handleInput} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label >Confirm Password</label>
                                        <input type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleInput} className="form-control" />
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <input type="button" value="Reset" onClick={this.handleForm} className="btn btn-primary" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </form>
            </div>
        )
    }
}
