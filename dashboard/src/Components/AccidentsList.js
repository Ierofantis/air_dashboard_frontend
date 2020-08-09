import React from 'react';

export default class AccidentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accidents: []
        };

    }

    componentDidMount() {
        this.getAccidents()
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
                                    <th scope="row">{item.airlineId}</th>
                                    <td >{item.accidents}</td>
                                </tr>
                            </React.Fragment>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
