import {React, useState} from "react";
import ProgressBar from 'react-customizable-progressbar'


function Todo({ todo }) {
    const [colorSet, setColorSet] = useState(false)
    const [progressBarColor, setProgressBarColor] = useState('')
    let percentage = todo.percentCompleted
    console.log(percentage)
    if(!colorSet){
        if(percentage<25){
            setProgressBarColor('indianred')
        } else if(25<=percentage && percentage<50) {
            setProgressBarColor('coral')
            console.log("here")
        } else if(50<=percentage && percentage<75) {
            setProgressBarColor('gold')
        } else if(75<=percentage && percentage<=100){
            setProgressBarColor('green')
        } else if(100<percentage) {
            percentage = 100;
        }
        setColorSet(true)
    }
    console.log(progressBarColor)
    const progressBarRadius = (window.innerWidth)/90
    return (
      <div className="flex bg-slate-100 rounded-lg p-1">
        <div className="flex-shrink justify-start font-bold">
            <div>
                Task:
            </div>
            <div className="flex-wrap text-lime-500 text-2xl font-medium pt-1">
                {todo.title}
            </div>
        </div>
        <div className="flex-auto justify-center text-center">
             <div className="font-bold">
                Description:
            </div>
            <div className='whitespace-normal flex-wrap font-light text-xl text-sky-700 pt-1'>
                {todo.description}
            </div>
        </div>
        <div className="flex-shrink justify-center text-center mr-24">
            <div className="flex-auto justify-center text-center font-bold">
                Owner:
            </div>
            <div className="flex-wrap font-light text-xl text-orange-600 pt-1">
                {todo.assignee}
            </div>
        </div>
        <div className='flex-shrink' id="Progress Circle">
            <ProgressBar
                progress={percentage}
                radius={progressBarRadius}
                strokeWidth={10}
                strokeColor={progressBarColor}
                trackStrokeWidth={10}
                className='absolute text-center'
            >
            </ProgressBar>
        </div>
      </div>
    );
};

export default Todo