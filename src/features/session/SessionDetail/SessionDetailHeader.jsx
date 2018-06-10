import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const sessionImageStyle = {
    filter: 'brightness(30%)'
};

const sessionImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const SessionDetailHeader = ({session}) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image src={`/assets/categoryImages/${session.category}.jpg`} fluid style={sessionImageStyle} />

        <Segment basic style={sessionImageTextStyle}>
        <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={session.title}
                  style={{ color: 'white' }}
                />
                <p>{session.date}</p>
                <p>
                  Hosted by <strong>{session.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS session</Button>

        <Button as={Link} to={`/manage/${session.id}`} color="orange" floated="right">
          Manage session
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default SessionDetailHeader;