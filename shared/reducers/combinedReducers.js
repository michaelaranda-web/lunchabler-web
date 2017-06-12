import { combineReducers } from 'redux';
import { restaurants, restaurantsHasFailed, restaurantsIsLoading } from './restaurants';
import { users, usersHasFailed, usersIsLoading } from './users';

const rootReducer = combineReducers({
  restaurants,
  restaurantsHasFailed,
  restaurantsIsLoading,
  users,
  usersHasFailed,
  usersIsLoading
});

export default rootReducer;