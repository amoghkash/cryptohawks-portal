import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Footer from "../components/constants/Footer";

function AuthHandler(props) {
    return (
        <div>
        <Router basename={'/cryptohawks-portal'}>
            <Switch>
                <Route exact path="/login">
                    <Login reload={props.reload}/>
                </Route> 
                <Route exact path="/signup">
                    <Signup reload={props.reload}/>
                </Route>
                <Redirect to='/login'/>
            </Switch>
            <Footer />
        </Router>
        </div>
    );
}; 
export default AuthHandler;

