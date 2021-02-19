import produce from 'immer';
import createReducer from './reducer_utills';

const initialState = {
    user: {
        name: '',
        id: ''
    }
}
const user = {
    setUser(state, action) {
        state.user.name = action.payload.name;
        state.user.id = action.payload.id;
    }
}
export default produce((state, action) => createReducer(state, action, user), initialState);