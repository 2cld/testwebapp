import React from 'react';
import { Card, Grid, Header, Image, Segment, Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

const panes = [
  {menuItem: 'All Sessions', pane: {key: 'allSessions'}},
  {menuItem: 'Past Sessions', pane: {key: 'pastSessions'}},
  {menuItem: 'Future Sessions', pane: {key: 'futureSessions'}},
  {menuItem: 'Hosting', pane: {key: 'hosted'}},
];
const UserDeteiledSessions = ({ sessions, sessionsLoading, changeTab }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon="calendar" content="Sessions" />
        <Tab onTabChange={(e, data) => changeTab(e, data)} panes={panes} menu={{secondary: true, pointing: true}}/>
        <br/>

        <Card.Group itemsPerRow={5}>
          {sessions &&
            sessions.map(session => (
              <Card as={Link} to={`/session/${session.id}`} key={session.id}>
                <Image src={`/assets/categoryImages/${session.category}.jpg`} />
                <Card.Content>
                  <Card.Header textAlign="center">{session.title}</Card.Header>
                  <Card.Meta textAlign="center">
                    <div>{format(session.date.toDate(), 'DD MMM YYYY')}</div>
                    <div>{format(session.date.toDate(), 'h:mm A')}</div>
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))}
        </Card.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDeteiledSessions;
