import { createReducer } from "../../app/common/util/reducerUtil";
import {
  CREATE_REQUEST,
  DELETE_REQUEST,
  UPDATE_REQUEST,
  FETCH_REQUESTS
} from "./requestConstants";

const initialState = [];
/*const initialState = {
  mytest: 43,
  mytestloading: false
};*/

export const createRequest = (state, payload) => {
  return [...state, Object.assign({}, payload.request)];
};

export const updateRequest = (state, payload) => {
  return [
    ...state.filter(request => request.id !== payload.request.id),
    Object.assign({}, payload.request)
  ];
};

export const deleteRequest = (state, payload) => {
  return [...state.filter(request => request.id !== payload.requestId)];
};

export const fetchRequests = (state, payload) => {
  return payload.requests
};

export default createReducer(initialState, {
  [CREATE_REQUEST]: createRequest,
  [UPDATE_REQUEST]: updateRequest,
  [DELETE_REQUEST]: deleteRequest,
  [FETCH_REQUESTS]: fetchRequests
});
