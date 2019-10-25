import { EDIT_TODO, REMOVE_TODO } from '../types/todos'

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action={}) => {
    switch (action.type) {

    case EDIT_TODO:
        return { ...state, ...action.payload }
    case REMOVE_TODO: 
        return { ...state, ...action.payload }    
    default:
        return state
    }
}
