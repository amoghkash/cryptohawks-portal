import {useState} from "react";
import loginUser from '../../scripts/LoginAuth'
import { useCookies } from "react-cookie";


export default function LoginForm(props){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [cookie, setCookie] = useCookies(['user'])
    const [warning, setWarning] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        let response = await loginUser({
          username,
          password
        }); 
        if(response.valid) {
            setCookie('username', username, {path:'/', secure: false});
            setCookie('name', response.name, {path:'/', secure: false});
            //setCookie('tokenSet', response.tokenSet, {path:'/', maxAge:response.token_expiresin, secure: false});
            setCookie('token', response.access_token, {path:'/', maxAge:response.token_expires_in, secure:false})
            console.log("supposed to reload");
            props.reload();
        }else {
            setWarning(response.issue)
        }
    }


    return (
        <div className="grid grid-cols-1 gap-4 place-items-center text-2xl">
            <h1 className="font-bold">Please Log In</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center" >
                    <label className="grid grid-cols-1 place-items-center">
                        <p>Username</p>
                        <input type="text" className="rounded-full border-2 border-blue-800 p-1" onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label className="grid grid-cols-1 place-items-center pb-2">
                        <p>Password</p>
                        <input type="password" className="rounded-full border-2 border-blue-800 p-1" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div className='rounded-full border-2 border-stone-900 bg-blue-900 px-2'>
                        <button type="submit" className="text-white" >Submit</button>
                    </div>
                </form>
                <p className='text-l text-red-700'>{warning}</p>
        </div>
    )
}