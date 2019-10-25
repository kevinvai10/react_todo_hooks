import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../../redux/actions/todos'
import useToggleState from '../../hooks/useToggle'
import EditTodoForm from '../EditTodoForm/EditTodoForm'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const TodoItem = ({ id, task, completed, removeTodo, toggleTodo, editTodo }) => {
    const [isEditing, toggle] = useToggleState();
    return (
        <ListItem style={{height: '64px'}}>
            {isEditing ? 
            <EditTodoForm 
            id={id} 
            editTodo={editTodo} 
            task={task} 
            toggleEditForm={toggle}
            /> 
            : (<>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
                    <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton aria-label='Edit' onClick={() => toggle()}>
                            <EditIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    removeTodo: todoId => dispatch(removeTodo(todoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
