import React, { Component } from "react";
import { Grid, Loader, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { getSubjectsForDashboard } from "../subjectActions";
import SubjectList from "../SubjectList/SubjectList";
import LoadingComponent from '../../../app/layout/LoadingComponent';

const mapState = state => ({
  subjects: state.subjects,
  loading: state.async.loading
});
const actions = {
  getSubjectsForDashboard
};

class SubjectDashboard extends Component {
  state = {
    moreSubjects: false,
    loadingInitial: true,
    loadedSubjects: []
  };
  async componentDidMount() {
    let next = await this.props.getSubjectsForDashboard();
    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreSubjects: true,
        loadingInitial: false
      });
    }
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.subjects !== nextProps.subjects) {
      this.setState({
        loadedSubjects: [...this.state.loadedSubjects, ...nextProps.subjects]
      });
    }
  };
  getNextSubjects = async () => {
    const { subjects } = this.props;
    let lastSubject = subjects && subjects[subjects.length - 1];
    console.log(lastSubject);
    let next = await this.props.getSubjectsForDashboard(lastSubject);
    console.log(next);
    if (next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreSubjects: false
      });
    }
  };

  render() {
    const { loading } = this.props;
    const { moreSubjects, loadedSubjects } = this.state;
    if (this.state.loadingInitial) return <LoadingComponent inverted={true}/>;
    return (
      <Grid>
        <Grid.Column width={10}>
          <SubjectList
            loading={loading}
            moreSubjects={moreSubjects}
            subjects={loadedSubjects}
            getNextSubjects={this.getNextSubjects}
          />
          {/* manual pageload button for test */}
          <Button onClick={this.getNextSubjects} diabled={ (!this.state.moreSubjects) ? "true" : "false" } content='More' color='green' floated='right' />
          {/* end */}
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
        <Grid.Column width={10}>
          <Loader active={loading}/>
        </Grid.Column>
      </Grid>
    );
  }
};

export default connect(mapState, actions)(firestoreConnect([{ collection: 'subjects' }])(SubjectDashboard));

/*
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
*/
