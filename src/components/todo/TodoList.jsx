import React from 'react';
import Todo from './Todo';
import getAllUserTasks from '../../scripts/getTask';
import { useCookies } from "react-cookie"


function TodoList() {
    const [todos, setTodos] = React.useState([]);
    const [todoSet, setTodoSet] = React.useState(false)
    const [cookie, setCookie] = useCookies(['user'])
    const loadTasks = async()=> {
        let tasks = await getAllUserTasks(cookie.username)
        setTodos(tasks)
    }
    if(!todoSet){
        loadTasks()
        setTodoSet(true)
    }
    // TODO - Remove onLoad from parent div
    return (
        <div onLoad={loadTasks} className="grid justify-items-center p-3"> 
          <div className='space-y-2 w-4/5'>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
              />
            ))}
          </div>
        </div>
    )
};

export default TodoList