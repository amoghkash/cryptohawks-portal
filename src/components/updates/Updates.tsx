import * as React from 'react';
import { useState } from 'react';
import { getUpdates } from '../../scripts/api/api_updates';
import UpdateCard from './UpdateCard';


function UpdateView() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false)

    const loadData = async() => {
        var res = await getUpdates();
        if(res.length>0){
            setData(res)
            setIsLoading(false)
        } else {
            setIsEmpty(true)
            setIsLoading(false)
        }
        
    }

    if(isLoading){
        loadData()
        return(
            <div className='float-right mr-3 w-full h-1/5'>
                <div className='p-4 bg-black rounded-lg'>
                    <div className='items-center h-60 bg-crypto-dark-gray rounded-md overflow-y-scroll px-2'>
                        <div className='flex justify-center text-7xl'>
                            Loading Updates...
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if(isEmpty){
        return(
            <div className='float-right mr-3 w-full h-1/5'>
                <div className='p-4 bg-black rounded-lg'>
                    <div className='items-center h-60 bg-crypto-dark-gray rounded-md overflow-y-scroll px-2'>
                        <div className='flex justify-center text-7xl'>
                            No Updates Available...
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if(data){
        return(
            <div className='float-right mr-3 w-full h-1/5'>
                <div className='p-4 bg-black rounded-lg'>
                    <div className='items-center h-60 bg-crypto-dark-gray rounded-md overflow-y-scroll px-2'>
                        {data.map((data, index) => (
                        <UpdateCard
                            key={index}
                            update={data}
                        />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateView