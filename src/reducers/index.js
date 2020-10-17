import * as types from '../constants/actionTypes';

const isToken = localStorage.token ? true : false;
const initialState = {
  isAuthenticated: isToken,
  signInUser: null,
  streaming: null,
  review: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        signInUser: action.signInUser,
        streaming: action.streaming,
        isAuthenticated: action.isAuthenticated,
        review: action.review,
      };
    case types.SET_STREAMING:
      return {
        ...state,
        streaming: action.streaming,
      };
    case types.SET_REVIEW:
      return {
        ...state,
        review: action.review,
      };
    default:
      return state;
  }
};

export default reducer;
