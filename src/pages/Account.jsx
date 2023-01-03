import React, { useState } from 'react';
import {getUserData} from '../scripts/api/api_user'
import { useCookies } from "react-cookie"
import {getAPIVersion} from '../scripts/api/api_info';
import metadata from '../assets/metadata.json';
import { logout } from '../scripts/auth';

function Account() {
    const [cookie, setCookie] = useCookies(['user'])
    const [user, setUser] = useState()
    const [version, setVersion] = useState()
    const [state, setState] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    const getData = async()=> {
        if(!user){
            let userRes = await getUserData(cookie.token)
            setUser(userRes)
        }
    }

    const getVersion = async()=> {
        if(!version) {
            let version = await getAPIVersion()
            setVersion(version.id)
            setIsLoading(false)
            setState(false)
        }
    }

    if(state) {
        getData()
        getVersion()
    }

    if(isLoading) {
        return(
            <div>
                <h1>Loading..</h1>
            </div>
        )
    }

    
    if(user) {
        let date = new Date(user.createdAt)
        return(
            <div>
                <h1>Name: {user.name}</h1>
                <h1>Grade: {user.grade}</h1>
                <h1>Account Created: {date.toString()}</h1>
                <h1>API Version: {version}</h1>
                <h1>Application Version: {metadata.version}.{metadata.revMajor}.{metadata.revMinor}.{metadata.buildNumber} {metadata.buildTag}</h1>
                <div className='fixed bottom-0 m-8 text-xl text-white bg-red-500 rounded-full hover:bg-red-700' onClick={logout}>
                    <button className='mx-8 my-3'>Logout</button>
                </div>
            </div>
        )
    }
    
}

export default Account