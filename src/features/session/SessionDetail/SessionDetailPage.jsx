import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import SessionDetailHeader from './SessionDetailHeader';
import SessionDetailInfo from './SessionDetailInfo';
import SessionDetailChat from './SessionDetailChat';
import SessionDetailSidebar from './SessionDetailSidebar';
import { objectToArray } from '../../../app/common/util/helpers';
import { goingToSession, cancelGoingToSession } from '../../user/userActions';

const mapState = state => {
  let session = {};
  if (state.firestore.ordered.sessions && state.firestore.ordered.sessions[0]) {
    session = state.firestore.ordered.sessions[0];
  }
  return {
    session,
    auth: state.firebase.auth
  };
};

const actions = {
  goingToSession,
  cancelGoingToSession
};

class SessionDetailPage extends Component {
  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`sessions/${match.params.id}`);
  }

  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`sessions/${match.params.id}`);
  }

  render() {
    const { session, auth, goingToSession, cancelGoingToSession } = this.props;
    const attendees =
      session && session.attendees && objectToArray(session.attendees);
    const isHost = session.hostUid === auth.uid;
    const isGoing = attendees && attendees.some(a => a.id === auth.uid);
    return (
      <Grid>
        <Grid.Column width={10}>
          <SessionDetailHeader
            session={session}
            isHost={isHost}
            isGoing={isGoing}
            goingToSession={goingToSession}
            cancelGoingToSession={cancelGoingToSession}
          />
          <SessionDetailInfo session={session} />
          <SessionDetailChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <SessionDetailSidebar attendees={attendees} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default withFirestore(connect(mapState, actions)(SessionDetailPage));

/* old pre firestore
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
*/