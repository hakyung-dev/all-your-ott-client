import * as types from '../constants/actionTypes';

const initialState = {
  isAuthenticated: false,
  signInUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      const signedUser = action.user ? { ...action.user } : null;
      return {
        ...state,
        signInUser: signedUser,
        isAuthenticated: action.isAuthenticated,
      };
    default:
      return state;
  }
};

export default reducer;
