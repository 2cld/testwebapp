import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import SubjectList from '../SubjectList/SubjectList';
import SubjectForm from '../SubjectForm/SubjectForm';

const subjectsDashboard = [
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

class SubjectDashboard extends Component {
  state = {
    subjects: subjectsDashboard,
    isOpen: false,
    selectedSubject: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedSubject: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateSubject = (newSubject) => {
    newSubject.id = cuid();
    newSubject.hostPhotoURL = '/assets/user.png';
    const updatedSubjects = [...this.state.subjects, newSubject];
    this.setState({
      subjects: updatedSubjects,
      isOpen: false
    })
  }

  handleReadSubject = (readSubject) => () => {
    this.setState({
      selectedSubject: readSubject,
      isOpen: true
    })
  } 

  handleUpdateSubject = (updatedSubject) => {
    this.setState({
      subjects: this.state.subjects.map(subject => {
        if (subject.id === updatedSubject.id) {
          return Object.assign({}, updatedSubject)
        } else {
          return subject
        }
      }),
      isOpen: false,
      selectedSubject: null
    })
  }

  handleDeleteSubject = (subjectId) => () => {
    const updatedSubjects = this.state.subjects.filter(e => e.id !== subjectId);
    this.setState({
      subjects: updatedSubjects
    })
  }

  render() {
    const {selectedSubject} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <SubjectList deleteSubject={this.handleDeleteSubject} subjects={this.state.subjects} onSubjectOpen={this.handleReadSubject}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Subject"
          />
          {this.state.isOpen && <SubjectForm 
            selectedSubject={selectedSubject} 
            handleCancel={this.handleCancel} 
            createSubject={this.handleCreateSubject} 
            updateSubject={this.handleUpdateSubject} 
            />
          }
        </Grid.Column>
      </Grid>
    );
  }
}

export default SubjectDashboard;
