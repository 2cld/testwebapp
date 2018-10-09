import { toastr } from 'react-redux-toastr';
import { DELETE_REQUEST, FETCH_REQUESTS } from './requestConstants';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
import { createNewRequest } from '../../app/common/util/helpers';
import moment from 'moment';
import firebase from '../../app/config/firebase';

export const createRequest = (request) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    let newRequest = createNewRequest(user, photoURL, request);
    try {
      let createdRequest = await firestore.add(`requests`, newRequest);
      await firestore.set(`request_attendee/${createdRequest.id}_${user.uid}`, {
        requestId: createdRequest.id,
        userUid: user.uid,
        requestDate: request.date,
        host: true
      });
      toastr.success('Success', 'request has been created');
    } catch (error) {
      toastr.error('Oops', 'Something went wrong');
    }
  };
};

export const updateRequest = (request) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    if (request.date !== getState().firestore.ordered.requests[0].date) {
      request.date = moment(request.date).toDate();
    }
    try {
      await firestore.update(`requests/${request.id}`, request);
      toastr.success('Success', 'request has been updated');
    } catch (error) {
      console.log(error);
      toastr.error('Oops', 'Something went wrong');
    }
  };
};

export const deleteRequest = (requestId) => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_REQUEST,
        payload: { requestId }
      });
      toastr.success('Success', 'request has been deleted')
    } catch (error) {
      toastr.error('Oops', 'Something went wrong')
    }
  }
};

export const cancelToggle = (cancelled, requestId) => async (dispatch, getState, { getFirestore } ) => {
  const firestore = getFirestore();
  const message = cancelled
    ? 'Are you sure you want to cancel the request?'
    : 'This reactivate the request - are you sure?';
  try {
    toastr.confirm(message, {
      onOk: () =>
        firestore.update(`requests/${requestId}`, {
          cancelled: cancelled
        })
    });
  } catch (error) {
    console.log(error);
  }
};

export const getRequestsForDashboard = lastRequest => async (dispatch, getState) => {
  let today = new Date(Date.now());
  const firestore = firebase.firestore();
  const requestsRef = firestore.collection('requests');
  try {
    dispatch(asyncActionStart());
    let startAfter =
      lastRequest &&
      (await firestore
        .collection('requests')
        .doc(lastRequest.id)
        .get());
    let query;
    lastRequest
      ? (query = requestsRef
          .where('date', '>=', today)
          .orderBy('date')
          .startAfter(startAfter)
          .limit(2))
      : (query = requestsRef
          .where('date', '>=', today)
          .orderBy('date')
          .limit(2));
    let querySnap = await query.get();
    if (querySnap.docs.length === 0) {
      dispatch(asyncActionFinish());
      return querySnap;
    }
    let requests = [];
    for (let i = 0; i < querySnap.docs.length; i++) {
      let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      requests.push(evt);
    }
    dispatch({ type: FETCH_REQUESTS, payload: { requests } });
    dispatch(asyncActionFinish());
    return querySnap;
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};

export const addRequestComment = (requestId, values, parentId) => 
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const profile = getState().firebase.profile;
    const user = firebase.auth().currentUser;
    let newComment = {
      parentId: parentId,
      displayName: profile.displayName,
      photoURL: profile.photoURL || '/assets/user.png',
      uid: user.uid,
      text: values.comment,
      date: Date.now()
    }
    try {
      await firebase.push(`request_chat/${requestId}`, newComment)
    } catch (error) {
      console.log(error);
      toastr.error('Oops', 'Problem adding comment')
    }
  };
