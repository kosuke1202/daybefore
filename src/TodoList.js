import React from 'react';
import TodoItem from './TodoItem.js';

function TodoList(props){
  const todos = props.todos.map(todo =>{
    return (
    <TodoItem
      key = {todo.id}
      todo = {todo}
      checkTodo = {props.checkTodo}
      deleteTodo = {props.deleteTodo}
      />
    )
  })
  return(
    <ul>
      {props.todos.length ? todos : <li>Nothing to do </li>}
    </ul>
  );
}

export default TodoList ;
