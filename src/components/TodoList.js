import { useState } from "react"



const TodoList = (props) => {
   
  return (
    <div>
        <h1>
            todoList
        </h1> 
    <ul>
        {props.todo.map((todoo => <li>{todoo.txt}</li>))}
    </ul>
    </div>
  )
}

export default TodoList