import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios'
const mapStyles = {
  width: '50%',
  height: '100%'
};

//click out and click in for marker

export class MapContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this)
    this.onMapClicked = this.onMapClicked.bind(this)
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  onInfoWindowClose() {
    this.setState({showingInfoWindow: false})

  }

  render() {
    return (
      <div >

      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 34.0700,
            lng: -118.4398
          }
        }
        onClick={this.onMapClicked}

      >

        <Marker onClick={this.onMarkerClick}
                name={'UCLA'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'SECRET'
})(MapContainer);
