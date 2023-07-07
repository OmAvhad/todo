'use client'

import React, { useState } from 'react'
import { Button } from 'flowbite-react'

function TodoAdd( { setTodos, idCounter, setIdCounter } ) {

    const [todo, setTodo] = useState({
        id: null,
        title: '',
        isCompleted: false,
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTodo((prevTodo) => ({
            ...prevTodo,
            [name]: value,
        }));
    };
    
    const handleClick = () => {
        const newTodo = {
            id: idCounter,
            title: todo.title,
            isCompleted: false,
        };
        // Increment the ID counter
        setIdCounter((prevCounter) => prevCounter + 1);

        setTodos((prevTodos) => [newTodo, ...prevTodos]);
        // Reset the input field and isCompleted flag
        setTodo({
            id: null,
            title: '',
            isCompleted: false,
        });
    };

    return (
        <div className="flex flex-row gap-2">
            <input
                className="border-1 rounded-lg w-full focus:border-gray-500"
                type="text"
                name="title"
                placeholder="I want to..."
                value={todo.title}
                onChange={handleInputChange}
            />
            <Button className="bg-blue-500 p-3" onClick={handleClick}>Add</Button>
        </div> 
    )

}

export default TodoAdd