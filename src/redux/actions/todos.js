import { EDIT_TODO, REMOVE_TODO } from '../types/todos'

const editTodo = todos => ({
    type: EDIT_TODO,
    payload: todos
})

const removeTodo = todos => ({
    type: REMOVE_TODO,
    payload: todos
})

