import { ADD_USERS_TO_STATE, SEARCH_USERS,SET_LOGIN } from '../constant';
import { addError } from './errorAction';
import axios from 'axios';

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(updateLoadingStatus());
    axios.get('https://demo8852110.mockable.io/users/').then((res) => {
      dispatch(addUsersToStore([...res.data]));
      dispatch(updateLoadingStatus());
      dispatch(addError(null));
    }).catch(err=>
        addError('something went wrong')  // it is not working :-- need reasearch 
    );
  };
};

const addUsersToStore = (users) => {
  const action = {
    type: ADD_USERS_TO_STATE,
    payload: {
      users
    }
  };
  return action;
};

const updateLoadingStatus = () => {
  const action = {
    type: SET_LOGIN,
  }
  return action;
}

export const searchUsers = (firstName) => {
  const action = {
    type: SEARCH_USERS,
    payload:{
      firstName
    }
  }
  return action;
}