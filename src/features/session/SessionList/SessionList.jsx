import React, { Component } from 'react'
import SessionListItem from './SessionListItem'

class SessionList extends Component {
  render() {
    const {sessions} = this.props;
    return (
      <div>
        <h1>Session List</h1>
        {sessions.map((session) => (
          <SessionListItem key={session.id} session={session}/>
        ))}


      </div>
    )
  }
}

export default SessionList