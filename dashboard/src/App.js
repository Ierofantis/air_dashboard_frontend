import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './toggle.js';
import Welcome from './Components/Welcome';
import Accidents from './Components/Accidents';
import Airlines from './Components/Airlines';
import AccidentsList from './Components/AccidentsList';
import CalculateRisk from './Components/CalculateRisk';
import Removed from './Components/Removed';
import Bankcruptcy from './Components/Bankcruptcy';
import Registration from './Components/Registration';
import Login from './Components/Login';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      airlines: [],
      value: "main",
      authorize: false
    };
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  componentDidMount() {
    this.authenticateRoutes()
  }

  handleNavigation(value) {
    this.setState({
      value: value
    })
  };

  authenticateRoutes() {
    fetch(`http://192.168.99.100:5000/api/authorizeRoutes`, {
      method: 'POST',
      body: JSON.stringify({
        "email": localStorage.getItem("email"),
        "password": localStorage.getItem("token")
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => this.setState({
        authorize: response.success === true ? true : false,
      }))
      .catch(error => console.error('Error:', error));
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }
  render() {
    const { value, authorize } = this.state;

    return (
      <div className="d-flex" id="wrapper" >

        < div className="bg-light border-right" id="sidebar-wrapper" >
          <div className="sidebar-heading">Mobitair</div>
          <div className="list-group list-group-flush">
            <a href="#" onClick={this.handleNavigation.bind(this, "main")} className="list-group-item list-group-item-action bg-light">Dashboard</a>
            <a href="#" onClick={this.handleNavigation.bind(this, "airlines")} className="list-group-item list-group-item-action bg-light">Airlines</a>
            <a href="#" onClick={this.handleNavigation.bind(this, "accidents")} className="list-group-item list-group-item-action bg-light">Add Accidents</a>
            <a href="#" onClick={this.handleNavigation.bind(this, "accidents_list")} className="list-group-item list-group-item-action bg-light">Accidents List</a>
            <a href="#" onClick={this.handleNavigation.bind(this, "bankcruptcy")} className="list-group-item list-group-item-action bg-light">Add Bancruptcy</a>
            <a href="#" onClick={this.handleNavigation.bind(this, "removed")} className="list-group-item list-group-item-action bg-light">Removed Airlines</a>
            <a href="#" onClick={this.handleNavigation.bind(this, "calculate")} className="list-group-item list-group-item-action bg-light">Calculate Risk</a>
          </div>
        </div>
        <div id="page-content-wrapper">
          <Registration />
          <Login />
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Hi {localStorage.getItem("token") !== null ? localStorage.getItem("email") : "User"}
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#login">Login</a>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#registration">Register</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" onClick={this.logout}>Exit</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          {authorize === true &&
            <div>
              {value === "main" ? (
                <Welcome />
              ) : null}
              {value === "airlines" ? (
                <Airlines />
              ) : null}
              {value === "accidents" ? (
                <Accidents />
              ) : null}
              {value === "accidents_list" ? (
                <AccidentsList />
              ) : null}
              {value === "bankcruptcy" ? (
                <Bankcruptcy />
              ) : null}
              {value === "removed" ? (
                <Removed />
              ) : null}
              {value === "calculate" ? (
                <CalculateRisk />
              ) : null}
            </div>
          }
        </div>
      </div >

    );
  }
}

