import { CREATE_SESSION, DELETE_SESSION, UPDATE_SESSION, FETCH_SESSIONS } from './sessionConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
import { fetchSampleData } from '../../app/data/mockApi';

export const createSession = (session) => {
  return {
    type: CREATE_SESSION,
    payload: {
      session
    }
  }
}

export const updateSession = (session) => {
  return {
    type: UPDATE_SESSION,
    payload: {
      session
    }
  }
}

export const deleteSession = (sessionId) => {
  return {
    type: DELETE_SESSION,
    payload: {
      sessionId
    }
  }
}

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