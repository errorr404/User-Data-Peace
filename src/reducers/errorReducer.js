import { ADD_ERROR } from '../constant';

const errorReducer = (state = null,action) => {
    console.log('here action payload',action.payload);
    switch(action.type){
        case ADD_ERROR:
            return action.payload.error;
        default:
            return state;
    }
}
export default errorReducer;