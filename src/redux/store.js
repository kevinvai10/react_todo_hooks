import { createStore, combineReducers } from 'redux';
//import reducers and middleware logic
import { todoReducer } from './reducers/todos'
const reducers = combineReducers(todoReducer);

export default createStore(reducers);