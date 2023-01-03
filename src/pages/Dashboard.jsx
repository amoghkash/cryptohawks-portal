import React from 'react';
import { useCookies } from 'react-cookie';

import Calendar from '../components/calendar/Calendar';

import GanttChart from '../components/chart/gantt/GanttChart';
import AdminGanttChart from '../components/chart/gantt/AdminGanttChart';

import AdminButton from '../components/button/AdminButton';


function Dashboard() {
    const [cookie, setCookie] = useCookies(['user'])
    if(cookie.admin == "true"){
      return(
        <div>
          <AdminGanttChart />
          <Calendar />
          <AdminButton link='/admin' text='Admin Dashboard'/>
        </div>
        
      )
    } else {
      return(
        <div>
          <GanttChart />
          <Calendar />
        </div>
      )  
    }
}

export default Dashboard