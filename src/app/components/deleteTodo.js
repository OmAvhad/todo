import React from 'react'
import { FaTrash } from "react-icons/fa";
import { PiTrashSimpleLight } from "react-icons/pi"
function TodoDelete( { todoId, onDelete } ) {

    const handleDelete = () => {
        onDelete(todoId);
    };

    return (
        <>
            <PiTrashSimpleLight size={22} width={10} onClick={handleDelete} className='cursor-pointer hover:text-red-500'/>
        </>
    )
}

export default TodoDelete
