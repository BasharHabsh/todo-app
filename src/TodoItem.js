import React, { useState } from 'react'

function TodoItem({ todo, index, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false)
    const [newTodo, setNewTodo] = useState(todo)

    const handleEdit = () => {
        if (isEditing) {
            editTodo(index, newTodo)
        }
        setIsEditing(!isEditing)
    }

    return (
        <li>
            {isEditing ? (
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
            ) : (
                <span>{todo}</span>
            )}
            <div>
                <button className="delete" onClick={() => deleteTodo(index)}>
                    Delete
                </button>
                <button className="edit" onClick={handleEdit}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </div>
        </li>
    )
}

export default TodoItem
