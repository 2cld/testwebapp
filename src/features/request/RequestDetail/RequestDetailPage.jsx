import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withFirestore, isEmpty, firebaseConnect } from 'react-redux-firebase';
import RequestDetailChat from './RequestDetailChat';
import { compose } from 'redux';
import { objectToArray, createDataTree } from '../../../app/common/util/helpers';
import { goingToSession, cancelGoingToSession } from '../../user/userActions';
import { addRequestComment } from '../requestActions';

const mapState = (state, ownProps) => {
  let request = {};
  if (state.firestore.ordered.requests && state.firestore.ordered.requests[0]) {
    request = state.firestore.ordered.requests[0];
  }
  return {
    request,
    auth: state.firebase.auth,
    requestChat:
      !isEmpty(state.firebase.data.request_chat) &&
      objectToArray(state.firebase.data.request_chat[ownProps.match.params.id])
  };
};
const actions = {
  goingToSession,
  cancelGoingToSession,
  addRequestComment
};

class RequestDetailPage extends Component {
  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`requests/${match.params.id}`);
  };
  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`requests/${match.params.id}`);
  };

  render() {
    const { request, auth, goingToSession, cancelGoingToSession, addSessionComment, sessionChat } = this.props;
    const attendees =
      request && request.attendees && objectToArray(request.attendees);
    const isHost = request.hostUid === auth.uid;
    const isGoing = attendees && attendees.some(a => a.id === auth.uid);
    const chatTree = !isEmpty(sessionChat)  && createDataTree(sessionChat);
    return (
      <RequestDetailChat sessionChat={chatTree} addSessionComment={addSessionComment} sessionId={request.id}/>
    );
  }
};

export default compose(
  withFirestore,
  connect(mapState, actions),
  firebaseConnect(props => [`session_chat/${props.match.params.id}`])
)(RequestDetailPage);
