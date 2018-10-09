/*global google*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withFirestore } from 'react-redux-firebase';
import Script from 'react-load-script';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { createSession, updateSession, cancelToggle } from '../sessionActions';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';
import PlaceInput from '../../../app/common/form/PlaceInput';

const mapState = (state, ownProps) => {
  let session = {};
  if (state.firestore.ordered.sessions && state.firestore.ordered.sessions[0]) {
    session = state.firestore.ordered.sessions[0];
  }
  return {
    initialValues: session,
    session
  };
};
const actions = {
  createSession,
  updateSession,
  cancelToggle
};

const validate = combineValidators({
  title: isRequired({message: 'The session title is required'}),
/*
  category: isRequired({message: 'Please provide a category'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
  */

});

class SessionForm extends Component {
  state = {
    userLatLng: {Lat: 40.000, Lng: 40.000},
    cityLatLng: {},
    venueLatLng: {},
    scriptLoaded: false
  };
  
  async componentDidMount() {
    //const {firestore, match} = this.props;
    //await firestore.setListener(`sessions/${match.params.id}`);
  };
  async componentWillUnmount() {
    //const {firestore, match} = this.props;
    //await firestore.unsetListener(`sessions/${match.params.id}`);
  };

  handleScriptLoaded = () => this.setState({ scriptLoaded: true });
  
  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          cityLatLng: latlng
        });
      })
      .then(() => {
        this.props.change('city', selectedCity)
      })
  };
  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          venueLatLng: latlng
        });
      })
      .then(() => {
        this.props.change('venue', selectedVenue)
      })
  };
  
  onFormSubmit = values => {
    
    values.venueLatLng = this.state.venueLatLng;
    if (this.props.initialValues.id) {
      if (Object.keys(values.venueLatLng).length === 0) {
        values.venueLatLng = this.props.session.venueLatLng
      }
      this.props.updateSession(values);
      //this.props.history.goBack();
    } else {
      this.props.createSession(values);
      //this.props.history.push('/sessions');
    }
    
    //this.props.history.push('/callRalph');
  };

  render() {
    const {invalid, submitting, pristine, session, cancelToggle} = this.props;
    return (
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <div className="ui inverted stackable header">
            <img
              className="ui image massive"
              src="/assets/ralph.jpg"
              alt="logo"
            />
            <div className="content">Just call Ralph</div>
          </div>
      <Grid>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQpU2xxESgXFfCZZV5DgKOLdvFndaGbh8&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        <Grid.Column width={20}>
          <Segment>
            <Header sub color='teal' content='Your Request'/>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Why - Input your request here"
              />
              <Header sub color='teal' content='Optional Details'/>
              <Field
                name="date"
                type="text"
                component={DateInput}
                value={new Date()}
                dateFormat='YYYY-MM-DD HH:mm'
                timeFormat='HH:mm'
                showTimeSelect
                placeholder={new Date()}
              />
              <Field
                name="city"
                type="text"
                component={PlaceInput}
                options={{ types: ['(cities)'] }}
                placeholder="What city - defaults to your location"
                onSelect={this.handleCitySelect}
              />
              {this.state.scriptLoaded &&
              <Field
                name="venue"
                type="text"
                component={PlaceInput}
                options={{
                  location: new google.maps.LatLng(this.state.cityLatLng),
                  radius: 10,
                  types: ['establishment']
                }}
                placeholder="Where to Meetup - OPTIONAL"
                onSelect={this.handleVenueSelect}
              />}
              <Button disabled={invalid || submitting || pristine} positive type="submit">
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>       
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
      </div></div>
    );
  }
};

export default withFirestore(
  connect(mapState, actions)(
    reduxForm({ form: 'sessionForm', enableReinitialize: true, validate })(SessionForm)
  )
);
