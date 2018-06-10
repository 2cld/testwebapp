import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";
import sessionReducer from "../../features/session/sessionReducer";

const rootReducer = combineReducers({
  test: testReducer,
  sessions: sessionReducer
});

export default rootReducer;
