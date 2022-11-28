import {useState} from "react";
import Footer from "../../components/constants/Footer";
import LoginForm from "../login/LoginForm";


function Login(props) {
    return (
        <div>
            <LoginForm reload={props.reload}/>
            <Footer />
        </div>
        
        
    );
}; 
export default Login;

