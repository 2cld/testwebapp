import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SessionListAttendee from './SessionListAttendee'

class SessionListItem extends Component {
  render() {
    const {session, deleteSession} = this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={session.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{session.title}</Item.Header>
                <Item.Description>
                  GooberU by <a>{session.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {session.date}|
            <Icon name="marker" /> {session.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
          {session.attendees && session.attendees.map((attendee) => (
            <SessionListAttendee key={attendee.id} attendee={attendee}/>
          ))}
          </List>
        </Segment>
        <Segment clearing>
        <span>{session.description}</span>
          <Button onClick={deleteSession(session.id)} as="a" color="red" floated="right" content="Delete" />
          <Button as={Link} to={`/session/${session.id}`} color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default SessionListItem;