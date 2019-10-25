import React from 'react'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
    return (
        <div>
            <Paper>
            {
                todos && todos.map(todo => {
                    console.log('each task' , todo.task)
                    return (
                    <React.Fragment key={todo.id}>
                        <TodoItem 
                        id={todo.id}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                        task={todo.task} 
                        key={todo.id} 
                        editTodo={editTodo}
                        completed={todo.completed} />
                        <Divider />
                    </React.Fragment>)
                })
            }
            </Paper>
        </div>
    )
}

export default TodoList
