import React from 'react';
import Todo from './Todo';
import getAllUserTasks from '../../scripts/getTask';

function TodoList() {
    const [todos, setTodos] = React.useState([]);
    const [todoSet, setTodoSet] = React.useState(false)
    const loadTasks = async()=> {
        let tasks = await getAllUserTasks()
        setTodos(tasks)
    }
    if(!todoSet){
        loadTasks()
        setTodoSet(true)
    }

    return (
        <div onLoad={loadTasks}className="grid justify-items-center bg-slate-400 p-3 h-screen w-screen">
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