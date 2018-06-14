import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteSession } from "../sessionActions";
import SessionList from "../SessionList/SessionList";
import LoadingComponent from '../../../app/layout/LoadingComponent'

const mapState = state => ({
  sessions: state.sessions,
  loading: state.async.loading
});

const actions = {
  deleteSession
};

class SessionDashboard extends Component {
  handleDeleteSession = sessionId => () => {
    this.props.deleteSession(sessionId);
  };

  render() {
    const { sessions, loading } = this.props;
    if (loading) return <LoadingComponent inverted={true}/>
    return (
      <Grid>
        <Grid.Column width={10}>
          <SessionList
            deleteSession={this.handleDeleteSession}
            sessions={sessions}
          />
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(SessionDashboard);
