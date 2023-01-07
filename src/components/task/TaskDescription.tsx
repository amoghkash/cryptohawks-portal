import React from 'react';
import { formatDate } from '../../scripts/time';

function TaskDescription({todo}) {
    const startDate = formatDate(todo.startDate);
    const endDate = formatDate(todo.endDate);

    var assignees: string;

    if(todo.assignedTo.length <1) {
        assignees = "None";
    } else {
        assignees = todo.string_assignedTo.join(', ');
    }
    
    

    return(
        <div className="grid grid-rows-auto bg-slate-100 rounded-b-lg">
            <div className='flex justify-between inline-flex mx-2 my-1'>
                <div className='inline-flex'>
                    <p className='flex items-center font-semibold text-[22px]'>
                        Title:
                    </p>
                    <p className='flex items-center w-fit h-full text-[18px] ml-1 translate-y-0.5'>
                        {todo.title}
                    </p>
                </div>
                <div className='inline-flex mx-2 my-1'>
                    <p className='flex items-center font-semibold text-[22px]'>
                        Owner:
                    </p>
                    <p className='flex items-center w-fit h-full text-[18px] ml-1 translate-y-0.5'>
                        {todo.string_assignee}
                    </p>
                </div>
            </div>
            <div className='inline-flex mx-2 my-1'>
                <p className='flex items-center font-semibold text-[22px]'>
                    Description:
                </p>
                <p className='flex items-center w-fit h-full text-[18px] ml-1 translate-y-0.5'>
                    {todo.description}
                </p>
            </div>
            
            <div className='flex inline-flex mx-2 my-1'>
                <div className='inline-flex'>
                    <p className='flex items-center font-semibold text-[22px]'>
                        Start Date:
                    </p>
                    <p className='flex items-center w-fit h-full text-[18px] ml-1 translate-y-0.5'>
                        {startDate}
                    </p>
                </div>
                <div className='flex inline-flex items-end ml-5'>
                    <p className='flex items-center font-semibold text-[22px]'>
                        End Date:
                    </p>
                    <p className='flex items-center w-fit h-full text-[18px] ml-1 translate-y-0.5'>
                        {endDate}
                    </p>
                </div>
            </div>
            <div className='inline-flex mx-2 my-1'>
                <p className='flex items-center font-semibold text-[22px]'>
                    Completed:
                </p>
                <p className='flex items-center w-fit h-full text-[18px] ml-1 translate-y-0.5'>
                    {todo.percentCompleted}%
                </p>
            </div>
            <div className='inline-flex mx-2 my-1'>
                <p className='flex items-center font-semibold text-[22px]'>
                    Assignees:
                </p>
                <p className='flex items-center w-fit h-full text-[18px] ml-1 translate-y-0.5'>
                    {assignees}
                </p>
            </div>
        </div>
    )
}

export default TaskDescription