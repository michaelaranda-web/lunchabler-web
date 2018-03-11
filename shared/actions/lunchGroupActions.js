import { ADD_USER_TO_LUNCH_GROUP, REMOVE_USER_FROM_LUNCH_GROUP } from '../constants/constants';

export function addUserToLunchGroup(user) {
  return {
    type: ADD_USER_TO_LUNCH_GROUP,
    user
  };
}

export function removeUserFromLunchGroup(user) {
  return {
    type: REMOVE_USER_FROM_LUNCH_GROUP,
    user
  };
}