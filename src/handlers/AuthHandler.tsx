import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Footer from "../components/navigation/Footer";
import NoConnection from "../components/NoConnection";

function AuthHandler() {
    return (
        <div>
        <Router basename={'/cryptohawks-portal'}>
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route> 
                <Route exact path="/signup">
                    <Signup/>
                </Route>
                <Redirect to='/login'/>
            </Switch>
            <Footer />
            <NoConnection />
        </Router>
        </div>
    );
}; 
export default AuthHandler;

