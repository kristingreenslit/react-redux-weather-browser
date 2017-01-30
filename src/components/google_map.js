import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
	render() {
    // this.refs.map above pulls in the map HTML element
    // ref helps third party libraries interact with React
    return <div ref="map" />;
  }
}

export default GoogleMap;