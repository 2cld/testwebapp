import { createReducer } from "../../app/common/util/reducerUtil";
import {
  CREATE_SESSION,
  DELETE_SESSION,
  UPDATE_SESSION,
  FETCH_SESSIONS
} from "./sessionConstants";

const initialState = [];

export const createSession = (state, payload) => {
  return [...state, Object.assign({}, payload.session)];
};

export const updateSession = (state, payload) => {
  return [
    ...state.filter(session => session.id !== payload.session.id),
    Object.assign({}, payload.session)
  ];
};

export const deleteSession = (state, payload) => {
  return [...state.filter(session => session.id !== payload.sessionId)];
};

export const fetchSessions = (state, payload) => {
  return payload.sessions
}

export default createReducer(initialState, {
  [CREATE_SESSION]: createSession,
  [UPDATE_SESSION]: updateSession,
  [DELETE_SESSION]: deleteSession,
  [FETCH_SESSIONS]: fetchSessions
});
