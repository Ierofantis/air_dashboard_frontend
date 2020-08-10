import React from 'react';

export default class loign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            pass: null,
            responseLogin: null
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.login = this.login.bind(this);
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

    login() {
        fetch(`${process.env.REACT_APP_HOST}:5000/api/login`, {
            method: 'POST',
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.pass
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => localStorage.setItem('token', response.token), localStorage.setItem('email', this.state.email))
            .catch(error => console.error('Error:', error));

        setTimeout(
            function () {
                window.location.reload();
            }, 1000);
    }

    render() {
        const { email, pass, responseLogin } = this.state;
        return (
            <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="registrationLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInpemailutEmail1">Email address</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email" onChange={this.handleChangeEmail} value={email} />
                                        <small id="emailHelp" class="form-text text-muted">Type your email please</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="pass" placeholder="Password" onChange={this.handleChangePass} value={pass} />
                                    </div>
                                    <p>{responseLogin}</p>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.login}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}