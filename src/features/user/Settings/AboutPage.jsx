import React from 'react';
import { Button, Divider, Form, Header, Segment } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import RadioInput from '../../../app/common/form/RadioInput';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import PlaceInput from '../../../app/common/form/PlaceInput';
import SelectInput from '../../../app/common/form/SelectInput';

const interests = [
  {key: 'physics', text: 'Physics', value: 'physics'},
  {key: 'chemistry', text: 'Chemistry', value: 'chemistry'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'literature', text: 'Literature', value: 'literature'},
  {key: 'math', text: 'Math', value: 'math'},
  {key: 'engieering', text: 'Engineering', value: 'engieering'},
];

const AboutPage = ({ pristine, submitting, handleSubmit, updateProfile }) => {
  return (
    <Segment>
      <Header dividing size="large" content="About Me" />
      <p>Complete your profile to get the most out of this site</p>
      <Form onSubmit={handleSubmit(updateProfile)}>
        <Form.Group inline>
          <label>Your GooberU status: </label>
          <Field name="status" component={RadioInput} type="radio" value="freshman" label="Freshman" />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="sophomore"
            label="Sophomore"
          />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="junior"
            label="Junior"
          />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="senior"
            label="Senior"
          />
         <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="postgrad"
            label="Post Graduate"
          />
        </Form.Group>
        <Divider />
        <label>Tell us about yourself</label>
        <Field name="about" component={TextArea} placeholder="About Me" />
        <Field
          name="interests"
          component={SelectInput}
          options={interests}
          value="interests"
          multiple={true}
          placeholder="Select your interests"
        />
        <Field
          width={8}
          name="occupation"
          type="text"
          component={TextInput}
          placeholder="Occupation"
        />
        <Field
          width={8}
          name="origin"
          options={{ types: ['(regions)'] }}
          component={PlaceInput}
          placeholder="Country of Origin"
        />
        <Divider />
        <Button disabled={pristine || submitting} size="large" positive content="Update Profile" />
      </Form>
    </Segment>
  );
};

export default reduxForm({ form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false })(AboutPage);