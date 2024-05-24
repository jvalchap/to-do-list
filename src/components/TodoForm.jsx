import React, { useState } from 'react'

export default function TodoForm () {

    const [task, setTask] = useState("")

    const handlerList = e => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handlerList}>
                <input
                    type='text' placeholder="What's your task today?"
                    onChange={(e) => {
                        setTask(e.target.value)
                    }} />

                <button type='submit'>Add Task</button>
            </form>
        </>
    )
}
