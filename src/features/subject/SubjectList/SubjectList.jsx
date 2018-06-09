import React, { Component } from 'react'
import SubjectListItem from './SubjectListItem'

class SubjectList extends Component {
  render() {
    const {subjects} = this.props;
    return (
      <div>
        <h1>Subject List</h1>
        {subjects.map((subject) => (
          <SubjectListItem key={subject.id} subject={subject}/>
        ))}


      </div>
    )
  }
}

export default SubjectList