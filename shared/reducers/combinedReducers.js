import { combineReducers } from 'redux';
import { restaurants, restaurantsHasFailed, restaurantsIsLoading,
  removeUserPreferenceHasFailed, removeUserPreferenceIsLoading,
  addUserPreferenceIsLoading, addUserPreferenceHasFailed} from './restaurants';
import { users, usersHasFailed, usersIsLoading } from './users';

const rootReducer = combineReducers({
  restaurants,
  restaurantsHasFailed,
  restaurantsIsLoading,
  removeUserPreferenceIsLoading,
  removeUserPreferenceHasFailed,
  addUserPreferenceIsLoading,
  addUserPreferenceHasFailed,
  users,
  usersHasFailed,
  usersIsLoading
});

export default rootReducer;