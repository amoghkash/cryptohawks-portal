import Footer from "../../components/navigation/Footer";
import LoginForm from "../../components/forms/auth/LoginForm";
import { Link } from 'react-router-dom'
import NoConnection from "../../components/NoConnection";
import React from 'react';


function Login() {
    return (
        <div>
            <LoginForm/>
            <Link to="/signup" className="text-blue-500 absolute right-0 top-0 p-3">
                <div className="bg-neutral-400 rounded-full border-2 border-blue-800 p-2 px-5 hover:bg-neutral-500 hover:font-bold ">
                    <button className=""> Signup </button>
                </div>
            </Link>
            <Footer />
        </div>
    );
}; 
export default Login;

