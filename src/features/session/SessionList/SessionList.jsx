import React, { Component } from 'react'
import SessionListItem from './SessionListItem'
import InfiniteScroll from 'react-infinite-scroller';

class SessionList extends Component {
  render() {
    const {sessions, getNextSessions, loading, moreSessions } = this.props;
    return (
      <div>
        {sessions && sessions.length !== 0 && (
          <InfiniteScroll
            pageStart={0}
            loadMore={getNextSessions}
            hasMore={!loading && moreSessions}
            initialLoad={false}
          >
            {sessions && sessions.map((session) => (
              <SessionListItem 
                key={session.id} 
                session={session} 
              />
            ))}
          </InfiniteScroll>
        )}
      </div>
    )
  }
}
/* old
class SessionList extends Component {
  render() {
    const {sessions, deleteSession} = this.props;
    return (
      <div>
        <h1>Session List</h1>
        {sessions && sessions.map((session) => (
          <SessionListItem 
            key={session.id} 
            session={session} 
            deleteSession={deleteSession}
          />
        ))}
      </div>
    )
  }
}
*/

export default SessionList