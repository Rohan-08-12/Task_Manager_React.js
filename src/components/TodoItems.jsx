import TodoItem from "./TodoItem";
import styles from  './TodoItems.module.css'

const TodoItems=({todoItems , onDeleteItem})=>{
    return  <div className={styles.itemsContainer}>
        {todoItems.map((item)=>{
               return  <TodoItem todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteItem}></TodoItem>
        })}
  </div>
}

export default TodoItems;