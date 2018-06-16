import React, { Component } from "react";
import { Grid, Loader /*, Button */ } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect /*, isLoaded, isEmpty */ } from 'react-redux-firebase';
import { getSessionsForDashboard /*, deleteSession */ } from "../sessionActions";
import SessionList from "../SessionList/SessionList";
import LoadingComponent from '../../../app/layout/LoadingComponent';
import SessionActivity from "../SessionActivity/SessionActivity";

const mapState = state => ({
  sessions: state.sessions,
//  sessions: state.firestore.ordered.sessions,
  loading: state.async.loading
});

const actions = {
  getSessionsForDashboard
};

class SessionDashboard extends Component {
  /* removed
  handleDeleteSession = sessionId => () => {
    this.props.deleteSession(sessionId);
  }; */
  state = {
    moreSessions: false,
    loadingInitial: true,
    loadedSessions: []
  };

  async componentDidMount() {
    let next = await this.props.getSessionsForDashboard();
    console.log(next);

    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreSessions: true,
        loadingInitial: false
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.sessions !== nextProps.sessions) {
      this.setState({
        loadedSessions: [...this.state.loadedSessions, ...nextProps.sessions]
      });
    }
  }

  getNextSessions = async () => {
    const { sessions } = this.props;
    let lastSession = sessions && sessions[sessions.length - 1];
    console.log(lastSession);
    let next = await this.props.getSessionsForDashboard(lastSession);
    console.log(next);
    if (next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreSessions: false
      });
    }
  };

  render() {
    const { loading } = this.props;
    const { moreSessions, loadedSessions } = this.state;
    if (this.state.loadingInitial) return <LoadingComponent inverted={true}/>;

    return (
      <Grid>
        <Grid.Column width={10}>
          <SessionList
            loading={loading}
            moreSessions={moreSessions}
            sessions={loadedSessions}
            getNextSessions={this.getNextSessions}
          />
          {/* manual pageload button for test
          <Button onClick={this.getNextSessions} diabled={!this.state.moreSessions} content='More' color='green' floated='right' />
          */}
        </Grid.Column>
        <Grid.Column width={6}>
          <SessionActivity />
        </Grid.Column>
        <Grid.Column width={10}>
          <Loader active={loading}/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(firestoreConnect([{ collection: 'sessions' }])(SessionDashboard));
