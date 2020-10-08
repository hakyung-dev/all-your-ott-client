import * as types from '../constants/actionTypes';

const isToken = localStorage.token ? true : false;
const initialState = {
  isAuthenticated: isToken,
  signInUser: null,
  streaming: null,
  day: new Date(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        signInUser: action.signInUser,
        streaming: action.streaming,
        isAuthenticated: action.isAuthenticated,
      };
    case types.SET_STREAMING:
      return {
        ...state,
        streaming: action.streaming,
      };
    case types.SET_DAY:
      return {
        ...state,
        day: action.day,
      };
    default:
      return state;
  }
};

export default reducer;
