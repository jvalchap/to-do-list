import React, { useState } from 'react'

export default function TodoForm ({addTodo}) {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={value} 
                    placeholder="What's your task today?"
                    onChange={(e) => {
                        setValue(e.target.value)
                    }} />

                <button type='submit'>Add Task</button>
            </form>
        </>
    )
}
