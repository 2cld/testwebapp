import React, { Component } from 'react';
import { Segment, Item, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class SubjectListItem extends Component {
  render() {
    const { subject } = this.props
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
        <Segment clearing>
          <span>{subject.description}</span>
          <Button as={Link} to={`/subject/${subject.id}`} color="teal" floated="right" content="ViewForm" />
        </Segment>
      </Segment.Group>
    );
  }
};

export default SubjectListItem;
