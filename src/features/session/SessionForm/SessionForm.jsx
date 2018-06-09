import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class SessionForm extends Component {
  render() {
    const {handleCancel} = this.props;
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Session Title</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Session Date</label>
            <input type="date" placeholder="Session Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="City Session is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input placeholder="Enter the Venue of the Session" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default SessionForm;