import { FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILED, FETCH_RESTAURANTS_LOADING,
  ADD_RESTAURANT_LOADING, ADD_RESTAURANT_FAILED,
 REMOVE_USER_PREFERENCE_FAILED, REMOVE_USER_PREFERENCE_LOADING, ADD_USER_PREFERENCE_FAILED,
ADD_USER_PREFERENCE_LOADING} from '../constants/constants';

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

export function addRestaurantIsLoading(state = false, action) {
  switch(action.type) {
    case ADD_RESTAURANT_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function addRestaurantHasFailed(state = false, action) {
  switch(action.type) {
    case ADD_RESTAURANT_FAILED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function addUserPreferenceIsLoading(state = false, action) {
  switch(action.type) {
    case ADD_USER_PREFERENCE_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function addUserPreferenceHasFailed(state = false, action) {
  switch(action.type) {
    case ADD_USER_PREFERENCE_FAILED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function removeUserPreferenceIsLoading(state = false, action) {
  switch(action.type) {
    case REMOVE_USER_PREFERENCE_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function removeUserPreferenceHasFailed(state = false, action) {
  switch(action.type) {
    case REMOVE_USER_PREFERENCE_FAILED:
      return action.hasErrored;
    default:
      return state;
  }
}