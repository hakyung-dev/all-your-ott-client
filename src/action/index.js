import * as types from '../constants/actionTypes';

export const setSignInUser = (
  signInUser,
  isAuthenticated,
  streaming,
  review
) => ({
  type: types.SET_USER,
  signInUser,
  isAuthenticated,
  streaming,
  review,
});

export const setStreaming = (streaming) => ({
  type: types.SET_STREAMING,
  streaming,
});

export const setReview = (review) => ({
  type: types.SET_REVIEW,
  review,
});

export const setDay = (day) => ({
  type: types.SET_DAY,
  day,
});
