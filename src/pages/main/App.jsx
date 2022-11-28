import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Footer from '../../components/constants/Footer';
import Header from '../../components/constants/Header';
import Dashboard from './Dashboard';
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <Header /> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/account">
            <h1 className='font-bold'>This is the account page</h1>
          </Route>
        </Switch>

        <Footer />

      </Router>
      
    </div>

  );
}

export default App;
