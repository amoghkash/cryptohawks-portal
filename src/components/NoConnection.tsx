import React, { useState, useEffect }  from 'react';
import { getAPIVersion } from '../scripts/api/api_info';


function NoConnection(props) {
    var [isVisible, setIsVisible] = useState(false)
    const testConnection = async() => {
        var connection:any = await getAPIVersion()
        if(!connection){
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
          testConnection()
        }, 10000);
        return () => clearInterval(interval);
    }, []);


    if(isVisible){
        return(
            <div className="fixed left-0 top-0 m-3">
                <div className='p-2 bg-crypto-blue rounded-full'>
                    <div className="px-5 py-2 bg-white rounded-full">
                        <p className="text-crypto-dark-gray textx-xl">No Connection to Server</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoConnection