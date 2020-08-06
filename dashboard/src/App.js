import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './toggle.js';

function App() {
  return (
    <div className="d-flex" id="wrapper">
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Mobitair</div>
        <div className="list-group list-group-flush">
          <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Airlines overview (reports/ranking)</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">Add accident</a>
        </div>
      </div>
      <div id="page-content-wrapper">

        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hi User
               </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Login</a>

                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Exit</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid">
          <h1 className="mt-4">Mobitair's dashboard</h1>
          <p>Mobitair is a company that specializes in providing information to air travelers about the safety
of their trips.</p>
          <p>Make sure that you are logged in to make any operation</p>
        </div>
      </div>
    </div>

  );
}

export default App;
