import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo({ task, toggleComplete, editTodo, deleteTask }) {

    return (
        <>
            <div>
                <p className={`${task.completed ? 'completed' : ''}`}
                    onClick={() => toggleComplete(task.id)}
                >{task.task}</p>

                <CreateIcon
                    onClick={() => editTodo(task.id)} />

                <DeleteIcon
                    onClick={() => deleteTask(task.id)} />
            </div>
        </>
    )
}
