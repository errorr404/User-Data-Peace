import { ADD_USERS_TO_STATE } from '../constant';
import { addError } from './errorAction';
import axios from 'axios';

export const fetchUsers = () => {
  return (dispatch) => {
    axios.get('http://demo8852110.mockable.io/users/').then((res) => {
      dispatch(addUsersToStore([...res.data]));
      console.log(' im here');
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
