import React, { useState } from 'react'

export default function EditTodoForm ({editTodo, task}) {

    const [value, setValue] = useState("")

    const handlerList = e => {
        e.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }

    return (
        <>
            <form onSubmit={handlerList}>
                <input
                    type='text'
                    value={value} 
                    placeholder="Update your task"
                    onChange={(e) => {
                        setValue(e.target.value)
                    }} />

                <button type='submit'>Update Task</button>
            </form>
        </>
    )
}
