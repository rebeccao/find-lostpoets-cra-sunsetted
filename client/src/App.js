// client/src/App.js

import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const toDoNameRef = useRef()

  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedToDos) setTodos(storedToDos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleToDo(id) {
    const newToDos = [...todos]
    const todo = newToDos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newToDos) 
  }

  function handleAddToDo(e) {
    const name = toDoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: 1, name: name, complete: false }]
    })
    toDoNameRef.current.value = null
  }
  return (
    <>
      <ToDoList todos={todos} toggleToDo={toggleToDo} />
      <input ref={toDoNameRef} type="text" />
      <button onClick={handleAddToDo} >Add ToDo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;