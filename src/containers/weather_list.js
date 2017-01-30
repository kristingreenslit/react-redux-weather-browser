import React, { Component } from 'react';
import { connect } from 'react-redux';

// removed b/c no longer exporting just WeatherList as the default
// export default class WeatherList extends Component {
class WeatherList extends Component {
  
  renderWeather(cityData) {
    const name = cityData.city.name;
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

	render() {
		return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
		);
	}
}

// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

// function mapStateToProps({ weather }) {
//   return { weather: weather };
// }

// ES6 refactor of the above functions
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);