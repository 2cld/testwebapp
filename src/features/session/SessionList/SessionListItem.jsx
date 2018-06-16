import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import SessionListAttendee from './SessionListAttendee';
import { objectToArray } from '../../../app/common/util/helpers';

class SessionListItem extends Component {
  render() {
    const {session /*, deleteSession */} = this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={session.hostPhotoURL} />
              <Item.Content>
                <Item.Header as={Link} to={`/session/${session.id}`}>{session.title}</Item.Header>
                <Item.Description>
                  GooberU by <Link to={`/profile/${session.hostUid}`}>{session.hostedBy}</Link>
                </Item.Description>
                {session.cancelled &&
                <Label style={{top: '-40px'}} ribbon='right' color='red' content='This session has been cancelled'/>}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
          <Icon name="clock" /> {format(session.date.toDate(), 'dddd Do MMMM')} at {format(session.date.toDate(), 'HH:mm')}|
            <Icon name="marker" /> {session.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
          {session.attendees && objectToArray(session.attendees).map((attendee) => (
            <SessionListAttendee key={attendee.id} attendee={attendee}/>
          ))}
          </List>
        </Segment>
        <Segment clearing>
        <span>{session.description}</span>
          {/*<Button onClick={deleteSession(session.id)} as="a" color="red" floated="right" content="Delete" />*/}
          <Button as={Link} to={`/session/${session.id}`} color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default SessionListItem;