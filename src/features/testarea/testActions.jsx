import { 
  INCREMENT_COUNTER, 
  DECREMENT_COUNTER, 
  COUNTER_ACTION_START, 
  COUNTER_ACTION_DONE 
} from './testConstants';

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  }
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  }
};

export const startCounterAction = () => {
  return {
    type: COUNTER_ACTION_START
  }
};

export const doneCounterAction = () => {
  return {
    type: COUNTER_ACTION_DONE
  }
};

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
};

export const incrementAsync = () => {
  return async dispatch => {
    dispatch(startCounterAction());
    await delay(1000);
    dispatch({type: INCREMENT_COUNTER});
    dispatch(doneCounterAction());
  }
};

export const decrementAsync = () => {
  return async dispatch => {
    dispatch(startCounterAction());
    await delay(1000);
    dispatch({type: DECREMENT_COUNTER});
    dispatch(doneCounterAction());
  }
};
