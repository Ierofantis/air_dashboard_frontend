import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CalculateRisk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            airlines: [],
            airlineRanking: null,
            startDate: new Date(),
            weather: "rainy",
            risk: null
        };
        this.handleAirlineRanking = this.handleAirlineRanking.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.calculateRisk = this.calculateRisk.bind(this);
    }

    componentDidMount() {
        this.getAirlines()
    }

    handleDate(date) {
        let items = ['rainy', 'cloudy', 'snowy', 'sunny', 'other'];
        this.setState({
            startDate: date,
            weather: items[Math.floor(Math.random() * items.length)]
        });
    };


    handleAirlineRanking(event) {
        this.setState({
            airlineRanking: event.target.value,
        })
    }

    getAirlines() {
        fetch(`${process.env.REACT_APP_HOST}:5000/api/topToWorst`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    airlines: data,
                })
            )
            .catch(error => this.setState({ error }));
    }

    calculateRisk() {
        fetch(`${process.env.REACT_APP_HOST}:5000/api/calculateRisk`, {
            method: 'POST',
            body: JSON.stringify({
                "airlineRanking": this.state.airlineRanking,
                "condition": this.state.weather
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => res.json())
            .then(response => this.setState({
                risk: response.risk_index,
            }))
            .catch(error => console.error('Error:', error));
    }

    render() {
        const { airlines, airlineRanking, startDate, risk } = this.state;

        return (
            <div className="container-fluid">
                <h1 className="mt-4">CalculateRisk</h1>
                <form className="form-inline" >
                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Airlines</label>
                    <select className="custom-select my-1 mr-sm-2" id="selectAirline" onChange={this.handleAirlineRanking} value={airlineRanking} required>
                        <option value="select" selected>Choose airline</option>
                        {airlines.map((item, i) =>
                            <option key={i} value={item.ranking}>{item.name}</option>
                        )}
                    </select>
                    <DatePicker
                        selected={startDate}
                        onChange={this.handleDate}
                    />
                    <button type="submit" className="btn btn-primary my-1" onClick={this.calculateRisk}>Submit</button>
                </form>
                {risk != null &&
                    <div class="alert alert-success">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
                            ×</button>
                        <span class="glyphicon glyphicon-ok"></span> <strong>The risk index is</strong>
                        <hr class="message-inner-separator" />
                        <p>
                            {risk}</p>
                    </div>
                }
            </div>
        );
    }
}
