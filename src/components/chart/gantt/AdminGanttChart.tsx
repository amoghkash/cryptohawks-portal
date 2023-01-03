import * as React from 'react';
import { useState } from 'react';
import { Gantt, Task} from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import {getAllTasks} from '../../../scripts/api/api_task';
import { useCookies } from "react-cookie"
import Tasks from '../../../pages/Tasks';
import { faTasksAlt } from '@fortawesome/free-solid-svg-icons';
import { getTaskList } from '../../../scripts/ganttProcessor';


function AdminGanttChart() {
    const [isLoading, setIsLoading]=useState(true);
    const [tasklist, setTasklist]:any=useState();
    let tasks:Task[];
    const [cookie, setCookie]:any = useCookies(['user']);
    
    const getTasks = async()=> {
        console.log('load')
        let response = await getAllTasks();
        setTasklist(response)
        if(tasklist) {
            setIsLoading(false)
        }
        console.log('done')
    }
    
    if(isLoading){
        console.log('loading')
        getTasks();
        console.log('loaded')
        console.log(tasklist)
        return(
            <div>
                <h1>Loading..</h1>
            </div>
        )
    }

    tasks = getTaskList(tasklist)
    return(
        <div className='bg-white my-3 mx-3 p-6 bg-crypto-blue rounded-lg'>
            <div className='bg-white'>
                <Gantt 
                tasks={tasks}
                viewDate={new Date()}
                preStepsCount={2}
                />
            </div>
        </div>
    )
}

export default AdminGanttChart