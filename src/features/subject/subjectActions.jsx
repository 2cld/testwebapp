import { CREATE_SUBJECT, DELETE_SUBJECT, UPDATE_SUBJECT } from './subjectConstants';

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