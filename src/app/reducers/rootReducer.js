import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import testReducer from "../../features/testarea/testReducer";
import sessionReducer from "../../features/session/sessionReducer";
import subjectReducer from "../../features/subject/subjectReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  sessions: sessionReducer,
  subjects: subjectReducer
});

export default rootReducer;
