import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import './App.css';

const todos = [
]

function getUniqueId(){
  return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
}



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todos,
      item: ''
    };
    this.checkTodo = this.checkTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.purge = this.purge.bind(this);
  }


  purge(){
    if(!window.confirm('are you sure')){
      return;
    }
 

  const todos = this.state.todos.filter(todo => {
    return !todo.isDone;
    });
    this.setState({
      todos: todos
    })
  }


  addTodo(e){
    e.preventDefault();

    if (this.state.item.trim() === ''){
      return; 
    }

    const item ={
      id: getUniqueId(),
      title: this.state.item,
      isDone: false
    }

    const todos = this.state.todos.slice();
    todos.push(item);
    this.setState({
      todos: todos,
      item: ''
    });

  }

  deleteTodo(todo){
    if (!window.confirm('are you sure?')) {
      return;
    }
    const todos = this.state.todos.slice();
    const pos = this.state.todos.indexOf(todo);
    todos.splice(pos, 1);
    this.setState({
      todos: todos
    });
  }
   
  checkTodo(todo){
    const todos = this.state.todos.map(todo =>{
      return {id: todo.id, title: todo.title, isDone: todo.isDone}
    });

    const pos = this.state.todos.map(todo =>{
      return todo.id;
    }).indexOf(todo.id);

    todos[pos].isDone = !todos[pos].isDone;
    this.setState({
      todos: todos
    });
  }

  updateItem(e){
    this.setState({
      item: e.target.value
    })
  }

  componentDidUpdate(){
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }
  componentDidMount(){
    this.setState({
      todos: JSON.parse(localStorage.getItem('todos')) || []
    })
  }


  render(){
    return(
      <div className = "container">
        <TodoHeader 
          todos = {this.state.todos}
          purge = {this.purge}
        />
        <TodoList 
          todos = {this.state.todos}
          checkTodo = {this.checkTodo}
          deleteTodo = {this.deleteTodo}
        />
        <TodoForm 
          item = {this.state.item}
          updateItem = {this.updateItem}
          addTodo = {this.addTodo}
        />
      </div>
    );
  }
}


export default App;
