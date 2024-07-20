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

    return (
        <div className="container">
            <Header />
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )
}

export default App
