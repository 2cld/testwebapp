import React, { Component } from "react";
import SubjectListItem from "./SubjectListItem";

class SubjectList extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)});
  }

  render() {
    const { subjects, onSubjectOpen, deleteSubject } = this.props;
    
    let filteredSubjects = subjects.filter(
      (subject) => {
        return subject.title.indexOf(this.state.search) !== -1;
      }
    );
    
    return (
      <div>
        <h1>Subject List</h1>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          placeholder="GooberU a Subject..."
        />
        {filteredSubjects.map(subject => (
          <SubjectListItem
            key={subject.id}
            subject={subject}
            onSubjectOpen={onSubjectOpen}
            deleteSubject={deleteSubject}
          />
        ))}
      </div>
    );
  }
}

export default SubjectList;
