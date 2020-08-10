import React from 'react';

export default class Removed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            removed: []
        };
    }

    componentDidMount() {
        this.getAccidents()
    }

    getAccidents() {
        fetch(`http://192.168.99.100:5000/api/getAllRemovedAirlines `)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    removed: data,
                })
            )
            .catch(error => this.setState({ error }));
    }

    render() {
        const { removed } = this.state;

        return (
            <div className="container-fluid">
                <h1 className="mt-4">Removed Airlines</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Airline</th>
                            <th scope="col">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {removed.map((item, i) =>
                            <React.Fragment>
                                <tr>
                                    <th scope="row">{item.name}</th>
                                    <td >{item.contact}</td>
                                </tr>
                            </React.Fragment>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
