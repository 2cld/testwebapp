import React, { Component } from 'react'
import SubjectListItem from './SubjectListItem'

class SubjectList extends Component {
  render() {
    const { subjects, onSubjectOpen, deleteSubject } = this.props;
    return (
      <div>
        <h1>Subject List</h1>
        {subjects.map((subject) => (
          <SubjectListItem 
            key={subject.id} 
            subject={subject}
            onSubjectOpen={onSubjectOpen}
            deleteSubject={deleteSubject}
          />
        ))}
      </div>
    )
  }
}

export default SubjectList