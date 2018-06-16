import { toastr } from 'react-redux-toastr';
import { /*CREATE_SESSION,*/ DELETE_SESSION, /* UPDATE_SESSION, */ FETCH_SESSIONS } from './sessionConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
// import { fetchSampleData } from '../../app/data/mockApi';
import { createNewSession } from '../../app/common/util/helpers';
import moment from 'moment';
import firebase from '../../app/config/firebase';

/* Old
export const createSession = (session) => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_SESSION,
        payload: { session }
      });
      toastr.success('Success', 'Session has been created')
    } catch (error) {
      toastr.error('Oops', 'Something went wrong')
    }
  }
}; */
export const createSession = (session) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    let newSession = createNewSession(user, photoURL, session);
    try {
      let createdSession = await firestore.add(`sessions`, newSession);
      await firestore.set(`session_attendee/${createdSession.id}_${user.uid}`, {
        sessionId: createdSession.id,
        userUid: user.uid,
        sessionDate: session.date,
        host: true
      });
      toastr.success('Success', 'Session has been created');
    } catch (error) {
      toastr.error('Oops', 'Something went wrong');
    }
  };
};

export const updateSession = (session) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    if (session.date !== getState().firestore.ordered.sessions[0].date) {
      session.date = moment(session.date).toDate();
    }
    try {
      await firestore.update(`sessions/${session.id}`, session);
      toastr.success('Success', 'Session has been updated');
    } catch (error) {
      console.log(error);
      toastr.error('Oops', 'Something went wrong');
    }
  };
};
/*
export const updateSession = (session) => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_SESSION,
        payload: { session }
      });
      toastr.success('Success', 'Session has been updated')
    } catch (error) {
      toastr.error('Oops', 'Something went wrong')
    }
  }
};
*/

export const deleteSession = (sessionId) => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_SESSION,
        payload: { sessionId }
      });
      toastr.success('Success', 'Session has been deleted')
    } catch (error) {
      toastr.error('Oops', 'Something went wrong')
    }
  }
};

export const cancelToggle = (cancelled, sessionId) => async (dispatch, getState, { getFirestore } ) => {
  const firestore = getFirestore();
  const message = cancelled
    ? 'Are you sure you want to cancel the session?'
    : 'This reactivate the session - are you sure?';
  try {
    toastr.confirm(message, {
      onOk: () =>
        firestore.update(`sessions/${sessionId}`, {
          cancelled: cancelled
        })
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSessionsForDashboard = lastSession => async (dispatch, getState) => {
  let today = new Date(Date.now());
  const firestore = firebase.firestore();
  const sessionsRef = firestore.collection('sessions');
  try {
    dispatch(asyncActionStart());
    let startAfter =
      lastSession &&
      (await firestore
        .collection('sessions')
        .doc(lastSession.id)
        .get());
    let query;

    lastSession
      ? (query = sessionsRef
          .where('date', '>=', today)
          .orderBy('date')
          .startAfter(startAfter)
          .limit(2))
      : (query = sessionsRef
          .where('date', '>=', today)
          .orderBy('date')
          .limit(2));
    
    let querySnap = await query.get();

    if (querySnap.docs.length === 0) {
      dispatch(asyncActionFinish());
      return querySnap;
    }

    let sessions = [];

    for (let i = 0; i < querySnap.docs.length; i++) {
      let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      sessions.push(evt);
    }
    dispatch({ type: FETCH_SESSIONS, payload: { sessions } });
    dispatch(asyncActionFinish());
    return querySnap;
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};

/*
export const fetchSessions = (sessions) => {
  return {
    type: FETCH_SESSIONS,
    payload: sessions
  }
};

export const loadSessions = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      let sessions = await fetchSampleData();
      dispatch(fetchSessions(sessions))
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  }
};
*/
