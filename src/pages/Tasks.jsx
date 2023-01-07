import React, { useState } from 'react';
import Todo from '../components/task/Todo';
import {getAllUserTasks} from '../scripts/api/api_task';
import { useCookies } from "react-cookie"
import { FaSortNumericDown, FaSortNumericUp } from 'react-icons/fa';


function Tasks() {
  const [tasks, setTasks] = React.useState([]);
  const [todoSet, setTodoSet] = React.useState(false)
  const [cookie, setCookie] = useCookies(['user'])
  const [lowtoHigh, setLowtoHigh] = useState(false)
  const [hightoLow, setHightoLow] = useState(false)
  var lowtohigh_btn_Style = 'scale-[2.0] mr-5'
  var hightolow_btn_Style = 'scale-[2.0] mr-3'

  const loadTasks = async()=> {
      let data_tasks = await getAllUserTasks(cookie.username)
      console.log(data_tasks)
      setTasks(data_tasks)
  }
  if(!todoSet){
      loadTasks()
      setTodoSet(true)
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
    
    return (
      <div>
          <div className="flex justify-end inline bg-slate-600 p-3">
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
                  <Todo
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

export default Tasks