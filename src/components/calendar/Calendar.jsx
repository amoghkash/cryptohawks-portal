import * as React from 'react';


function Calendar() {
    return(
        <div className='flex justify-center mb-20'>
           <iframe 
           src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=dXJiYW5haHNyb2JvdGljc0BnbWFpbC5jb20&src=cnV0M3JzdG51Ymc0ajVob3ZlcWY5NDlxYmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%2304003b&color=%23810c0d" 
           width={"800"}
           height={"600"} 
           frameborder={"0"} 
           scrolling={"no"}>
           </iframe>
        </div>
    )
}

export default Calendar