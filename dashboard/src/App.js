import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './toggle.js';
import './Welcome.js';
import Welcome from './Welcome.js';
import Accidents from './Accidents.js';
import Airlines from './Airlines.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      airlines: [],
      value: "main"
    };
    this.handleNavigation = this.handleNavigation.bind(this);

  }

  handleNavigation(value) {
    this.setState({
      value: value
    })
  };
  render() {
    const { value } = this.state;

    return (
      <div className="d-flex" id="wrapper" >

        < div className="bg-light border-right" id="sidebar-wrapper" >
          <div className="sidebar-heading">Mobitair</div>
          <div className="list-group list-group-flush">
            <a href="#" onClick={this.handleNavigation.bind(this, "main")} className="list-group-item list-group-item-action bg-light">Dashboard</a>
            <a href="#" onClick={this.handleNavigation.bind(this, "airlines")} className="list-group-item list-group-item-action bg-light">Airlines</a>
            <a href="#" onClick={this.handleNavigation.bind(this, "accidents")} className="list-group-item list-group-item-action bg-light">Add Accident</a>
            <a href="#" onClick={this.handleNavigation.bind(this, "main")} className="list-group-item list-group-item-action bg-light">Calculate Risk</a>
            <a href="#" onClick={this.handleNavigation.bind(this, "main")} className="list-group-item list-group-item-action bg-light">Removed Airlines</a>
          </div>
        </div>
        <div id="page-content-wrapper">
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Hi User
               </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">Login</a>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">Register</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Exit</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          {value === "main" ? (
            <Welcome />
          ) : null}
          {value === "airlines" ? (
            <Airlines />
          ) : null}
          {value === "accidents" ? (
            <Accidents />
          ) : null}
        </div>
      </div >

    );
  }
}

