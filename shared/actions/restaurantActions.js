import axios from 'axios';
import { FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILED, FETCH_RESTAURANTS_LOADING,
REMOVE_USER_PREFERENCE_LOADING, REMOVE_USER_PREFERENCE_FAILED, ADD_USER_PREFERENCE_LOADING,
  ADD_USER_PREFERENCE_FAILED, ADD_RESTAURANT_LOADING, ADD_RESTAURANT_FAILED, UPDATE_CURRENT_RESTAURANT_INDEX,
  REMOVE_RESTAURANT_FAILED, REMOVE_RESTAURANT_LOADING, 
  ADD_COMMENT_TO_RESTAURANT_LOADING, ADD_COMMENT_TO_RESTAURANT_FAILED
} from '../constants/constants';

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

function addRestaurantFail(bool) {
  return {
    type: ADD_RESTAURANT_FAILED,
    hasErrored: bool
  };
}

function addRestaurantInProgress(bool) {
  return {
    type: ADD_RESTAURANT_LOADING,
    isLoading: bool
  };
}

function removeRestaurantFail(bool) {
  return {
    type: REMOVE_RESTAURANT_FAILED,
    hasErrored: bool
  };
}

function removeRestaurantInProgress(bool) {
  return {
    type: REMOVE_RESTAURANT_LOADING,
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

export function addRestaurant(restaurantName) {
  return (dispatch) => {
    dispatch(addRestaurantInProgress(true));
    axios.post('/api/add_restaurant', {restaurant: restaurantName})
        .then((response) => {
          dispatch(addRestaurantInProgress(false));
          return response.data.restaurants;
        })
        .then((restaurants) => dispatch(fetchRestaurantsData()))
        .catch((e) => {console.log(e); dispatch(addRestaurantFail(true))});
  };
}

export function removeRestaurant(restaurantName) {
  return (dispatch) => {
    dispatch(removeRestaurantInProgress(true));
    axios.post('/api/remove_restaurant', {restaurant: restaurantName})
        .then((response) => {
          dispatch(removeRestaurantInProgress(false));
          return response.data.restaurants;
        })
        .then((restaurants) => dispatch(fetchRestaurantsData()))
        .catch((e) => {console.log(e); dispatch(removeRestaurantFail(true))});
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

export function updateCurrentRestaurantIndex(newIndex) {
  return {
    type: UPDATE_CURRENT_RESTAURANT_INDEX,
    newIndex: newIndex
  };
}

export function addCommentToRestaurant(restaurantName, userName, comment) {
  let data = {
    username: userName,
    restaurant: restaurantName,
    comment: comment
  };

  return (dispatch) => {
    dispatch(addCommentToRestaurantInProgress(true));
    axios.patch('/api/add_comment', data)
        .then((response) => {
          dispatch(addCommentToRestaurantInProgress(false));
          return response.data.restaurants;
        })
        .then((restaurants) => dispatch(fetchRestaurantsData()))
        .catch((e) => {console.log(e); dispatch(addCommentToRestaurantFail(true))});
    return Promise.resolve();
  };
}

function addCommentToRestaurantFail(bool) {
  return {
    type: ADD_COMMENT_TO_RESTAURANT_FAILED,
    hasErrored: bool
  };
}

function addCommentToRestaurantInProgress(bool) {
  return {
    type: ADD_COMMENT_TO_RESTAURANT_LOADING,
    isLoading: bool
  };
}