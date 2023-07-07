'use client'

import React, {useState, useEffect} from 'react'
import TodoAdd from "./components/addTodo"
import TodoList from "./components/listTodo"
import { Button } from 'flowbite-react'

export default function Home() {
    const [todos, setTodos] = useState([])
    const [idCounter, setIdCounter] = useState(1);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='text-3xl font-mono flex flex-col w-[500px]'>
          <span className='text-3xl'>Todo</span>
          <TodoAdd setTodos={setTodos} idCounter={idCounter} setIdCounter={setIdCounter}/>
          <TodoList todos={todos} setTodos={setTodos} setIdCounter={setIdCounter}/>
        </div>
      </main>
    )
  }
