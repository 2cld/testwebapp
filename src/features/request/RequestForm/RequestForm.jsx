/*global google*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withFirestore } from 'react-redux-firebase';
import Script from 'react-load-script';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { createRequest, updateRequest, cancelToggle } from '../requestActions';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';
import PlaceInput from '../../../app/common/form/PlaceInput';

const mapState = (state, ownProps) => {
  let request = {};
  if (state.firestore.ordered.requests && state.firestore.ordered.requests[0]) {
    request = state.firestore.ordered.requests[0];
  }
  return {
    initialValues: request,
    request
  };
};
const actions = {
  createRequest,
  updateRequest,
  cancelToggle
};

const validate = combineValidators({
  title: isRequired({message: 'The session title is required'}),
  date: isRequired('date')
});

class RequestForm extends Component {
  state = {
    requestLatLng: {lat: 42.0281254, lng:-93.656040}
  };
  async componentDidMount() {
    //const {firestore, match} = this.props;
    //await firestore.setListener(`sessions/${match.params.id}`);
  };
  async componentWillUnmount() {
    //const {firestore, match} = this.props;
    //await firestore.unsetListener(`sessions/${match.params.id}`);
  };

  /*
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
  */
 
  onFormSubmit = values => {
    values.requestLatLng = this.state.requestLatLng;
    this.props.createRequest(values);
    this.props.history.push('/callRalph');
  };

  render() {
    const {invalid, submitting, pristine} = this.props;
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
        <Grid.Column width={20}>
          <Segment>
            <Header sub color='teal' content='Request a Tutor'/>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Your Request here..."
              />
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
              <Button positive type="submit">
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>       
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
      </div>
      </div>
    );
  }
};

export default withFirestore(
  connect(mapState, actions)(
    reduxForm({ form: 'requestForm', enableReinitialize: true, validate })(RequestForm)
  )
);
