import React from 'react';
import { useState } from 'react';
import { Gantt, Task} from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import {getAllUserTasks} from '../../../scripts/api/api_task';
import { useCookies } from "react-cookie"
import Tasks from '../../../pages/Tasks';
import { faTasksAlt } from '@fortawesome/free-solid-svg-icons';
import { getTaskList } from '../../../scripts/ganttProcessor';


function GanttChart() {
    const [isLoading, setIsLoading]=useState(true);
    const [tasklist, setTasklist]:any=useState();
    let tasks:Task[];
    const [cookie, setCookie]:any = useCookies(['user']);
    
    const getTasks = async()=> {
        console.log('load')
        let response = await getAllUserTasks(cookie.username);
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
            loading()
        )
    }

    var d = new Date()
    d.setDate(d.getDate()-1)
    tasks = getTaskList(tasklist)
    return(
        <div className='my-3 mx-3 p-4 bg-crypto-blue rounded-lg'>
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



export default GanttChart

export function loading() {
    return(
        <div className='ml-3 text-lg font-mono'>
            <h1>Loading..</h1>
        </div>
    )
}