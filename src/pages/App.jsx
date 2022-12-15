import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Footer from '../components/constants/Footer';
import Header from '../components/constants/Header';
import Dashboard from './Dashboard';
import Home from './Home';
import Account from './Account';
import Admin from './Admin';
import CreateTask from './CreateTask';
import EditTask from './EditTask';

function App(props) {
  // Make API Request for All User Data
  console.log("APP")
  return (
    <div>
      <Router basename={'/cryptohawks-portal'}>
        <Header /> 
        <Switch>
          <Route exact path="/">
            <Home reload={props.reload}/>
          </Route>
          
          <Route exact path="/dashboard">
            <Dashboard reload={props.reload}/>
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
          <Redirect to='/'/>
        </Switch>

        <Footer />
      </Router>
    </div>

  );
}

export default App;
