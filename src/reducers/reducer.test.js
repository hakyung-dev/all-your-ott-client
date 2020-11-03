import reducer from './index';
import * as types from '../constants/actionTypes';

describe('Reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      isAuthenticated: false,
      signInUser: null,
      streaming: null,
      review: null,
      day: new Date(),
    };
  });

  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle SET_USER', () => {
    expect(
      reducer(initialState.signInUser, {
        type: types.SET_USER,
        signInUser: { name: 'fake', email: 'real@fake.com' },
        isAuthenticated: true,
        review: [{ title: 'First movie' }, { title: 'First tv' }],
        streaming: [{ name: 'netflix', billing_date: 6 }, { name: 'amazon' }],
      })
    ).toEqual({
      signInUser: { name: 'fake', email: 'real@fake.com' },
      isAuthenticated: true,
      review: [{ title: 'First movie' }, { title: 'First tv' }],
      streaming: [{ name: 'netflix', billing_date: 6 }, { name: 'amazon' }],
    });
  });

  it('should handle SET_STREAMING', () => {
    expect(
      reducer(initialState.streaming, {
        type: types.SET_STREAMING,
        streaming: [{ name: 'test', billing_date: 8 }],
      })
    ).toEqual({ streaming: [{ name: 'test', billing_date: 8 }] });
  });

  it('should handle SET_DAY', () => {
    expect(
      reducer(initialState.day, {
        type: types.SET_DAY,
        day: '2020-01-01',
      })
    ).toEqual({ day: '2020-01-01' });
  });
});
