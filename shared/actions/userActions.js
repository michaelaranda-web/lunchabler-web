import axios from 'axios';
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILED, FETCH_USERS_LOADING } from '../constants/constants';

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  };
}

export function fetchUsersFail(bool) {
  return {
    type: FETCH_USERS_FAILED,
    hasErrored: bool
  };
}

export function fetchUsersInProgress(bool) {
  return {
    type: FETCH_USERS_LOADING,
    isLoading: bool
  };
}

export function fetchUsersData() {
  return (dispatch) => {
    dispatch(fetchUsersInProgress(true));
    axios.get('/api/users')
        .then((response) => {
          dispatch(fetchUsersInProgress(false));
          return response.data.users;
        })
        .then((users) => dispatch(fetchUsersSuccess(users)))
        .catch((e) => {console.log(e); dispatch(fetchUsersFail(true))});
  };
}

export function addUser(userName) {
  return (dispatch) => {
    axios.post('/api/add_user', {name: userName})
        .then(() => dispatch(fetchUsersData()))
        .catch((e) => {console.log(e)});
  };
}