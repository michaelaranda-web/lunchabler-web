import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILED, FETCH_USERS_LOADING } from '../constants/constants';

export function usersHasFailed(state = false, action) {
  switch (action.type) {
    case FETCH_USERS_FAILED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function usersIsLoading(state = false, action) {
  switch (action.type) {
    case FETCH_USERS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function users(state = [], action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.users;
    default:
      return state;
  }
}

      