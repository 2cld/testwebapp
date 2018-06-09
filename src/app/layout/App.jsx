import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import SessionDashboard from '../../features/session/SessionDashboard/SessionDashboard';
import SubjectDashboard from '../../features/subject/SubjectDashboard/SubjectDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <SessionDashboard />
          <SubjectDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
