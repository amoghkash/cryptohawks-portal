import React, {useState} from 'react';
import getAllUserTasks, { getAllTasks } from '../scripts/getTask';
import { Link } from 'react-router-dom'
import AdminTodo from '../components/todo/AdminTodo';

function Admin() {
    const [todos, setTodos] = useState([]);
    const [todoSet, setTodoSet] = useState(false)
    const loadTasks = async()=> {
        let tasks = await getAllTasks()
        setTodos(tasks)
    }
    if(!todoSet){
        loadTasks()
        setTodoSet(true)
    }

    return (
        <div>
            <div className="bg-slate-600 p-3">
                <Link to="/createTask" className="text-blue-500">
                    <button>Create Task</button>
                </Link>
            </div>
            <div onLoad={loadTasks} className="grid justify-items-center bg-slate-400 p-3 h-fit w-screen pb-20">
                <div className='space-y-2 w-4/5'>
                    {todos.map((todo, index) => (
                    <AdminTodo
                        key={index}
                        index={index}
                        todo={todo}
                    />
                    ))}
                </div>
            </div>
        </div>
        
    )
};

export default Admin