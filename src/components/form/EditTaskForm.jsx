import {useState} from "react";
import makeTask from "../../scripts/makeTask";
import { Selectable } from "@robertz65/lyte";
import DatePicker from "react-datepicker";
import {getAllUser} from '../../scripts/getUserData'
import {getTask} from '../../scripts/getTask'
import { useCookies } from "react-cookie"

import "react-datepicker/dist/react-datepicker.css";
import updateTask from "../../scripts/updateTask";

//let taskData;



export default function EditTaskForm(props){
    const [cookie, setCookie] = useCookies(['user'])
    const [isLoading, setIsLoading] = useState(true)
    const [userNameList, setUserNameList ] = useState([])

    let name_user;
    let username;
    
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [assignee, setAssignee] = useState();
    const [newOwner, setNewOwner] = useState();
    const [progress, setProgress] = useState();
    const [defaultProgress, setDefaultProgress] = useState();
    const [warning, setWarning] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const taskID = cookie.edit_taskID
    let state = false
    if(cookie.admin){
        if(userNameList.length == 0){
            state = true
        }
    }
    

    const getData = async() => {
        let taskData = await getTask(taskID);
        console.log(taskData)
        setTitle(taskData.title)
        setDescription(taskData.description)
        setDefaultProgress(taskData.progress)
        setProgress(defaultProgress)
        var date_start = new Date(taskData.startDate)
        var date_end = new Date(taskData.endDate)
        setStartDate(date_start)
        setEndDate(date_end)
        name_user = taskData.assignee
    }

    const loadUsers = async()=> {
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
            setUserNameList(UserNameList_temp)
        }
        setIsLoading(false)
    }
    
    if(state){
        getData()
        loadUsers()
        state=false
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
            console.log(endDate)
        }
        if(progress){
            req['progress'] = progress
        }
        console.log(req)
        let response = await updateTask(req)// Send Task Creation
        if(response.valid) {
            console.log(response)
            setWarning('Done')
        } else {
            setWarning(response.issue)
        }
    }

    if(isLoading){
        return(
            <div className="flex justify-center">
                <h1>Loading...</h1>
            </div>
        )
    } 
    //console.log(default_progress)
    return (
        <div className="grid grid-cols-1 gap-4 place-items-center text-2xl">
            <h1 className="font-bold">Create New Task</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center" >
                    <label className="grid grid-cols-1 place-items-center pb-2">
                        <p>Title:</p>
                        <input type="text"  value={title} className="rounded-full border-2 border-blue-800 p-1" onChange={e => setTitle(e.target.value)}/>
                    </label>
                    <label className="grid grid-cols-1 place-items-center">
                        <p>Description:</p>
                        <input type="text"  value={description} className="rounded-full border-2 border-blue-800 p-1" onChange={e => setDescription(e.target.value)}/>
                    </label>
                    <div className="grid grid-cols-4">
                        <label className="grid grid-cols-1 col-span-1 place-items-center pb-2">
                            <p>Owner:</p>
                            <Selectable
                                width={'100%'}
                                multi={false}
                                options={userNameList}
                                defaultValue = {assignee}
                                onChange={(e) => setNewOwner(e[0].label)}
                                className={'rounded-full border-2 border-blue-800 p-2'}
                            />
                        </label>
                        <label className="grid grid-cols-1 place-items-center px-2 pb-2">
                            <p>Start Date:</p>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                        </label>
                        <label className="grid grid-cols-1 place-items-center pb-2">
                            <p>End Date:</p>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
                        </label>
                        <label className="grid grid-cols-1 px-2">
                            <p>Progress:</p>
                            <input type="range" defaultValue={defaultProgress} onChange={e => setProgress(e.target.value)} />
                            <p>{progress}</p>
                        </label>
                    </div>
                   
                    <div className='rounded-full border-2 border-stone-900 bg-blue-900 px-2'>
                        <button type="submit" className="text-white">Update Task</button>
                    </div>
                </form>
                <p className='text-l text-red-700'>{warning}</p>
        </div>
    )
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
  
function formatDate(date_str) {
    if(!date_str){
        return('N/a')
    }
    const date = new Date(date_str)
    return [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('/');
}