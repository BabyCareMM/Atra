import produce from 'immer';
import createReducer from './ReducerUtils';

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