import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    // needed b/c value of 'this' changes in between {this.onInputChange} and actual function
    // binding SearchBar to onInputChange so it's passed correctly
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // prevents form submission/page refresh after search input entry
    event.preventDefault();
    // calls function from action creator
    this.props.fetchWeather(this.state.term);
    // resets the search term to empty string
    this.setState({ term: '' });
  }

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
// null b/c don't need state, and mapDispatchToProps has to be second argument
export default connect(null, mapDispatchToProps)(SearchBar);