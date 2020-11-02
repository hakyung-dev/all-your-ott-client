import axios from 'axios';
import { SERVER_URL } from '../config';

axios.defaults.baseURL = SERVER_URL;

export const signUpApi = async (user) => {
  try {
    const res = await axios.post('/api/users/signup', user);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const signInApi = async (user) => {
  try {
    const res = await axios.post('/api/users/signin', user);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const getUserApi = async (headers) => {
  try {
    const res = await axios.get('/api/users', headers);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const addStreamingApi = async (userId, streaming) => {
  try {
    const res = await axios.put(`api/users/${userId}/streaming/add`, streaming);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const removeStreamingApi = async (userId, streamingId) => {
  try {
    const res = await axios.put(
      `api/users/${userId}/streaming/remove`,
      streamingId
    );
    return res;
  } catch (err) {
    return err.response;
  }
};

export const searchContentApi = async (query) => {
  try {
    const res = await axios.post(`api/search/content`, query);
    return res.data.result;
  } catch (err) {
    return err.response;
  }
};

export const getGenreApi = async (genres) => {
  try {
    const res = await axios.post(`api/search/genre`, genres);
    return res.data.result;
  } catch (err) {
    return err.response;
  }
};

export const getDetailApi = async (content) => {
  try {
    const res = await axios.get(
      `api/search/detail/${content.type}/${content.id}`
    );
    return res;
  } catch (err) {
    return err.response;
  }
};

export const addReviewApi = async (userId, review) => {
  try {
    const res = await axios.put(`api/review/${userId}/new`, review);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const getReviewApi = async (reviewId) => {
  try {
    const res = await axios.get(`api/review/${reviewId}`);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const removeReviewApi = async (reviewId, userId) => {
  try {
    const res = await axios.put(`api/review/${reviewId}/remove`, userId);
    return res;
  } catch (err) {
    return err.response;
  }
};
