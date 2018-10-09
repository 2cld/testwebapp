import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import testReducer from "../../features/testarea/testReducer";
import modalsReducer from '../../features/modals/modalReducer';
import sessionReducer from "../../features/session/sessionReducer";
import requestReducer from "../../features/request/requestReducer";
import subjectReducer from "../../features/subject/subjectReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: FormReducer,
  test: testReducer,
  modals: modalsReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer,
  requests: requestReducer,
  sessions: sessionReducer,
  subjects: subjectReducer
});

export default rootReducer;
