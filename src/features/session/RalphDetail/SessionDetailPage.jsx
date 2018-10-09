import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { withFirestore, isEmpty, firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import SessionDetailHeader from './SessionDetailHeader';
import SessionDetailInfo from './SessionDetailInfo';
import SessionDetailChat from './SessionDetailChat';
import SessionDetailSidebar from './SessionDetailSidebar';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { objectToArray, createDataTree } from '../../../app/common/util/helpers';
import { goingToSession, cancelGoingToSession } from '../../user/userActions';
import { addSessionComment } from '../sessionActions';

const mapState = (state, ownProps) => {
  let session = {};
  if (state.firestore.ordered.sessions && state.firestore.ordered.sessions[0]) {
    session = state.firestore.ordered.sessions[0];
  }
  return {
    requesting: state.firestore.status.requesting,
    session,
    auth: state.firebase.auth,
    sessionChat:
      !isEmpty(state.firebase.data.session_chat) &&
      objectToArray(state.firebase.data.session_chat[ownProps.match.params.id])
  };
};
const actions = {
  goingToSession,
  cancelGoingToSession,
  addSessionComment
};

class SessionDetailPage extends Component {
  async componentDidMount() {
    const { firestore, match } = this.props;
    let session = await firestore.get(`sessions/${match.params.id}`);
    if (!session.exists) {
      toastr.error('Not found', 'Event does not exist.');
      this.props.history.push('/error');
    }
    await firestore.setListener(`sessions/${match.params.id}`);
  };
  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`sessions/${match.params.id}`);
  };

  render() {
    const { session, auth, goingToSession, cancelGoingToSession, addSessionComment, sessionChat, requesting, match } = this.props;
    const attendees =
      session && session.attendees && objectToArray(session.attendees);
    const isHost = session.hostUid === auth.uid;
    const isGoing = attendees && attendees.some(a => a.id === auth.uid);
    const chatTree = !isEmpty(sessionChat)  && createDataTree(sessionChat);
    const loadingSession = requesting[`sessions/${match.params.id}`];
    if (loadingSession) return <LoadingComponent inverted={true}/>
    return (
          <SessionDetailChat sessionChat={chatTree} addSessionComment={addSessionComment} sessionId={session.id}/>
    );
  }
};

export default compose(
  withFirestore,
  connect(mapState, actions),
  firebaseConnect(props => [`session_chat/${props.match.params.id}`])
)(SessionDetailPage);
