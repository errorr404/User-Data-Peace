import {ADD_CURRENT_PAGE} from '../constant';

const paginationReducer = (state = 1, action) => {
    switch (action.type) {
      case ADD_CURRENT_PAGE:
        return action.payload.currentPage;
      default:
        return state;
    }
  };
  export default paginationReducer;