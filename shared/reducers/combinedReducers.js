import { combineReducers } from 'redux';
import { restaurants, restaurantsHasFailed, restaurantsIsLoading,
  addRestaurantIsLoading, addRestaurantHasFailed,
  removeUserPreferenceHasFailed, removeUserPreferenceIsLoading,
  addUserPreferenceIsLoading, addUserPreferenceHasFailed, currentRestaurantIndex,
  removeRestaurantIsLoading, removeRestaurantHasFailed } from './restaurants';
import { users, usersHasFailed, usersIsLoading } from './users';
import { lunchGroup } from './lunchGroup';

const rootReducer = combineReducers({
  restaurants,
  restaurantsHasFailed,
  restaurantsIsLoading,
  addRestaurantIsLoading,
  addRestaurantHasFailed,
  removeRestaurantIsLoading,
  removeRestaurantHasFailed,
  removeUserPreferenceIsLoading,
  removeUserPreferenceHasFailed,
  addUserPreferenceIsLoading,
  addUserPreferenceHasFailed,
  users,
  usersHasFailed,
  usersIsLoading,
  lunchGroup,
  currentRestaurantIndex
});

export default rootReducer;