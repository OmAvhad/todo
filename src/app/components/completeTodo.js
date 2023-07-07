import React from 'react'

function TodoComplete( { todo, onComplete } ) {

    const handleComplete = () => {
        onComplete(todo.id);
    };

    return (
        <>
            <button className={`rounded-full p-2 border-2 border-gray-400 ${todo.isCompleted ? "hover:border-red-500" : "hover:border-green-500" }`} size={10} onClick={handleComplete}></button>
        </>
    )
}

export default TodoComplete
