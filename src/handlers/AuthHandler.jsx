import Login from "../pages/main/Login";
import Signup from "../pages/main/Signup";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Footer from "../components/constants/Footer";

function AuthHandler(props) {
    console.log("got here")
    return (
        <div>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login reload={props.reload}/>
                </Route> 
                <Route exact path="/signup">
                    <Signup reload={props.reload}/>
                </Route>
            </Switch>
            <Footer />
        </Router>
        </div>
    );
}; 
export default AuthHandler;
