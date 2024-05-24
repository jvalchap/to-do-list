import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
uuidv4();

export default function TodoWrapper() {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), work: todo, isCompleted: false, isEditing: false }])
        console.log(todos)
    }

    return (
        <div>TodoWrapper</div>
    )
}
