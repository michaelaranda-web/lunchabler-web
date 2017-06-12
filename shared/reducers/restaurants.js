import { FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILED, FETCH_RESTAURANTS_LOADING } from '../constants/constants';

export function restaurantsIsLoading(state = false, action) {
  switch(action.type) {
    case FETCH_RESTAURANTS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function restaurantsHasFailed(state = false, action) {
  switch(action.type) {
    case FETCH_RESTAURANTS_FAILED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function restaurants(state = [], action) {
  switch(action.type) {
    case FETCH_RESTAURANTS_SUCCESS:
      return action.restaurants;
    default:
      return state;
  }
}