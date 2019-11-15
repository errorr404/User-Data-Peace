import { ADD_ERROR } from '../constant';

const errorReducer = (state = null,action) => {
    switch(action.type){
        case ADD_ERROR:
            return action.payload.error;
        default:
            return state;
    }
}
export default errorReducer;