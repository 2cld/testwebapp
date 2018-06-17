import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { connect } from 'react-redux';
import { deleteSubject } from '../subjectActions';
import SubjectList from '../SubjectList/SubjectList';
import SubjectForm from '../SubjectForm/SubjectForm';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const mapState = state => ({
  isOpen: state.isOpen,
  subjects: state.subjects,
  loading: state.async.loading
});
const actions = {
  deleteSubject
};

class SubjectDashboard extends Component {
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
  };
  handleReadSubject = (readSubject) => () => {
    this.setState({
      selectedSubject: readSubject,
      isOpen: true
    })
  };
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
  };
  handleDeleteSubject = (subjectId) => () => {
    const updatedSubjects = this.state.subjects.filter(e => e.id !== subjectId);
    this.setState({
      subjects: updatedSubjects
    })
  };

  render() {
    const {isOpen, subjects, loading} = this.props;
    if (loading) return <LoadingComponent inverted={true}/>

    return (
      <Grid>
        <Grid.Column width={10}>
          <SubjectList deleteSubject={this.handleDeleteSubject} subjects={subjects} onSubjectOpen={this.handleReadSubject}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Subject"
          />
          {isOpen && <SubjectForm 
            selectedSubject={subjects} 
            handleCancel={this.handleCancel} 
            createSubject={this.handleCreateSubject} 
            updateSubject={this.handleUpdateSubject} 
            />
          }
        </Grid.Column>
      </Grid>
    );
  }
};

export default connect(mapState, actions)(SubjectDashboard);
