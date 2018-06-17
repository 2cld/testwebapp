import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import cuid from 'cuid';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import { createSubject, updateSubject } from '../subjectActions';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';

const mapState = (state, ownProps) => {
  const subjectId = ownProps.match.params.id;
  let subject = {};
  if (subjectId && state.subjects.length > 0) {
    subject = state.subjects.filter(subject => subject.id === subjectId)[0]
  }
  return { initialValues: subject }
};
const actions = {
  createSubject,
  updateSubject
};
const category = [
  {key: 'physics', text: 'Physics', value: 'physics'},
  {key: 'chemistry', text: 'Chemistry', value: 'chemistry'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'literature', text: 'Literature', value: 'literature'},
  {key: 'math', text: 'Math', value: 'math'},
  {key: 'engieering', text: 'Engineering', value: 'engieering'},
];
const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'Please provide a category'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
});

class SubjectForm extends Component {
  onFormSubmit = values => {
    values.date = moment(values.date).format()
    if (this.props.initialValues.id) {
      this.props.updateSubject(values);
      this.props.history.goBack();
    } else {
      const newSubject = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bob'
      };
      this.props.createSubject(newSubject);
      this.props.history.push('/subjects');
    }
  };

  render() {
    const {invalid, submitting, pristine} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Subject Details'/>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your event a Subject"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is your Subject about"
              />
              <Field
                name="description"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="Tell us about your Subject"
              />
              <Header sub color='teal' content='Subject Location details'/>
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="Subject city"
              />
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Subject venue"
              />
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat='YYYY-MM-DD HH:mm'
                timeFormat='HH:mm'
                showTimeSelect
                placeholder="Date and time of event"
              />
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
    );
  }
};

export default connect(mapState, actions)(
  reduxForm({ form: 'subjectForm', enableReinitialize: true, validate })(SubjectForm)
);
