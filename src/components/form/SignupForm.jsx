import {useState} from "react";
import signupUser from "../../scripts/SignupAuth";
import { useCookies } from "react-cookie";
import { Selectable } from "@robertz65/lyte";

const SubteamSelections = [
    { label: 1, content: "Business" },
    { label: 2, content: "Marketing" },
    { label: 3, content: "Outreach" },
    { label: 4, content: "Mechanical" },
    { label: 5, content: "Control" },
    { label: 6, content: "Design" },
  ];
const GradeSelections = [
    { label: 1, content: 9 },
    { label: 2, content: 10 },
    { label: 3, content: 11 },
    { label: 4, content: 12 }
  ];

function setSubteamObject(array) { // TO DO map array to JSON Object
    let tempArray=[]
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        tempArray.push(element.content)
    }
    let returnObject = JSON.parse(JSON.stringify(Object.assign({}, tempArray)))
    return returnObject 
}

export default function SignupForm(props){
    const [username, setUserName] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [subteam, setSubteam] = useState();
    const [grade, setGrade] = useState(9);
    const [warning, setWarning] = useState('');
    const [cookie, setCookie] = useCookies(['user'])


    const handleSubmit = async e => {
        e.preventDefault();
        let subteam_Req_Body = setSubteamObject(subteam)
        let response = await signupUser({
          name,
          username,
          password,
          "subteam": subteam_Req_Body,
          grade,
          "admin": false
        }); 
        console.log(response)
        if(response.valid) {
            setCookie('username', response.username, {path:'/', secure: false});
            setCookie('name', response.name, {path:'/', secure: false});
            setCookie('firsttime', response.firsttime, {path:'/', secure: false});
            //setCookie('tokenSet', response.tokenSet, {path:'/', maxAge:response.token_expiresin, secure: false});
            setCookie('token', response.access_token, {path:'/', maxAge:response.token_expires_in, secure:false})
            console.log("supposed to reload")
            props.reload()
        }else {
            setWarning(response.issue)
        }
    }


    return (
        <div className="grid grid-cols-1 gap-4 place-items-center text-2xl">
            <h1 className="font-bold">Sign Up</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center" >
                    <label className="grid grid-cols-1 place-items-center pb-2">
                        <p>Enter Name:</p>
                        <input type="text" className="rounded-full border-2 border-blue-800 p-1" onChange={e => setName(e.target.value)}/>
                    </label>
                    <label className="grid grid-cols-1 place-items-center">
                        <p>Enter Username:</p>
                        <input type="text" className="rounded-full border-2 border-blue-800 p-1" onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label className="grid grid-cols-1 place-items-center pb-2">
                        <p>Enter Password:</p>
                        <input type="password" className="rounded-full border-2 border-blue-800 p-1" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div className="grid grid-cols-2">
                        <label className="grid grid-cols-1 col-span-1 place-items-center pb-2">
                            <p>Enter Grade:</p>
                            <Selectable
                                width={'100%'}
                                multi={false}
                                options={GradeSelections}
                                defaultValue={9}
                                onChange={(e) => setGrade(e)}
                                className={'rounded-full border-2 border-blue-800 p-2'}
                            />
                        </label>
                        <label className="grid grid-cols-1 place-items-center pb-2">
                        <p>Enter Subteam:</p>
                        <Selectable
                            width={'100%'}
                            multi={true}
                            allowClear={true}
                            allowRefill={false}
                            options={SubteamSelections}
                            defaultValue={SubteamSelections}
                            onChange={(e) => setSubteam(e)}
                            className={'rounded-full border-2 border-blue-800 p-2'}
                        />
                        </label>
                    </div>
                    
                    
                    
                    <div className='rounded-full border-2 border-stone-900 bg-blue-900 px-2'>
                        <button type="submit" className="text-white">Signup</button>
                    </div>
                </form>
                <p className='text-l text-red-700'>{warning}</p>
        </div>
    )
}