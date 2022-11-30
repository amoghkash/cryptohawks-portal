import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Footer from '../../components/constants/Footer';
import Header from '../../components/constants/Header';
import Dashboard from './Dashboard';
import Home from './Home';

function App(props) {
  // Make API Request for All User Data
  return (
    <div>
      <Router>
        <Header /> 
        <Switch>
          <Route exact path="/index.html">
            <Home reload={props.reload}/>
          </Route>
          
          <Route exact path="/dashboard">
            <Dashboard reload={props.reload}/>
          </Route>

          <Route exact path="/account">
            <h1 className='font-bold'>This is the account page</h1>
          </Route>
          <Redirect to='/'/>
        </Switch>

        <Footer />
      </Router>
    </div>

  );
}

export default App;
