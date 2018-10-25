import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        this.setState({
            term: event.target.value,
        });
        // console.log(this.state.term);
    }
    onFormSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}