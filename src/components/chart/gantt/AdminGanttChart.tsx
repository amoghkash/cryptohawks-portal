import * as React from 'react';
import { useState } from 'react';
import { Gantt, Task} from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import {getAllTasks} from '../../../scripts/api/api_task';
import { useCookies } from "react-cookie"
import { loading } from './GanttChart';
import { getTaskList } from '../../../scripts/ganttProcessor';
import { getUpdates } from '../../../scripts/api/api_updates';

function AdminGanttChart() {
    const [isLoading, setIsLoading]=useState(true);
    const [tasklist, setTasklist]:any=useState();
    let tasks:Task[];    
    const getTasks = async()=> {
        console.log('load')
        let response = await getAllTasks();
        let updates = await getUpdates();
        console.log(updates)
        setTasklist(response)
        if(tasklist) {
            setIsLoading(false)
        }
    }
    
    if(isLoading){
        getTasks();
        console.log(tasklist)
        return(
            loading()
        )
    }
    var d = new Date()
    d.setDate(d.getDate()-1)
    tasks = getTaskList(tasklist)
    return(
        <div className=' min-h-9 my-3 mx-3 p-4 bg-crypto-blue rounded-lg'>
            <div className='bg-white'>
                <Gantt 
                tasks={tasks}
                viewDate={d}
                preStepsCount={1}
                />
            </div>
        </div>
    )
}

export default AdminGanttChart

