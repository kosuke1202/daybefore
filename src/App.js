import React from 'react';
import './App.css';

const todos = [
  {id: "A", title: "titleA", isDoen: false},
  {id: "A", title: "titleA", isDoen: false},
  {id: "A", title: "titleA", isDoen: true}
]
class App extends React.Component{
  render(){
    return (
      <div className="Container" >
       <p>やることリスト</p>
       <ul>
         <li> todo</li>
         <li> todo</li>
         <li> todo</li>
       </ul>
      </div>
    );
   }
  }
export default App;
