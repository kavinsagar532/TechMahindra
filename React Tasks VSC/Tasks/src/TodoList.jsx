import React from 'react'

export default function TodoList(props) {

  return (
    <>
      <ol>
        {props.tasks.map((task) => (
            <li style={{
                textDecoration : task.isCompleted ? "line-through" : "none" 
            }}> {task.name} </li>
        ))}
      </ol>
    </>
  )
}
