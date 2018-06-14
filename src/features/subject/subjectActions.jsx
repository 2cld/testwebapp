import { CREATE_SUBJECT, DELETE_SUBJECT, UPDATE_SUBJECT, FETCH_SUBJECTS } from './subjectConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
import { fetchSampleData } from '../../app/data/mockApi';

export const createSubject = (subject) => {
  return {
    type: CREATE_SUBJECT,
    payload: {
      subject
    }
  }
}

export const updateSubject = (subject) => {
  return {
    type: UPDATE_SUBJECT,
    payload: {
      subject
    }
  }
}

export const deleteSubject = (subjectId) => {
  return {
    type: DELETE_SUBJECT,
    payload: {
      subjectId
    }
  }
}

export const fetchSubjects = (subjects) => {
  return {
    type: FETCH_SUBJECTS,
    payload: subjects
  }
}

export const loadSubjects = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      let subjects = await fetchSampleData();
      dispatch(fetchSubjects(subjects))
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }
}