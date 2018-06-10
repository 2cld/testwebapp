import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import SessionDetailHeader from './SessionDetailHeader';
import SessionDetailInfo from './SessionDetailInfo';
import SessionDetailChat from './SessionDetailChat';
import SessionDetailSidebar from './SessionDetailSidebar';

const mapState = (state, ownProps) => {
  const sessionId = ownProps.match.params.id;
  let session = {};
  if (sessionId && state.sessions.length > 0) {
    session = state.sessions.filter(session => session.id === sessionId)[0];
  }
  return { session };
};

const SessionDetailPage = ({session}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <SessionDetailHeader session={session} />
        <SessionDetailInfo session={session} />
        <SessionDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <SessionDetailSidebar attendees={session.attendees}/>
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(SessionDetailPage);
