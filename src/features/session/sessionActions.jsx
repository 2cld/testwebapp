import { CREATE_SESSION, DELETE_SESSION, UPDATE_SESSION } from './sessionConstants';

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