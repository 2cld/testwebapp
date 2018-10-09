import React, { Component } from 'react'
import { Button, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
//import Script from 'react-load-script';
import GoogleMapReact from 'google-map-react';
//import PlacesAutocomplete, {
import {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete'; 
//import { incrementCounter, decrementCounter } from './testActions';
import { incrementAsync, decrementAsync } from './testActions';
import { openModal } from '../modals/modalActions';
//import { makeGenericClientConstructor } from 'grpc';
import { Link } from 'react-router-dom';

const mapState = (state) => ({
  data: state.test.data,
  loading: state.test.loading
})

const actions = {
//  incrementCounter,
//  decrementCounter,
  incrementAsync,
  decrementAsync,
  openModal
}

const markStyle = {
  'font-size': '10px',
  'color': 'red'
}
//const Marker = () => <Icon name='marker' size='big' color='red'><div>Test</div></Icon>
//const Marker = (props) => <Icon name={props.icon} size="huge" color={props.color} ><div style={markStyle} >{props.text}</div></Icon>;


const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

const getMapBounds = (map, maps, attendMarkers) => {
  const bounds = new maps.LatLngBounds();

  attendMarkers.forEach((attendMarker) => {
    bounds.extend(
      new maps.LatLng(attendMarker.location.lat, attendMarker.location.lng),
    );
  });
  return bounds;
};

const apiIsLoaded = (map, maps, attendMarkers) => {
  if (map) {
    const bounds = getMapBounds(map, maps, attendMarkers);
    map.fitBounds(bounds);
    bindResizeListener(map, maps, bounds);
  }
};

class TestComponent extends Component {

  static defaultProps = {
    center: {
      lat: 42.0281254,
      lng: -93.64881409999998
    },
    zoom: 18
  };
  state = {
    address: '',
    scriptLoaded: false,
    attendMarkers: [
      {icon: 'arrow circle right', size: 'massive', color: 'red', text: 'Me', location: {lat: 42.0281254, lng:-93.656040}},
      {icon: 'student', size: 'huge', color: 'green', text: 'Tutor', location: {lat: 42.0281254, lng:-93.64881409999998}},
      {icon: 'student', size: 'large', color: 'yellow', text: 'Tutor 2', location: {lat: 42.028606, lng:-93.649092}},
      {icon: 'student', size: 'med', color: 'blue', text: 'Tutor 3', location: {lat: 42.023144, lng:-93.656040}},
      {icon: 'student', size: 'small', color: 'blue', text: 'Tutor 4', location: {lat: 42.023447, lng:-93.650750}},
    ]
  };
  //- make sure script is loaded before you use
  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };
  //- add geo details to submit
  handleFormSubmit = event => {
      event.preventDefault();
      geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
  //- update selectbox as typing
  onChange = address => this.setState({ address });

  render() {
    /* 
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }; */
//    const {incrementCounter, decrementCounter, data, openModal} = this.props;
    const {incrementAsync, decrementAsync, data, openModal, loading} = this.props;
    return (
      <div >
      <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDQpU2xxESgXFfCZZV5DgKOLdvFndaGbh8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
//          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded= {({ map, maps }) => apiIsLoaded(map, maps, this.state.attendMarkers)} >
      
        { this.state.attendMarkers && 
          this.state.attendMarkers.length !== 0 && 
          this.state.attendMarkers.map((attendLoc) => (
            <Icon 
              lat={attendLoc.location.lat} 
              lng={attendLoc.location.lng} 
              name={attendLoc.icon} 
              size={attendLoc.size} 
              color={attendLoc.color} >
              <div style={markStyle} >{attendLoc.text}</div>
            </Icon>
            )
          )}
        {/*
          <Marker lat={lat} lng={lng} icon='user doctor' color='blue' text='Tree'/>
          <Marker lat={otherlat} lng={otherlng} icon='pied piper alternate' color='yellow' text='CY'/>
          <Marker lat={otherlat2} lng={otherlng2} icon='chevron down' color='green' text='meetup location'/>
          <Marker
            lat={42.0281254}
            lng={-93.64881409999998}
            text={'Kreyser Avrora'}
          />
        */}

        </GoogleMapReact>
      </div>
      <Button
              style={{position: 'absolute', zIndex: '100'}}
              as={Link}
              to="/session/mteJp73uAy0D7KUeiwc4"
              floated="right"
              positive
              inverted
              color='red'
              content="Tutors Notified: 4 - Waiting for responce"
            />
      </div>
    )
  }
};

export default connect(mapState, actions)(TestComponent);
