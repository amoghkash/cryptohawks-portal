import React from 'react';
import { useCookies } from "react-cookie"

function EditTodoButton(props) {
    const [cookie, setCookie] = useCookies(['user'])

    const handleClick = e => {
        e.preventDefault();
        console.log("pressed")
        let buttonPressed = e.currentTarget.id
        setCookie('edit_taskID', buttonPressed, {path:'/', secure: false});
    }

    return(
        <div className='place-content-center'>
            <button onClick={handleClick} id={props.id}>Edit</button>
        </div>

    )
}

export default EditTodoButton