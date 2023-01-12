import {useState} from "react";
import { Selectable } from "@robertz65/lyte";
import DatePicker from "react-datepicker";
import {getAllUser} from '../../../scripts/api/api_user'
import {getTask, updateTask, deleteTask} from "../../../scripts/api/api_task";
import { useCookies } from "react-cookie"
import { useHistory } from 'react-router-dom'

import "react-datepicker/dist/react-datepicker.css";

//let taskData;



export default function EditTaskForm(props){
    const [cookie, setCookie] = useCookies(['user'])
    const [isLoading, setIsLoading] = useState(true)
    const [taskData, setTaskData] = useState()
    const [userNameList, setUserNameList ] = useState([])
    const [assignedToList, setAssignedtoList] = useState([])
    let name_user;
    let username;

    
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [assignee, setAssignee] = useState();
    const [newOwner, setNewOwner] = useState();
    const [progress, setProgress] = useState();
    const [defaultProgress, setDefaultProgress] = useState();
    const [warning, setWarning] = useState('');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [assignedTo, setAssignedTo] = useState();
    const history = useHistory();

    const taskID = cookie.edit_taskID
    if(!cookie.admin){
        return(
            <div>
                No
            </div>
        )
    }
    

    const getData = async() => {
        if(!taskData){
            let data = await getTask(taskID);
            console.log(data)
            setTaskData(data)
            return 0
        } 
        
        if(!endDate){
            name_user = taskData.assignee
            var date_start = new Date(taskData.startDate)
            var date_end = new Date(taskData.endDate)
            setStartDate(date_start)
            setEndDate(date_end)
        }
        
    }

    const loadUsers = async()=> {
        console.log(userNameList)
        var UserNameList_temp = []
        if(userNameList.length == 0){
            let users = await getAllUser()
            Object.entries(users).forEach(entry => {
                const [key, value] = entry;
                if(value == name_user){
                    username = key
                    setAssignee(key)
                }
                let objToAppend={}
                objToAppend['label']=key
                objToAppend['content']=value
                UserNameList_temp.push(objToAppend)
            });
            UserNameList_temp.sort(function(a, b) {
                var textA = a.content.toUpperCase();
                var textB = b.content.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            setUserNameList(UserNameList_temp)
        }
        setIsLoading(false)
    }
    

    const deleteTaskHandler = async() => {
        console.log('button press')
        let response = await deleteTask(taskID)

        if(response.valid) {
            console.log(response)
            setWarning('Done')
            history.push('/admin');
        } else {
            setWarning(response.issue)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        let req = {}
        req['taskID'] = taskID
        if(title){
            req['title'] = title
        }
        if(newOwner) {
            req['assignee'] = newOwner
        }
        if(description) {
            req['description'] = description
        }
        if(startDate){
            req['startDate'] = startDate
        }
        if(endDate){
            req['endDate'] = endDate
        }
        if(progress){
            req['progress'] = progress
        }
        if(assignedTo) {
            req['assignedTo'] = assignedTo
        }
        console.log(req)
        let response = await updateTask(req)// Send Task Creation
        if(response.valid) {
            console.log(response)
            setWarning('Done')
        } else {
            setWarning(response.issue)
        }
        history.push('/admin');

    }

    if(isLoading){
        getData()
        loadUsers()
        return(
            <div className="flex justify-center">
                <h1>Loading...</h1>
            </div>
        )
    } 
    //console.log(default_progress)
    return (
        <div className="grid grid-cols-1 gap-4 place-items-center text-2xl">
            <h1 className="font-bold">Edit Task</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center" >
                    <label className="grid grid-cols-1 place-items-center pb-2">
                        <p>Title:</p>
                        <input type="text"  value={taskData.title} className="rounded-full border-2 border-blue-800 p-1" onChange={e => setTitle(e.target.value)}/>
                    </label>
                    <label className="grid grid-cols-1 place-items-center">
                        <p>Description:</p>
                        <input type="text"  value={taskData.description} className="rounded-full border-2 border-blue-800 p-1" onChange={e => setDescription(e.target.value)}/>
                    </label>

                    <div className="grid flex w-4/5 h-fit grid-cols-2">
                        <label className="grid grid-cols-1 col-span-1 place-items-center mb-2">
                                <p>Owner:</p>
                                <Selectable
                                    width={'100%'}
                                    multi={false}
                                    options={userNameList}
                                    defaultValue = {taskData.assignee}
                                    onChange={(e) => setNewOwner(e[0].label)}
                                    className={'rounded-full border-2 border-blue-800 p-2'}
                                />
                        </label>
                        <label className="grid grid-cols-1 col-span-1 place-items-center mb-2">
                                <p>Assignees:</p>
                                <Selectable
                                    width={'100%'}
                                    multi={true}
                                    options={userNameList}
                                    defaultValue={taskData.assignedTo}
                                    onChange={(e) => setAssignedTo(e)}
                                    className={'rounded-lg border-2 border-blue-800 p-2'}
                                />
                        </label>
                    </div>

                    <div className="grid grid-cols-3">
                
                        <label className="grid grid-cols-1 place-items-center mx-2 mb-2">
                            <p>Start Date:</p>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                        </label>
                        <label className="grid grid-cols-1 place-items-center mb-2">
                            <p>End Date:</p>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
                        </label>
                        <label className="grid grid-cols-1 px-2">
                            <p>Progress:</p>
                            <input type="range" defaultValue={taskData.progress} onChange={e => setProgress(e.target.value)} />
                            <p>{progress}</p>
                        </label>
                    </div>


                    <div className='rounded-full border-2 border-stone-900 bg-blue-900 px-2 mt-2'>
                        <button type="submit" className="text-white">Update Task</button>
                    </div>
                </form>
                
                <div className='rounded-full border-2 border-stone-900 bg-red-900 px-2 mt-2'>
                    <button onClick={deleteTaskHandler} className="text-white">Delete Task</button>
                </div>    
                
                <p className='text-l text-red-700'>{warning}</p>
        </div>
    )
}