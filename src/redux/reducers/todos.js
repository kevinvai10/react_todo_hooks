import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from '../types/todos'

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action={}) => {
    switch (action.type) {
    
    case ADD_TODO: 
        return { ...state, todos: [...state.todos, action.payload] }
    case EDIT_TODO:
        return { ...state, ...action.payload }
    case REMOVE_TODO: 
        const updatedTodos = state.todos.filter(todo => todo.id !== action.payload);
        return { ...state, todos: updatedTodos }    
    default:
        return state
    }
}
