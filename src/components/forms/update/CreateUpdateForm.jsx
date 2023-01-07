import {useState} from "react";
import { Selectable } from "@robertz65/lyte";
import { Cookies } from "react-cookie"
import { useHistory } from 'react-router-dom'
import { makeUpdate } from "../../../scripts/api/api_updates";



const SubteamSelections = [
    { label: 1, content: "Business" },
    { label: 2, content: "Marketing" },
    { label: 3, content: "Outreach" },
    { label: 4, content: "Mechanical" },
    { label: 5, content: "Control" },
    { label: 6, content: "Design" },
    { label:7, content: "Everyone"},
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

export default function CreateUpdateForm(props){
    const cookies = new Cookies()
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [warning, setWarning] = useState('');
    const [assignedTo, setAssignedTo] = useState([{label:7, content:"Everyone"}]);


    const username = cookies.get('username')
    const history = useHistory();    


    const handleSubmit = async e => {
        e.preventDefault();
        let subteam_Req_Body = setSubteamObject(assignedTo)
        const req = {
            title,
            description,
            "createdBy": username,
            "assignedTo":subteam_Req_Body
        }
        console.log(req)
        let response = await makeUpdate(req)// Send Task Creation
        if(response.valid) {
            console.log(response)
            setWarning('Done')
            history.push('/')
        } else {
            setWarning(response.issue)
        }
    }

    return (
        <div className="grid grid-cols-1 gap-4 place-items-center text-2xl">
            <h1 className="font-bold">Create New Update</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center inline-block" >
                    <label className="place-items-center pb-2 w-full" width={innerWidth/35}>
                        <p>Title:</p>
                        <input type="text" className="rounded-lg border-2 border-crypto-blue p-1 w-full" onChange={e => setTitle(e.target.value)}/>
                    </label>
                    <label className="place-items-center">
                        <p>Description:</p>
                        <textarea type="text" className="rounded-lg border-2 border-crypto-blue p-1" onChange={e => setDescription(e.target.value)} cols={innerWidth/35}/>
                    </label>
                    <label className="w-full place-items-center pb-2 ">
                        <p>Assign To:</p>
                        <Selectable
                            width={'100%'}
                            multi={true}
                            options={SubteamSelections}
                            defaultValue={7}
                            onChange={(e) => console.log(e)}
                            className={'rounded-full border-2 border-crypto-blue p-2'}
                        />
                    </label>

                    
                    <div className='rounded-full border-2 border-stone-900 bg-crypto-blue px-2'>
                        <button type="submit" className="text-white">Create Update</button>
                    </div>
                </form>
                <p className='text-l text-red-700'>{warning}</p>
        </div>
    )
}