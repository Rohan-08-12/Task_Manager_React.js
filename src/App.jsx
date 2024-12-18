import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import './App.css'
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

function App() {


const [todoItems , setTodoItems]=useState([]);

const handleNewItem=(itemName,itemDueDate)=>{
  const newTodoItem=[...todoItems,{name:itemName,dueDate:itemDueDate}];
  setTodoItems(newTodoItem);
}

const handleDeleteItem=(todoItemName)=>{
  const newTodoItems=todoItems.filter((item)=>item.name!==todoItemName);
  setTodoItems(newTodoItems);
  
}

  return <center className="todo-container">
    <AppName/>
    <AddTodo onNewItem={handleNewItem}/>
    {todoItems.length==0 && <WelcomeMessage todoItems={todoItems}></WelcomeMessage> }
    <TodoItems todoItems={todoItems} onDeleteItem={handleDeleteItem}></TodoItems>
  </center>
}

export default App
