import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import SessionList from '../SessionList/SessionList';
import SessionForm from '../SessionForm/SessionForm';

const sessionsDashboard = [
  {
    id: '1',
    title: 'Physics 223 prep for Midterm',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'Ames, IA',
    venue: "ISU Library",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Chemistry 101 Midterm Exam',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'Ames, IA',
    venue: 'Pizza Pit',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
];

class SessionDashboard extends Component {
  state = {
    sessions: sessionsDashboard,
    isOpen: false,
    selectedSession: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedSession: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateSession = (newSession) => {
    newSession.id = cuid();
    newSession.hostPhotoURL = '/assets/user.png';
    const updatedSessions = [...this.state.sessions, newSession];
    this.setState({
      sessions: updatedSessions,
      isOpen: false
    })
  }

  handleReadSession = (sessionToRead) => () => {
    this.setState({
      selectedSession: sessionToRead,
      isOpen: true
    })
  } 

  handleUpdateSession = (updatedSession) => {
    this.setState({
      sessions: this.state.sessions.map(session => {
        if (session.id === updatedSession.id) {
          return Object.assign({}, updatedSession)
        } else {
          return session
        }
      }),
      isOpen: false,
      selectedSession: null
    })
  }

  handleDeleteSession = (sessionId) => () => {
    const updatedSessions = this.state.sessions.filter(e => e.id !== sessionId);
    this.setState({
      sessions: updatedSessions
    })
  }

  render() {
    const {selectedSession} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <SessionList 
            deleteSession={this.handleDeleteSession} 
            sessions={this.state.sessions} 
            onSessionOpen={this.handleReadSession}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Session"
          />
          {this.state.isOpen && <SessionForm  
            selectedSession={selectedSession} 
            createSession={this.handleCreateSession} 
            updateSession={this.handleUpdateSession} 
            handleCancel={this.handleCancel}
            />
          }
        </Grid.Column>
      </Grid>
    );
  }
}

export default SessionDashboard;
