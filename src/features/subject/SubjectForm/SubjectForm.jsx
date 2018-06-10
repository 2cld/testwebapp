import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptySubject = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''
}

class SubjectForm extends Component {

  state = {
    subject: emptySubject
  }

  componentDidMount() {
    if (this.props.selectedSubject !== null) {
      this.setState({
        subject: this.props.selectedSubject
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubject !== this.props.selectedSubject) {
      this.setState({
        subject: nextProps.selectedSubject || emptySubject
      })
    }
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.subject.id) {
      this.props.updateSubject(this.state.subject);
    } else {
      this.props.createSubject(this.state.subject)
    }

  }

  onInputChange = (evt) => {
    const newSubject = this.state.subject;
    newSubject[evt.target.name] = evt.target.value
    this.setState({
      subject: newSubject
    })
  }

  render() {
    const {handleCancel} = this.props;
    const {subject} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Subject Title</label>
            <input name='title' onChange={this.onInputChange} value={subject.title} placeholder="Subject Title" />
          </Form.Field>
          {/*
          <Form.Field>
            <label>Subject Date</label>
            <input name='date' onChange={this.onInputChange} value={subject.date} type="date" placeholder="Subject Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' onChange={this.onInputChange} value={subject.city} placeholder="City subject is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' onChange={this.onInputChange} value={subject.venue} placeholder="Enter the Venue of the subject" />
          </Form.Field>
          */}
          <Form.Field>
            <label>GooberU Host</label>
            <input name='hostedBy' onChange={this.onInputChange} value={subject.hostedBy} placeholder="Enter the name of person hosting" />
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

export default SubjectForm;