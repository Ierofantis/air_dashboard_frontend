import React from 'react';

export default class Bankcruptcy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            airlines: [],
            airlineValueBankcrupt: null,
            statusBankcrupt: null,
            statusCreatedBankcrupt: null,
        };
        this.addBankcruptcy = this.addBankcruptcy.bind(this);

        this.handleAirlineValueBankcrupt = this.handleAirlineValueBankcrupt.bind(this);
        this.handleStatusBankcrupt = this.handleStatusBankcrupt.bind(this);
    }

    componentDidMount() {
        this.getAirlines()
    }

    getAirlines() {
        fetch(`http://192.168.99.100:5000/api/getAllAirlines`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    airlines: data,
                })
            )
            .catch(error => this.setState({ error }));
    }

    handleAirlineValueBankcrupt(event) {
        this.setState({
            airlineValueBankcrupt: event.target.value,
        })
    }

    handleStatusBankcrupt(event) {
        this.setState({
            statusBankcrupt: event.target.value,
        })
    }

    addBankcruptcy() {
        fetch(`http://192.168.99.100:5000/api/addBankcruptcy`, {
            method: 'POST',
            body: JSON.stringify({
                "status": this.state.statusBankcrupt,
                "airlineId": this.state.airlineValueBankcrupt
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', this.setState({
                statusCreatedBankcrupt: JSON.stringify(response),
            })))
            .catch(error => console.error('Error:', error));
    }

    render() {
        const { airlines, airlineValueBankcrupt, statusBankcrupt, statusCreatedBankcrupt } = this.state;

        return (
            <div className="container-fluid">
                <h1 className="mt-4">Add or Remove bankcruptcy</h1>
                <form className="form-inline" >
                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Airlines</label>
                    <select className="custom-select my-1 mr-sm-2" id="airlineValueBankcrupt" onChange={this.handleAirlineValueBankcrupt} value={airlineValueBankcrupt} required>
                        <option value="select" selected>Choose airline</option>
                        {airlines.map((item, i) =>
                            <option key={i} value={item.id}>{item.name}</option>
                        )}
                    </select>
                    <select className="custom-select my-1 mr-sm-2" id="statusBankcrupt" onChange={this.handleStatusBankcrupt} value={statusBankcrupt} required>
                        <option value="select" selected>Choose state</option>
                        <option value="true">Add</option>
                        <option value="false">Remove</option>
                    </select>
                    <button type="submit" className="btn btn-primary my-1" onClick={this.addBankcruptcy}>Submit</button>
                </form>
                {statusCreatedBankcrupt}
            </div>
        );
    }
}
