import React from 'react';
import {useState} from "react";
import {makeTask} from "../../../scripts/api/api_task";
import { Selectable } from "@robertz65/lyte";
import DatePicker from "react-datepicker";
import {getAllUser} from '../../../scripts/api/api_user'
import "react-datepicker/dist/react-datepicker.css";
import { useCookies } from "react-cookie"
import { useHistory } from 'react-router-dom'



let UserNameList = [];
const TypeSelections = [
    { label: 1, content: "task" },
    { label: 2, content: "milestone" }
];

export default function CreateTaskForm(props){
    const [cookie, setCookie] = useCookies(['user'])
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [assignee, setAssignee] = useState([{label:cookie.username, content: cookie.name}]);
    const [warning, setWarning] = useState('');
    const [type, setType] = useState([{ label:1, content: "task" }]);
    const [assignedTo, setAssignedTo] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory();


    const loadUsers = async()=> {
        let users = await getAllUser()
        Object.entries(users).forEach(entry => {
            const [key, value] = entry;
            let objToAppend={}
            objToAppend['label']=key
            objToAppend['content']=value
            UserNameList.push(objToAppend) 
        });
        UserNameList.sort(function(a, b) {
            var textA = a.content.toUpperCase();
            var textB = b.content.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        setIsLoading(false)
    }
    if(isLoading){
        loadUsers()
        return(
            <div className="text-xl">
                Loading..
            </div>
        )
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(title)
        console.log(startDate)
        console.log(endDate)
        console.log(assignee[0].label)
        console.log(type[0].content)
        console.log(assignedTo)
        
        const req = {
            title,
            description,
            'assignee':assignee[0].label,
            startDate,
            endDate,
            'type':type[0].content,
            assignedTo
        }
        console.log(req)
        let response = await makeTask(req)// Send Task Creation
        if(response.valid) {
            console.log(response)
            setWarning('Done')
            history.push('/admin')
        } else {
            setWarning(response.issue)
        }
    }


    return (
        <div className="grid grid-cols-1 gap-4 place-items-center text-2xl">
            <h1 className="font-bold">Create New Task</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center" >
                    <label className="grid grid-cols-1 place-items-center pb-2">
                        <p>Title:</p>
                        <input type="text" className="rounded-lg border-2 border-blue-800 p-1" onChange={e => setTitle(e.target.value)}/>
                    </label>
                    <label className="grid grid-cols-1 place-items-center">
                        <p>Description:</p>
                        <textarea type="text" className="resize rounded-lg mx-20 border-2 border-blue-800 p-1" onChange={e => setDescription(e.target.value)}/>
                    </label>

                    <div className="grid grid-cols-2 w-1/2">
                        <label className="grid grid-cols-1 col-span-1 place-items-center mx-4 mb-2">
                            <p>Owner:</p>
                            <Selectable
                                width={'100%'}
                                multi={false}
                                options={UserNameList}
                                defaultValue={cookie.username}
                                onChange={(e) => setAssignee(e)}
                                className={'rounded-lg border-2 border-blue-800 p-2'}
                            />
                        </label>
                        <label className="grid grid-cols-1 col-span-1 place-items-center mb-2">
                            <p>Assignees:</p>
                            <Selectable
                                width={'100%'}
                                multi={true}
                                options={UserNameList}
                                defaultValue={UserNameList}
                                onChange={(e) => setAssignedTo(e)}
                                className={'rounded-lg border-2 border-blue-800 p-2'}
                            />
                        </label>
                    </div>
                    
                    <div className="grid grid-cols-3">
                        <label className="grid grid-cols-1 place-items-center pb-2">
                        <p>Start Date:</p>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                        </label>
                        <label className="grid grid-cols-1 place-items-center pb-2">
                        <p>End Date:</p>
                            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
                        </label>
                        <label className="grid grid-cols-1 col-span-1 place-items-center pb-2">
                            <p>Type:</p>
                            <Selectable
                                width={'100%'}
                                multi={false}
                                options={TypeSelections}
                                defaultValue={1}
                                onChange={(e) => setType(e)}
                                className={'rounded-lg border-2 border-blue-800 p-2'}
                            />
                        </label>
                    </div>

                    
                    <div className='rounded-full border-2 border-stone-900 bg-blue-900 px-2 mt-3'>
                        <button type="submit" className="text-white">Create Task</button>
                    </div>
                </form>
                <p className='text-l text-red-700'>{warning}</p>
        </div>
    )
}