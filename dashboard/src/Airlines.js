import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './toggle.js';

export default class Airlines extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            airlines: [],
            value: "select"
        };
        this.change = this.change.bind(this);

    }

    componentDidMount() {
        this.orderMethod(`http://192.168.99.100:5000/api/topToWorst`)
    }

    change(event) {
        if (event.target.value === "descending") {
            this.orderMethod(`http://192.168.99.100:5000/api/worstToTop`, event.target.value)
        } else {
            this.orderMethod(`http://192.168.99.100:5000/api/topToWorst`, event.target.value)
        }

    }

    orderMethod(url, event) {
        fetch(url)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    airlines: data,
                    value: event
                })
            )
            .catch(error => this.setState({ error }));
    }

    render() {

        const { airlines, value } = this.state;

        return (
            <div className="container-fluid" >
                <h1 className="mt-4">All the airlines</h1>
                <form className="form-inline">
                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Choose View Order</label>
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={this.change} value={value}>
                        <option value="select">Select</option>
                        <option value="descending">Descending</option>
                        <option value="ascending">Ascending</option>
                    </select>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Ranking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {airlines.map((item, i) =>
                            <React.Fragment>
                                <tr>
                                    <th scope="row">{item.name}</th>
                                    <td >{item.address}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.ranking}</td>
                                </tr>
                            </React.Fragment>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
