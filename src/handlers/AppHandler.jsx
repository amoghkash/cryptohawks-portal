import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import React from 'react';

import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import NoConnection from '../components/NoConnection';

import Home from '../pages/Home';
import Account from '../pages/Account';
import CreateTask from '../pages/tasks/CreateTask';
import EditTask from '../pages/tasks/EditTask';
import Tasks from '../pages/Tasks';
import Calendar from '../components/calendar/Calendar';
import CreateUpdate from '../pages/update/CreateUpdate';
import Test from '../pages/Test';

import Admin from '../pages/Admin';

function AppHandler() {
  // Make API Request for All User Data
  console.log("APP")
  return (
    <div>
      <Router basename={'/cryptohawks-portal'}>
        <Header/> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path="/tasks">
            <Tasks/>
          </Route>

          <Route exact path="/account">
            <Account/>
          </Route>

          <Route exact path="/admin">
            <Admin />
          </Route>

          <Route exact path="/createTask">
            <CreateTask />
          </Route>

          <Route exact path="/editTask">
            <EditTask />
          </Route>

          <Route exact path='/createUpdate'>
            <CreateUpdate />
          </Route>

          <Route exact path="/calendar">
            <Calendar />
          </Route>
          
          <Route exact path="/test">
            <Test />
          </Route>

          <Redirect to='/'/>
        </Switch>
        {/* <Footer /> */}
        <NoConnection />
      </Router>
    </div>

  );
}

export default AppHandler;