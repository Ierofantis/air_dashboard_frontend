import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './toggle.js';

export default class Accidents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            airlines: [],
        };

    }

    componentDidMount() {
        fetch(`http://192.168.99.100:5000/api/topToWorst`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    airlines: data,
                })
            )
            .catch(error => this.setState({ error }));
    }

    render() {
        const { airlines, value } = this.state;

        return (
            <div className="container-fluid">
                <h1 className="mt-4">Add accident</h1>
                <form className="form-inline">
                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Airlines</label>
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected>Choose...</option>
                        {airlines.map((item, i) =>
                            <option key={i} value={item}>{item.name}</option>
                        )}
                    </select>

                    <button type="submit" className="btn btn-primary my-1">Submit</button>
                </form>
            </div>
        );
    }
}
