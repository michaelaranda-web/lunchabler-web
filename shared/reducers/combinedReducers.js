import { combineReducers } from 'redux';
import { restaurants, restaurantsHasFailed, restaurantsIsLoading,
  removeUserPreferenceHasFailed, removeUserPreferenceIsLoading} from './restaurants';
import { users, usersHasFailed, usersIsLoading } from './users';

const rootReducer = combineReducers({
  restaurants,
  restaurantsHasFailed,
  restaurantsIsLoading,
  removeUserPreferenceIsLoading,
  removeUserPreferenceHasFailed,
  users,
  usersHasFailed,
  usersIsLoading
});

export default rootReducer;