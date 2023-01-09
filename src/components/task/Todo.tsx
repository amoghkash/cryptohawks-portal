import React from "react";
import {useState} from "react";
import ProgressBar from 'react-customizable-progressbar'
import TaskDescription from "./TaskDescription";

function Todo({todo}) {
    const [colorSet, setColorSet] = useState(false)
    const [progressBarColor, setProgressBarColor] = useState('')
    const [roundedTop, setRoundedTop] = useState(false)


    const endDate = formatDate(todo.endDate)
    const progressBarRadius = (window.innerWidth)/90
    let percentage = todo.percentCompleted

    var cardStyle = "grid grid-cols-6 gap-4 bg-slate-200 rounded-t-lg p-1 py-3"

    const taskDropdown = () => {
        setRoundedTop(!roundedTop)
    }

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


    return (
        <div className="snap-center">
            <details>
                <summary className={cardStyle} onClick={taskDropdown}>
                    <div className="col-span-2 m-2">
                        <div className="text-crypto-blue text-3xl font-semibold">
                            {todo.title}
                        </div>
                    </div>
                    <div className="relative col-span-2">
                        <p className="w-full h-max-15 text-urbana-gray text-2xl truncate">
                            {todo.description}
                        </p>
                    </div>
                    <div className="relative col-span-1">
                        <div className="relative">
                            <div>
                                Due Date:
                            </div>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 whitespace-normal flex-wrap font-semibold text-xl text-sky-700 mt-2.5">
                            {endDate}
                        </div>
                    </div>
                    <div className="relative col-span-1">
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                            <ProgressBar
                            progress={percentage}
                            radius={progressBarRadius}
                            strokeWidth={10}
                            strokeColor={progressBarColor}
                            trackStrokeWidth={11}
                            trackStrokeColor={'#a3a3a3'}
                            />
                            <div className="absolute">

                            </div>
                        </div>
                    </div>
                </summary>
                <TaskDescription todo={todo}/>
            </details>
        </div>

    );
};

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
  
function formatDate(date_str) {
    if(!date_str){
        return('N/a')
    }
    const date = new Date(date_str)
    return [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('/');
  }

export default Todo