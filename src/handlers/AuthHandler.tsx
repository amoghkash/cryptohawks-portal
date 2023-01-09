import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Footer from "../components/navigation/Footer";
import NoConnection from "../components/NoConnection";

function AuthHandler() {
    return (
        <div>
        <HashRouter >
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
        </HashRouter>
        </div>
    );
}; 
export default AuthHandler;

