import { combineReducers } from 'redux';
import { restaurants } from './restaurants';
import { users, usersHasFailed, usersIsLoading } from './users';

const rootReducer = combineReducers({
  restaurants,
  users,
  usersHasFailed,
  usersIsLoading
});

export default rootReducer;