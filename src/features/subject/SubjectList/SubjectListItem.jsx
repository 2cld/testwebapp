import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import SubjectListProvider from './SubjectListProvider'

class SubjectListItem extends Component {
  render() {
    const {subject} = this.props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={subject.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{subject.title}</Item.Header>
                <Item.Description>
                  GooberU by <a>{subject.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {subject.date}|
            <Icon name="marker" /> {subject.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
          {subject.attendees.map((attendee) => (
            <SubjectListProvider key={attendee.id} attendee={attendee}/>
          ))}

          </List>
        </Segment>
        <Segment clearing>
        <span>{subject.description}</span>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default SubjectListItem;