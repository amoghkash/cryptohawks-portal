import React from 'react';
import { useCookies } from 'react-cookie';

import Calendar from '../components/calendar/Calendar';

import GanttChart from '../components/chart/gantt/GanttChart';
import AdminGanttChart from '../components/chart/gantt/AdminGanttChart';

import AdminButton from '../components/button/AdminButton';
import UpdateView from '../components/updates/Updates';

function Dashboard() {
    const [cookie, setCookie] = useCookies(['user'])
    if(cookie.admin == "true"){
      return(
        <div>
          <AdminGanttChart />
          <div className='flex'>
            <Calendar />
            <UpdateView />
          </div>
          
          <AdminButton link='/admin' text='Admin Dashboard'/>
        </div>
        
      )
    } else {
      return(
        <div>
          <GanttChart />
          <div className='flex'>
            <Calendar />
            <UpdateView />
          </div>
        </div>
      )  
    }
}

export default Dashboard