import Footer from "../../components/navigation/Footer";
import LoginForm from "../../components/forms/auth/LoginForm";
import { Link } from 'react-router-dom'


function Login() {
    return (
        <div>
            <LoginForm/>
            <Link to="/signup" className="text-blue-500 absolute right-0 top-0 p-3">
                <button className="bg-neutral-300 rounded-full border-2 border-blue-800 p-2 px-5"> Signup </button>
            </Link>
            <Footer />
        </div>
    );
}; 
export default Login;

