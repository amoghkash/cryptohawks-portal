import { Link } from "react-router-dom"
import React from 'react';

function CreateTaskButton() {
  
  return(
    <div className="fixed left-0 bottom-0 m-3">
        <Link to={'/createTask'}>
          <div className="px-16 py-2 bg-cyan-600 rounded-full">
            <button className="text-white text-xl">Create Task</button>
          </div>
        </Link>
    </div>
  )
}

export default CreateTaskButton