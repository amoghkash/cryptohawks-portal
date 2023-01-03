import {Task} from 'gantt-task-react';

export function getTaskList(tasklist:[]){
    let tasks:Task[] = [
        {
          start: new Date(2023, 0, 7),
          end: new Date(2023, 1, 15),
          name: '2023 FRC Season',
          id: '2023 Season',
          type:'project',
          progress: 0,
          hideChildren:false,
          isDisabled: true,
          styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
          displayOrder:1.
        },
    ];

    for (let index = 0; index < tasklist.length; index++) {
        const element = tasklist[index];
        let newTask = processTasks(element, index+1)
        console.log(newTask)
        tasks.push(newTask)
    }

    return(tasks)
}



function processTasks(task:any, index) {
    let returnObject:Task = {
        start: new Date(task.startDate),
        end: new Date(task.endDate),
        name: task.title,
        id: task.uid,
        progress: task.percentCompleted,
        type: task.type,
        project: '2023 Season',
        displayOrder: index,
    }
    return(returnObject)
}
