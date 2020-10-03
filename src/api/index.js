import axios from 'axios';
import { SERVER_URL } from '../config';

axios.defaults.baseURL = SERVER_URL;

export const signUp = async (user) => {
  try {
    const res = await axios.post('/api/users/signup', user);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const signIn = async (user) => {
  try {
    const res = await axios.post('/api/users/signin', user);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const getUser = async (headers) => {
  try {
    const res = await axios.get('/api/users', headers);
    return res;
  } catch (err) {
    return err.response;
  }
};
