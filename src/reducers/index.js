import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  error: errorReducer,
});
export default rootReducer;
