import React, { useState } from 'react'
import Header from './Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const editTodo = (index, newTodo) => {
        const newTodos = [...todos]
        newTodos[index] = newTodo
        setTodos(newTodos)
    }

    return (
        <div className="container">
            <Header />
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
    )
}

export default App
