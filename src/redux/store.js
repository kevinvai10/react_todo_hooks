import { createStore, combineReducers } from 'redux';
//import reducers and middleware logic
import { todoReducer } from './reducers/todos'
const rootReducer = combineReducers({ todos: todoReducer });

export default createStore(rootReducer);