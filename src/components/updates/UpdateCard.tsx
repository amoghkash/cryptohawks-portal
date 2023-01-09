import React from 'react';
import { Anchorme, LinkComponentProps } from 'react-anchorme'

const CustomLink = (props: LinkComponentProps) => {
    return (
      <i>
        <a className="text-sky-600 hover:text-sky-700" {...props} />
      </i>
    )
  }

function UpdateCard({update}) {
    var date = new Date(update.postDate)
    var string_date = (date.getMonth()+1).toString() + '/' + date.getDate().toString() + '/' + date.getFullYear().toString()

    return(
        <div className='bg-crypto-light-gray w-full h-fit rounded-lg my-3 py-1'>
            <div className='flex justify-between'>
                <div className='w-1/2 font-semibold text-4xl ml-2 text-crypto-blue'>
                    {update.title}
                </div>
                <div className='m-2'>
                    {string_date}
                </div>
            </div>
            <div className='mx-2 mt-2 text-zinc-700'>
                <Anchorme linkComponent={CustomLink} target="_blank" rel="noreferrer noopener">
                    {update.description}
                </Anchorme>
            </div>
        </div>
 
    )
}
export default UpdateCard