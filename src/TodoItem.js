import React from 'react';

function TodoItem(props){
  return(
    <li>
      <label>
        <input type = "checkbox"
         checked = {props.todo.isDone}
         onChange = {()=> {props.checkTodo(props.todo)}}
        />
        <span className ={props.todo.isDone ? 'done' : ''}>
          {props.todo.title}
        </span>
      </label>
      <span className = "cmd" onClick ={()=> {props.deleteTodo(props.todo)}}>[×]</span>
    </li>
  );
}

export default TodoItem ;