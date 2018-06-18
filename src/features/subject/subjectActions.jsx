import { toastr } from 'react-redux-toastr';
import { /*CREATE_SUBJECT,*/ DELETE_SUBJECT, /*UPDATE_SUBJECT,*/ FETCH_SUBJECTS } from './subjectConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
import { fetchSampleData } from '../../app/data/mockApi';
import { createNewSubject } from '../../app/common/util/helpers';
import moment from 'moment';
import firebase from '../../app/config/firebase';

export const createSubject = (subject) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
//    const user = firestore.auth().currentUser;
//    const photoURL = getState().firebase.profile.photoURL;
    let newSubject = createNewSubject(subject);
    try {
      await firestore.add(`subjects`, newSubject);
      toastr.success('Success', 'Subject has been created');
    } catch (error) {
      toastr.error('Oops', 'Something went wrong');
    }
  };
};
/*
export const createSubject = (subject) => {
  return {
    type: CREATE_SUBJECT,
    payload: {
      subject
    }
  }
}; */

export const updateSubject = (subject) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    if (subject.date !== getState().firestore.ordered.subjects[0].date) {
      subject.date = moment(subject.date).toDate();
    }
    try {
      await firestore.update(`subjects/${subject.id}`, subject);
      toastr.success('Success', 'Subject has been updated');
    } catch (error) {
      console.log(error);
      toastr.error('Oops', 'Something went wrong');
    }
  };
};
/* 
export const updateSubject = (subject) => {
  return {
    type: UPDATE_SUBJECT,
    payload: {
      subject
    }
  }
}; */

export const deleteSubject = (subjectId) => {
  return {
    type: DELETE_SUBJECT,
    payload: {
      subjectId
    }
  }
};

export const fetchSubjects = (subjects) => {
  return {
    type: FETCH_SUBJECTS,
    payload: subjects
  }
};

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
};

export const getSubjectsForDashboard = lastSubject => async (dispatch, getState) => {
//  let today = new Date(Date.now());
  const firestore = firebase.firestore();
  const subjectsRef = firestore.collection('subjects');
  try {
    dispatch(asyncActionStart());
    let startAfter =
      lastSubject &&
      (await firestore
        .collection('subjects')
        .doc(lastSubject.id)
        .get());
    let query;
    lastSubject
      ? (query = subjectsRef
          //.where('date', '>=', today)
          //.orderBy('date')
          .startAfter(startAfter)
          .limit(5))
      : (query = subjectsRef
          //.where('date', '>=', today)
          //.orderBy('date')
          .limit(5));
    let querySnap = await query.get();
    if (querySnap.docs.length === 0) {
      dispatch(asyncActionFinish());
      return querySnap;
    }
    let subjects = [];
    for (let i = 0; i < querySnap.docs.length; i++) {
      let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      subjects.push(evt);
    }
    dispatch({ type: FETCH_SUBJECTS, payload: { subjects } });
    dispatch(asyncActionFinish());
    return querySnap;
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};
