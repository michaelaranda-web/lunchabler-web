import { ADD_USER_TO_LUNCH_GROUP, REMOVE_USER_FROM_LUNCH_GROUP } from '../constants/constants';

export function lunchGroup(state = [], action) {
  switch (action.type) {
    case ADD_USER_TO_LUNCH_GROUP:
      return [...state, action.user]
    case REMOVE_USER_FROM_LUNCH_GROUP:
      return state.filter((user) => {
        return action.user !== user
      })
    default:
      return state;
  }
}