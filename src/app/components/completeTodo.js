import React from 'react'
import { Button } from 'flowbite-react'

function TodoComplete( { todo, onComplete } ) {

    const handleComplete = () => {
        onComplete(todo.id);
    };

    return (
        <>
            <Button className={`rounded-full p-2 border-2 border-gray-400 ${todo.isCompleted ? "hover:border-red-500" : "hover:border-green-500" }`} size={10} onClick={handleComplete}></Button>
        </>
    )
}

export default TodoComplete
