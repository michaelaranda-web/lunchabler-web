import axios from 'axios';
import { FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILED, FETCH_RESTAURANTS_LOADING } from '../constants/constants';

export function fetchRestaurantsSuccess(restaurants) {
  return {
    type: FETCH_RESTAURANTS_SUCCESS,
    restaurants
  };
}

export function fetchRestaurantsFail(bool) {
  return {
    type: FETCH_RESTAURANTS_FAILED,
    hasErrored: bool
  };
}

export function fetchRestaurantsInProgress(bool) {
  return {
    type: FETCH_RESTAURANTS_LOADING,
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