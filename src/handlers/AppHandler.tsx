import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

import Home from '../pages/Home';
import Account from '../pages/Account';
import Admin from '../pages/Admin';
import CreateTask from '../pages/tasks/CreateTask';
import EditTask from '../pages/tasks/EditTask';
import Tasks from '../pages/Tasks';
import Calendar from '../components/calendar/Calendar';


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

          <Route exact path="/calendar">
            <Calendar />
          </Route>
          
          <Redirect to='/'/>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>

  );
}

export default AppHandler;