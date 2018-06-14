import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const SessionActivity = () => {
  return (
    <div>
      <Header attached='top' content='Recent Activity'/>
      <Segment attached>
        <p>Recent activity</p>
      </Segment>
    </div>
  )
};

export default SessionActivity