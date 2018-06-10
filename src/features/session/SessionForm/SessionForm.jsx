import React, { Component } from "react";
import { connect } from 'react-redux';
import cuid from 'cuid';
import { Segment, Form, Button } from "semantic-ui-react";
import { createSession, updateSession } from "../sessionActions";


const mapState = (state, ownProps) => {
  const sessionId = ownProps.match.params.id;
  let session = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  }
  if (sessionId && state.session.lenght > 0) {
    session = state.sessions.filter(session => session.id === sessionId)[0]
  }
  return { session }
}

const actions = {
  createSession,
  updateSession
}

class SessionForm extends Component {
  state = {
    session: Object.assign({}, this.props.session)
  };

  /*
  componentDidMount() {
    if (this.props.selectedSession !== null) {
      this.setState({
        session: this.props.selectedSession
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSession !== this.props.selectedSession) {
      this.setState({
        session: nextProps.selectedSession || emptySession
      });
    }
  }
  */

  onFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.session.id) {
      this.props.updateSession(this.state.session);
      this.props.history.goBack();
    } else {
      const newSession = {
        ...this.state.session,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      }
      this.props.createSession(newSession);
      this.props.history.push('/sessions');
    }
  };

  onInputChange = (evt) => {
    const newSession = this.state.session;
    newSession[evt.target.name] = evt.target.value;
    this.setState({
      session: newSession
    });
  };

  render() {
    const { handleCancel } = this.props;
    const { session } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>session Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={session.title}
              placeholder="session Title"
            />
          </Form.Field>
          <Form.Field>
            <label>session Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={session.date}
              type="date"
              placeholder="session Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={session.city}
              placeholder="City session is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={session.venue}
              placeholder="Enter the Venue of the session"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={session.hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">Submit</Button>
          <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(mapState, actions)(SessionForm);
