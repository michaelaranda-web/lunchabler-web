import axios from 'axios';
import { FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILED, FETCH_RESTAURANTS_LOADING } from '../constants/constants';

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

function addUserPreferenceSuccess(restaurants) {
  return {
    type: ADD_USER_PREFERENCE_SUCCESS,
    restaurants
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

export function addUserPreferenceToRestaurant(user, restaurant, pref) {
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