import React from 'react';

export default class Accidents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            airlines: [],
            airlineValue: null,
            accidentFault: null,
            statusCreated: null,

        };
        this.handleAirlineValue = this.handleAirlineValue.bind(this);
        this.handleAirlineFault = this.handleAirlineFault.bind(this);
        this.addAccident = this.addAccident.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
    }

    componentDidMount() {
        this.getAirlines()
    }

    getAirlines() {
        fetch(`http://192.168.99.100:5000/api/topToWorst`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    airlines: data,
                })
            )
            .catch(error => this.setState({ error }));
    }

    handleAirlineValue(event) {
        this.setState({
            airlineValue: event.target.value,
        })
    }

    handleAirlineFault(event) {
        console.log(event.target.value)
        this.setState({
            accidentFault: event.target.value,
        })
    }

    handleStatus(event) {
        this.setState({
            statusCreated: event.target.value,
        })
    }

    addAccident() {
        fetch(`http://192.168.99.100:5000/api/addAccident`, {
            method: 'POST',
            body: JSON.stringify({
                "accident": this.state.accidentFault,
                "airlineId": this.state.airlineValue
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', this.setState({
                statusCreated: response.msg,
            })))
            .catch(error => console.error('Error:', error));
    }

    render() {
        const { airlines, airlineValue, accidentFault, statusCreated } = this.state;

        return (
            <div className="container-fluid">
                <h1 className="mt-4">Add accident</h1>
                <form className="form-inline" >
                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Airlines</label>
                    <select className="custom-select my-1 mr-sm-2" id="selectAirline" onChange={this.handleAirlineValue} value={airlineValue} required>
                        <option value="select" selected>Choose airline</option>
                        {airlines.map((item, i) =>
                            <option key={i} value={item.id}>{item.name}</option>
                        )}
                    </select>
                    <select className="custom-select my-1 mr-sm-2" id="selectFault" onChange={this.handleAirlineFault} value={accidentFault} required>
                        <option value="select" selected>Choose fault</option>
                        <option value="other">Other</option>
                        <option value="people">People</option>
                        <option value="machine">Machine</option>
                        <option value="systems">Systems</option>
                    </select>
                    <button type="submit" className="btn btn-primary my-1" onClick={this.addAccident}>Submit</button>
                </form>
                {statusCreated != null &&
                    <div class="alert alert-success">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
                            ×</button>
                        <span class="glyphicon glyphicon-ok"></span> <strong>Success Message</strong>
                        <hr class="message-inner-separator" />
                        <p>
                            {statusCreated}</p>
                    </div>
                }
            </div>
        );
    }
}
