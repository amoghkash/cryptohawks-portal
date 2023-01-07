import React, {useState} from 'react';
import {getAllTasks} from '../scripts/api/api_task'
import { Link } from 'react-router-dom'
import AdminTask from '../components/task/AdminTask';
import { Cookies } from 'react-cookie'
import Authorization from './info/Authorization';
import CreateTaskButton from '../components/button/CreateTaskButton';
import { FaSortNumericDown, FaSortNumericUp } from 'react-icons/fa';

function Admin() {
    const cookies = new Cookies();
    var adminBool = cookies.get('admin')
    if(adminBool === 'true'){
        const [tasks, setTasks] = useState([]);
        const [isLoading, setIsLoading] = useState(true)
        const [lowtoHigh, setLowtoHigh] = useState(false)
        const [hightoLow, setHightoLow] = useState(false)
        var lowtohigh_btn_Style = 'scale-[2.0] mr-5'
        var hightolow_btn_Style = 'scale-[2.0] mr-3'

        
        const loadTasks = async()=> {
            if(tasks){
                let data_tasks = await getAllTasks()
                setTasks(data_tasks)
                console.log(data_tasks)
            }
        }

        if(isLoading){
            loadTasks()
            setIsLoading(false)
        }
        if(lowtoHigh) {
            tasks.sort((a, b) => {
                let da = new Date(a.endDate),
                    db = new Date(b.endDate);
                return da - db;
            });
            lowtohigh_btn_Style = 'scale-[2.0] mr-5 fill-blue-500'
        }

        if(hightoLow) {
            tasks.sort((a, b) => {
                let da = new Date(a.endDate),
                    db = new Date(b.endDate);
                return db - da;
            });
            hightolow_btn_Style = 'scale-[2.0] mr-3 fill-blue-500'
        }
        
        const lowtohighToggle = () =>{
            setLowtoHigh(true);
            setHightoLow(false)
            
        }
        const hightolowToggle = () =>{
            setLowtoHigh(false);
            setHightoLow(true)
        }
        

        // Add Sorting Support in the code

        return (
            <div>
                <div className="flex justify-between inline bg-slate-600 p-3">
                    <Link to="/createTask" className="text-blue-500">
                        <button>Create Task</button>
                    </Link>
                    <div className='flex inline-flex'>
                        <button className='border-1'>
                            <FaSortNumericDown className={lowtohigh_btn_Style} onClick={lowtohighToggle}/>
                        </button>
                        <button>
                            <FaSortNumericUp className={hightolow_btn_Style} onClick={hightolowToggle}/>
                        </button>
                    </div>
                </div>
                <div className="grid justify-items-center bg-slate-400 p-3 h-fit min-h-screen w-screen pb-20">
                    <div className='snap-x space-y-2 w-4/5'>
                        {tasks.map((todo, index) => (
                        <AdminTask
                            key={index}
                            index={index}
                            todo={todo}
                        />
                        ))}
                    </div>
                </div>
                <CreateTaskButton />
            </div>
        )
    } else {
        return(
            <div>
                <Authorization />
            </div>
        )
        
    }
    
};

export default Admin