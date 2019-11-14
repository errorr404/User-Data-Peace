import { ADD_USERS_TO_STATE, SEARCH_USERS } from '../constant';

const usersReducers = (state = { allUsers: [], searchedUsers: [] }, action) => {
  switch (action.type) {
    case ADD_USERS_TO_STATE:
      return { ...state, allUsers: [...action.payload.users] };
    case SEARCH_USERS:

     const tempUsers = state.allUsers.filter((user) =>
        user.first_name.toLowerCase().includes(action.payload.firstName.toLowerCase())
      );
      console.log('tempUSer-->',tempUsers);
      return {...state,searchedUsers:[...tempUsers]}
    default:
      console.log('default');
      return state;
  }
};
export default usersReducers;
