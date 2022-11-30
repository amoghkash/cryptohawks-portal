import Footer from "../../components/constants/Footer";
import SignupForm from "../signup/SignupForm";
import { Link } from 'react-router-dom'


function Signup(props) {
    return (
        <div>
            <SignupForm reload={props.reload}/>
            <Link to="/" className="text-blue-500 absolute right-0 top-0 p-3">
                <button className="bg-neutral-300 rounded-full border-2 border-blue-800 p-2 px-5"> Login </button>
            </Link>
            <Footer />
        </div>
    );
}; 
export default Signup;

