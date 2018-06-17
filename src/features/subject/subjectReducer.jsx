import { createReducer } from "../../app/common/util/reducerUtil";
import {
  CREATE_SUBJECT,
  DELETE_SUBJECT,
  UPDATE_SUBJECT,
  FETCH_SUBJECTS
} from "./subjectConstants";

const initialState = [];

export const createSubject = (state, payload) => {
  return [...state, Object.assign({}, payload.subject)];
};

export const updateSubject = (state, payload) => {
  return [
    ...state.filter(subject => subject.id !== payload.subject.id),
    Object.assign({}, payload.subject)
  ];
};

export const deleteSubject = (state, payload) => {
  return [...state.filter(subject => subject.id !== payload.subjectId)];
};

export const fetchSubjects = (state, payload) => {
  return payload.subjects
};

export default createReducer(initialState, {
  [CREATE_SUBJECT]: createSubject,
  [UPDATE_SUBJECT]: updateSubject,
  [DELETE_SUBJECT]: deleteSubject,
  [FETCH_SUBJECTS]: fetchSubjects
});
