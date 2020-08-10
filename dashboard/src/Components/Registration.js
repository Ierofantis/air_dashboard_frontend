import React from 'react';

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            email: null,
            pass: null
        }
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleChangeUser(event) {
        this.setState({
            user: event.target.value,
        })
    }

    handleChangeEmail(event) {
        this.setState({
            email: event.target.value,
        })
    }

    handleChangePass(event) {
        this.setState({
            pass: event.target.value,
        })
    }

    signup() {
        fetch(`http://192.168.99.100:5000/api/signup`, {
            method: 'POST',
            body: JSON.stringify({
                "username": this.state.user,
                "email": this.state.email,
                "password": this.state.pass
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', response))
            .catch(error => console.error('Error:', error));
    }

    render() {
        const { user, email, pass } = this.state;

        return (
            <div class="modal fade" id="registration" tabindex="-1" role="dialog" aria-labelledby="registrationLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="username">Username</label>
                                        <input type="email" class="form-control" id="user" aria-describedby="username" placeholder="Enter username" onChange={this.handleChangeUser} value={user} />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInpemailutEmail1">Email address</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email" onChange={this.handleChangeEmail} value={email} />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="pass" placeholder="Password" onChange={this.handleChangePass} value={pass} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.signup}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}