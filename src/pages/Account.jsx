import React, { useState } from 'react';
import {getUserData} from '../scripts/getUserData'
import { useCookies } from "react-cookie"

function Account() {
    const [cookie, setCookie] = useCookies(['user'])
    const [name, setName] = useState()

    const getData = async()=> {
        let user = await getUserData(cookie.token)
        setName(user.name)
        console.log(user)
    }
    return(
        <div>
            <h1 onClick={getData}>hi {name}</h1>
        </div>
    )
}

export default Account