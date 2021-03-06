import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
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

const Marker = () => <Icon name='marker' size='big' color='red'/>

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
    scriptLoaded: false
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
      <div>
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <Button loading={loading} onClick={incrementAsync} color='green' content='Increment' />
        <Button loading={loading} onClick={decrementAsync} color='red' content='Decrement' />
        <Button onClick={() => openModal('TestModal', {data: 42})} color="teal" content="Open Modal" />
        <br />
        <hr />
        <br />
        {/* 
        <Script
                url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQpU2xxESgXFfCZZV5DgKOLdvFndaGbh8&libraries=places"
                onLoad={this.handleScriptLoad}
                />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type="submit">Submit</button>
        </form>*/}
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDQpU2xxESgXFfCZZV5DgKOLdvFndaGbh8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={42.0281254}
            lng={-93.64881409999998}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
      </div>
    )
  }
};

export default connect(mapState, actions)(TestComponent);
