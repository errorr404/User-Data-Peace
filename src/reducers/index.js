import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import errorReducer from './errorReducer';
import paginationReducer from './paginationReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  error: errorReducer,
  currentPage: paginationReducer,
});
export default rootReducer;
