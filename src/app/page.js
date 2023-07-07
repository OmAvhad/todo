'use client'

import React, {useState, useEffect} from 'react'
import TodoAdd from "./components/addTodo"
import TodoList from "./components/listTodo"
import { Button } from 'flowbite-react'
import CreatUser from './components/createUser'
import Profile from './components/profile'

export default function Home() {
    const [todos, setTodos] = useState([])
    const [user, setUser] = useState({
      name: '',
      image: '',
      isLoggedIn: false
    })
    
    const [idCounter, setIdCounter] = useState(1);

    useEffect(() => {
      const localStorageUserData = localStorage.getItem("user");
      if (localStorageUserData){
        setUser(JSON.parse(localStorageUserData));
      }
      
      const localStorageData = localStorage.getItem("todos");
      if (localStorageData) {
        setTodos(JSON.parse(localStorageData));
        const todos = JSON.parse(localStorageData);
        const maxId = todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);
        setIdCounter(maxId + 1);
      }
    }, []);
    
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    return (
      <>
        <main className="flex min-h-screen flex-col items-center p-14 gap-10">
        {!user.isLoggedIn 
          ?
          <CreatUser setUser={setUser}/>
          :
          <Profile user={user}/>
        }
          <div className='text-3xl font-mono flex flex-col w-[500px]'>
            {/* <span className='text-3xl'>Todo</span> */}
            <TodoAdd setTodos={setTodos} idCounter={idCounter} setIdCounter={setIdCounter}/>
            <TodoList todos={todos} setTodos={setTodos} setIdCounter={setIdCounter}/>
          </div>
        </main>
      </>
    )
  }
