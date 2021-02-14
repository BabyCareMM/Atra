import produce from 'immer';
import createReducer from './reducer_utills';

const initialState = {
    user: {
        name: '',
        emailAddress: ''
    }
}
const user = {
    setUser(state, action) {
        state.user.name = action.payload.name;
        state.user.emailAdress = action.payload.emailAdress;
    }
}
export default produce((state, action) => createReducer(state, action, user), initialState);