import React, { useState } from 'react';
import {getUserData} from '../scripts/getUserData'
import { useCookies } from "react-cookie"
import getAPIVersion from '../scripts/getAPIVersion';

function Account() {
    const [cookie, setCookie] = useCookies(['user'])
    const [name, setName] = useState()
    const [version, setVersion] = useState()
    const [state, setState] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    const getData = async()=> {
        let user = await getUserData(cookie.token)
        setName(user.name)
        console.log(user)
    }

    const getVersion = async()=> {
        console.log("hi")
        let version = await getAPIVersion()
        setVersion(version.id)
        setIsLoading(false)
    }

    if(state) {
        getData()
        getVersion()
        setState(false)
    }

    if(isLoading) {
        return(
            <div>
                <h1>Loading..</h1>
            </div>
        )
    }

    return(
        <div>
            <h1>hi {name}</h1>
            <h1>API Version: {version}</h1>
        </div>
    )
}

export default Account