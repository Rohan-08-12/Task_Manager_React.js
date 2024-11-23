import { useState } from "react";

function AddTodo({onNewItem}){

  const [todoName,setTodoName]=useState();
  const [todoDate,setTodoDate]=useState();

  const handleNameChange=(e)=>{
    setTodoName(e.target.value);
    
  };

  const handleDateChange=(e)=>{
    setTodoDate(e.target.value);
    
  };

  const handleAddButtonClick=()=>{
    onNewItem(todoName,todoDate);
    setTodoDate("");
    setTodoName("");
  };

    return  <div className="container text-center">
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" name="" id="" placeholder="Enter your task" onChange={handleNameChange} value={todoName} />
      </div>
      <div className="col-4">
        <input type="date" name="" id=""  onChange={handleDateChange} value={todoDate}/>
      </div>
      <div className="col-2">
      <button type="button" 
      className="btn btn-success kg-button "
      onClick={handleAddButtonClick}
      >Add</button>
      </div>
    </div>
    </div>
}

export default AddTodo;