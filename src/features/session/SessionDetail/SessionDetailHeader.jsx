import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

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
const SessionDetailHeader = ({session, isHost, isGoing, goingToSession, cancelGoingToSession}) => {
  let sessionDate;
  if (session.date) {
    sessionDate = session.date.toDate();
  }
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
                <p>{format(sessionDate, 'dddd Do MMMM')}</p>
                <p>
                  Hosted by <strong>{session.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment attached="bottom" >
        {!isHost && (
          <div>
            {isGoing ? (
              <Button onClick={() => cancelGoingToSession(session)}>Cancel My Place</Button>
            ) : (
              <Button onClick={() => goingToSession(session)} color="teal">JOIN THIS EVENT</Button>
            )}
          </div>
        )}
        {isHost && (
        <Button as={Link} to={`/manage/${session.id}`} color="orange" floated="right">
          Manage GooberU Session
        </Button>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default SessionDetailHeader;
