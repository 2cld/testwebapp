import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import testReducer from "../../features/testarea/testReducer";
import modalsReducer from '../../features/modals/modalReducer';
import sessionReducer from "../../features/session/sessionReducer";
import subjectReducer from "../../features/subject/subjectReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  modals: modalsReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer,
  sessions: sessionReducer,
  subjects: subjectReducer
});

export default rootReducer;
