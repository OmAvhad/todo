'use client'

import React, {useEffect, useState} from 'react'
import TodoDelete from './deleteTodo'
import TodoComplete from './completeTodo';
import { Button } from 'flowbite-react'

function TodoList( { todos, setTodos, idCounter, setIdCounter } ) {
    const [ filter, setFilter ] = useState('active')
    const handleFilter = (newFilter) => {
        if (newFilter !== filter){
            setFilter(newFilter)
        }
    }

    const handleDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
    
        const updatedTodosWithIDs = updatedTodos.map((todo, index) => ({
          ...todo,
          id: index + 1,
        }));
    
        setTodos(updatedTodosWithIDs);
    
        setIdCounter((prevCounter) => prevCounter - 1);
    };

    const handleComplete = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );

        setTodos(updatedTodos);
        console.log(todos)
    }

    return (
        <div className='flex flex-col gap-1'>
            <div className='flex flex-row justify-center gap-6 mt-2 '>    
                <Button onClick={(e) => handleFilter("all")} className={`${filter === "all" ? "bg-blue-400" : "" }`}>All</Button>
                <Button onClick={(e) => handleFilter("active")} className={`${filter === "active" ? "bg-blue-400" : "" }`}>Active</Button>
                <Button onClick={(e) => handleFilter("completed")} className={`${filter === "completed" ? "bg-blue-400" : "" }`}>Completed</Button>
            </div>
            {todos
                .filter((todo) => {
                    if (filter === 'active') {
                    return !todo.isCompleted; // Filter active items
                    } else if (filter === 'completed') {
                    return todo.isCompleted; // Filter completed items
                    }
                    return true; // Show all items if no specific filter is applied
                })
                .map((todo)=> (
                    <div className="flex flex-row items-center justify-between" key={todo.id}>
                        <div className='flex flex-row items-center gap-2'>
                            <TodoComplete todo={todo} onComplete={() =>handleComplete(todo.id)}/>
                            <div className={`text-2xl ${todo.isCompleted ? "line-through" : "" }`}>{todo.title}</div>
                        </div>
                        <div className='w-14 justify-center'>
                            <TodoDelete todoId={todo.id} onDelete={() =>handleDelete(todo.id)}/>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default TodoList