import { EDIT_TODO, REMOVE_TODO, ADD_TODO } from '../types/todos'

export const editTodo = todos => ({
    type: EDIT_TODO,
    payload: todos
})

export const removeTodo = todoId => ({
    type: REMOVE_TODO,
    payload: todoId
})

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo
})

