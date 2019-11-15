import { ADD_ERROR } from '../constant';

export const addError = (error) => {
    const action  = {
        type: ADD_ERROR,
        payload:{
            error
        }
    }
    return action;
}