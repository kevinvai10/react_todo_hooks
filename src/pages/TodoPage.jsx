import React from 'react'
import useLocalStorageState from '../hooks/useLocalStorageState'
import TodoList from '../components/TodoList/TodoList'
import TodoForm from '../components/TodoForm/TodoForm'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import uuid from 'uuid/v4'

const TodoPage = () => {
    const [todos, setTodos] = useLocalStorageState('todos', []);

    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
    }

    const removeTodo = todoId => {
        //filter out remove todo
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        //call setTodos with new todos array
        setTodos(updatedTodos);
    }

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? { ...todo, completed: !todo.completed }
            : todo
        )

        setTodos(updatedTodos);
    }

    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? { ...todo, task: newTask }
            : todo
        )

        setTodos(updatedTodos);
    }

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: '100vh',
            backgroundColor: '#fafafa'
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop:'1rem'}}>
                <Grid item xs={12} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoPage
