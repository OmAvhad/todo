'use client'

import React, { useState, useEffect } from 'react'
import { Button } from 'flowbite-react'

function TodoAdd( { setTodos, idCounter, setIdCounter } ) {

    const [todo, setTodo] = useState({
        id: null,
        title: '',
        isCompleted: false,
    });

    // const placeholders = ['What needs to be done?', 'Things to do today', 'My to-do list', 'My goals', "Things I'm excited to do"];
    // const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  
    // useEffect(() => {
    //   const timer = setInterval(() => {
    //     setCurrentPlaceholderIndex(prevIndex => (prevIndex + 1) % placeholders.length);
    //   }, 2000);
  
    //   return () => clearInterval(timer); // Clean up the timer when the component unmounts
  
    // }, []); // Empty dependency array to only run the effect once on component mount
  
    // const currentPlaceholder = placeholders[currentPlaceholderIndex];
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTodo((prevTodo) => ({
            ...prevTodo,
            [name]: value,
        }));
    };
    
    const handleClick = () => {
        if (todo.title === '') {
            return 0;
        }
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
                placeholder="Add task"
                value={todo.title}
                onChange={handleInputChange}
            />
            <Button className="bg-blue-500 text-sm focus:ring-0 hover:bg-none" onClick={handleClick}>Add</Button>
        </div> 
    )

}

export default TodoAdd