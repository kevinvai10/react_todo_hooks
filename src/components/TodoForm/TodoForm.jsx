import React from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import  useInputState from '../../hooks/useInputState'
import { addTodo } from '../../redux/actions/todos'
import uuid from 'uuid/v4'

const TodoForm = ({ addTodo, addTodos, todosObj }) => {
    const [value, handleChange, reset] = useInputState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        const newTodo = {id: uuid(), task: value, completed: false}
        addTodos(newTodo);
        reset();
    }

    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={handleSubmit}>
            <TextField 
            value = {value} 
            onChange={handleChange} 
            margin='normal' 
            label='Add new todo' 
            fullWidth
            />
            </form>
        </Paper>
    )
}
const mapStateToProps = state => ({
    todosObj: state.todos
})
const mapDispatchToProps = dispatch => ({
    addTodos: newTodo => dispatch(addTodo(newTodo)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
