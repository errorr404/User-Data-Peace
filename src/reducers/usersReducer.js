import { ADD_USERS_TO_STATE } from '../constant';

const usersReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_USERS_TO_STATE:
      return [...action.payload.users];
    default:
      console.log('default');
      return state;
  }
};
export default usersReducers;
