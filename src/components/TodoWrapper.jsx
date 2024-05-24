import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export default function TodoWrapper() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, isCompleted: false, isEditing: false }])
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.id} : todo))
    }

    const deleteTask = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm />
                ) : (
                    <Todo
                        task={todo}
                        key={index}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                        editTodo={editTodo}
                    />
                )

            ))}
        </>
    )
}
