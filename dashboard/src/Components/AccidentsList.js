import React from 'react';
import jwtDecode from 'jwt-decode';

export default class AccidentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accidents: [],
            token: localStorage.getItem("token")
        };
    }

    componentDidMount() {
        this.getAccidents()
        var decoded = jwtDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTcwNjIyMzl9.8sRTbQEXyPq_2u03nk9_MGOKlsWvC4W0OZcYww9RqKM');
        console.log("token", decoded);
    }

    getAccidents() {
        fetch(`http://192.168.99.100:5000/api/getTheAccidents `)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    accidents: data,
                })
            )
            .catch(error => this.setState({ error }));
    }

    render() {
        const { accidents } = this.state;

        return (
            <div className="container-fluid">
                <h1 className="mt-4">All the accidents</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">AirlineId</th>
                            <th scope="col">Accident</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accidents.map((item, i) =>
                            <React.Fragment>
                                <tr>
                                    <th scope="row">{item.name}</th>
                                    <td> {item.accidents.length > 0 ? JSON.stringify(item.accidents) : "No accident"}</td>
                                </tr>

                            </React.Fragment>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
