import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';

const reducer = combineReducers({ userReducer })
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
window.store = store;
export default store;