import {useState} from "react";
import loginUser from './Auth'
import { useCookies } from "react-cookie"



export default function LoginForm(props){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [cookie, setCookie] = useCookies(['user'])
    const [warning, setWarning] = useState('');
    

    const handleSubmit = async e => {
        e.preventDefault();
        let auth = await loginUser({
          username,
          password
        });
        console.log(auth)
        if(auth.valid) {
            setCookie('username', username, {path:'/'})
            setCookie('token', auth.token, {path:'/'})
            props.reload()
        }else {
            setWarning('Incorrect Username or Password Entered')
        }
    }


    return (
        <div className="grid grid-cols-1 gap-4 place-items-center text-2xl">
            <h1 className="font-bold" cla>Please Log In</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center" >
                    <label className="grid grid-cols-1 place-items-center">
                        <p>Username</p>
                        <input type="text" onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label className="grid grid-cols-1 place-items-center pb-2">
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div className='rounded-full border-2 border-blue-800 px-1'>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <p className='text-l text-red-700'>{warning}</p>
        </div>
    )
}