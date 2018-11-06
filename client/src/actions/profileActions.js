//  libs
import axios from 'axios';
//  types
import {
  GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS
} from './types';

// Get current profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile/')
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch(() => dispatch({
      type: GET_PROFILE,
      payload: {}
    }));
};

//  Create Profile
export const createProfile = (profileDate, history) => (dispatch) => {
  axios
    .post('/api/profile', profileDate)
    .then(() => history.push('/dashboard'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

// Profile loading
export const setProfileLoading = () => ({
  type: PROFILE_LOADING
});

//  Clear profile
export const clearCurrentProfile = () => ({
  type: CLEAR_CURRENT_PROFILE
});
