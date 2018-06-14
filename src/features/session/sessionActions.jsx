import { toastr } from 'react-redux-toastr';
import { CREATE_SESSION, DELETE_SESSION, UPDATE_SESSION, FETCH_SESSIONS } from './sessionConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
import { fetchSampleData } from '../../app/data/mockApi';

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
};

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

export const fetchSessions = (sessions) => {
  return {
    type: FETCH_SESSIONS,
    payload: sessions
  }
}

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
}