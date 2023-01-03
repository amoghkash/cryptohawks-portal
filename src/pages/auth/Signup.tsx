import Footer from "../../components/navigation/Footer";
import SignupForm from "../../components/forms/auth/SignupForm";
import { Link } from 'react-router-dom'


function Signup() {
    return (
        <div>
            <SignupForm/>
            <Link to="/login" className="text-blue-500 absolute right-0 top-0 p-3">
                <button className="bg-neutral-300 rounded-full border-2 border-blue-800 p-2 px-5"> Login </button>
            </Link>
            <Footer />
        </div>
    );
}; 
export default Signup;

