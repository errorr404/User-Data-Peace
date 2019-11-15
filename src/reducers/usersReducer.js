import { ADD_USERS_TO_STATE, SEARCH_USERS, SET_LOGIN } from '../constant';

const usersReducers = (state = { allUsers: [], searchedUsers: [], loadingUsers:false }, action) => {
  switch (action.type) {
    case ADD_USERS_TO_STATE:
      return { ...state, allUsers: [...action.payload.users] };
    case SEARCH_USERS:
     const tempUsers = state.allUsers.filter((user) =>
        user.first_name.toLowerCase().includes(action.payload.firstName.toLowerCase())
      );
      return {...state,searchedUsers:[...tempUsers]}
    case SET_LOGIN:
      const {loadingUsers} = state;
      return {...state,loadingUsers:!loadingUsers}
    default:
      return state;
  }
};
export default usersReducers;
