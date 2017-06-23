import axios from 'axios';
import { FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILED, FETCH_RESTAURANTS_LOADING,
REMOVE_USER_PREFERENCE_LOADING, REMOVE_USER_PREFERENCE_FAILED, ADD_USER_PREFERENCE_LOADING,
  ADD_USER_PREFERENCE_FAILED} from '../constants/constants';

function fetchRestaurantsSuccess(restaurants) {
  return {
    type: FETCH_RESTAURANTS_SUCCESS,
    restaurants
  };
}

function fetchRestaurantsFail(bool) {
  return {
    type: FETCH_RESTAURANTS_FAILED,
    hasErrored: bool
  };
}

function fetchRestaurantsInProgress(bool) {
  return {
    type: FETCH_RESTAURANTS_LOADING,
    isLoading: bool
  };
}

function addUserPreferenceFail(bool) {
  return {
    type: ADD_USER_PREFERENCE_FAILED,
    hasErrored: bool
  };
}

function addUserPreferenceInProgress(bool) {
  return {
    type: ADD_USER_PREFERENCE_LOADING,
    isLoading: bool
  };
}

function removeUserPreferenceFail(bool) {
  return {
    type: REMOVE_USER_PREFERENCE_FAILED,
    hasErrored: bool
  };
}

function removeUserPreferenceInProgress(bool) {
  return {
    type: REMOVE_USER_PREFERENCE_LOADING,
    isLoading: bool
  };
}

export function fetchRestaurantsData() {
  return (dispatch) => {
    dispatch(fetchRestaurantsInProgress(true));
    axios.get('/api/restaurants')
        .then((response) => {
          dispatch(fetchRestaurantsInProgress(false));
          return response.data.restaurants;
        })
        .then((restaurants) => dispatch(fetchRestaurantsSuccess(restaurants)))
        .catch((e) => {console.log(e); dispatch(fetchRestaurantsFail(true))});
  };
}

export function addUserPreferenceToRestaurant(userName, restaurantName, preference) {
  let data = {
    user: userName,
    restaurant: restaurantName,
    preference: preference
  };

  return (dispatch) => {
    dispatch(addUserPreferenceInProgress(true));
    axios.patch('/api/add_preference', data)
        .then((response) => {
          dispatch(addUserPreferenceInProgress(false));
          return response.data.restaurants;
        })
        .then((restaurants) => dispatch(fetchRestaurantsData()))
        .catch((e) => {console.log(e); dispatch(addUserPreferenceFail(true))});
  };
}

export function removeUserPreferenceToRestaurant(userName, restaurantName, preference) {
  let data = {
    user: userName,
    restaurant: restaurantName,
    preference: preference
  };

  return (dispatch) => {
    dispatch(removeUserPreferenceInProgress(true));
    axios.patch('/api/remove_preference', data)
        .then((response) => {
          dispatch(removeUserPreferenceInProgress(false));
          return response.data.restaurants;
        })
        .then((restaurants) => dispatch(fetchRestaurantsData()))
        .catch((e) => {console.log(e); dispatch(removeUserPreferenceFail(true))});
  };
}