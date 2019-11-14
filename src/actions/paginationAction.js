import {ADD_CURRENT_PAGE} from '../constant';

export const updateCurrentPage = (currentPage) => {
    const action = {
        type: ADD_CURRENT_PAGE,
        payload:{
            currentPage
        }
    }
    return action;
}