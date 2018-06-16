/*global google*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withFirestore } from 'react-redux-firebase';
//import moment from 'moment';
//import cuid from 'cuid';
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
/* old
const mapState = (state, ownProps) => {
  const sessionId = ownProps.match.params.id;
  let session = {};
  if (sessionId && state.sessions.length > 0) {
    session = state.sessions.filter(session => session.id === sessionId)[0]
  }
  return { initialValues: session, session  }
}
*/

const actions = {
  createSession,
  updateSession,
  cancelToggle
}

const category = [
  {key: 'physics', text: 'Physics', value: 'physics'},
  {key: 'chemistry', text: 'Chemistry', value: 'chemistry'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'literature', text: 'Literature', value: 'literature'},
  {key: 'math', text: 'Math', value: 'math'},
  {key: 'engineering', text: 'Engineering', value: 'engineering'},
];

const validate = combineValidators({
  title: isRequired({message: 'The session title is required'}),
  category: isRequired({message: 'Please provide a category'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
});

class SessionForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {},
    scriptLoaded: false
  };
  async componentDidMount() {
    const {firestore, match} = this.props;
    await firestore.setListener(`sessions/${match.params.id}`);
  }

  async componentWillUnmount() {
    const {firestore, match} = this.props;
    await firestore.unsetListener(`sessions/${match.params.id}`);
  }

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
  /* Old pre firestore
  onFormSubmit = values => {
    values.date = moment(values.date).format();
    values.venueLatLng = this.state.venueLatLng;
    if (this.props.initialValues.id) {
      this.props.updateSession(values);
      this.props.history.goBack();
    } else {
      const newSession = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bob'
      };
      this.props.createSession(newSession);
      this.props.history.push('/sessions');
    }
  }; */
  onFormSubmit = values => {
    values.venueLatLng = this.state.venueLatLng;
    if (this.props.initialValues.id) {
      if (Object.keys(values.venueLatLng).length === 0) {
        values.venueLatLng = this.props.session.venueLatLng
      }
      this.props.updateSession(values);
      this.props.history.goBack();
    } else {
      this.props.createSession(values);
      this.props.history.push('/sessions');
    }
  };

  render() {
    const {invalid, submitting, pristine, session, cancelToggle} = this.props;
    return (
      <Grid>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQpU2xxESgXFfCZZV5DgKOLdvFndaGbh8&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Session Details'/>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your event a Session"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is your Session about"
              />
              <Field
                name="description"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="Tell us about your Session"
              />
              <Header sub color='teal' content='Session Location details'/>
              {/* Pre-PlaceInput
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="Session city"
              />*/}
              <Field
                name="city"
                type="text"
                component={PlaceInput}
                options={{ types: ['(cities)'] }}
                placeholder="Event city"
                onSelect={this.handleCitySelect}
              />
              {/* Pre-PlaceInput
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Session venue"
              />
              />*/}
              {this.state.scriptLoaded &&
              <Field
                name="venue"
                type="text"
                component={PlaceInput}
                options={{
                  location: new google.maps.LatLng(this.state.cityLatLng),
                  radius: 1000,
                  types: ['establishment']
                }}
                placeholder="Event venue"
                onSelect={this.handleVenueSelect}
              />}
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat='YYYY-MM-DD HH:mm'
                timeFormat='HH:mm'
                showTimeSelect
                placeholder="Date and time of session"
              />
              <Button disabled={invalid || submitting || pristine} positive type="submit">
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
              <Button
                onClick={() => cancelToggle(!session.cancelled, session.id)}
                type='button'
                color={session.cancelled ? 'green' : 'red'}
                floated='right'
                content={session.cancelled ? 'Reactivate Event' : 'Cancel Event'}
              />        
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withFirestore(
  connect(mapState, actions)(
    reduxForm({ form: 'sessionForm', enableReinitialize: true, validate })(SessionForm)
  )
);
