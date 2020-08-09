import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './toggle.js';

function Welcome() {
    return (
        <div className="container-fluid">
            <h1 className="mt-4">Mobitair's dashboard</h1>
            <p>Mobitair is a company that specializes in providing information to air travelers about the safety
of their trips.</p>
            <p>Make sure that you are logged in to make any operation</p>
        </div>
    );
}

export default Welcome;
