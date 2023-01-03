import { Cookies } from 'react-cookie'

export async function getTask(taskID) {
// TO DO: Implement get Singular Task
    let requestUrl = 'http://localhost:8080/task/'+taskID
    return (fetch(requestUrl, {
        method: 'GET',
        credentials: 'include', // Necessary to Save COokies
    })
    .then(data => data.json())
    )

}

export async function getAllTasks(taskID) {
    // TO DO: Implement get All Tasks
    let data = await data_getAllTasks()
    console.log(data)
    let returnArray = []
    for(var i in data){
        returnArray.push(data[i])
    }
    console.log(returnArray)
    return(returnArray)
}

export default async function getAllUserTasks(username) {
    let data = await data_getAllUserTasks(username)
    let returnArray = []
    for(var i in data){
        returnArray.push(data[i])
    }
    return(returnArray)
}


async function data_getAllUserTasks(username) {
    let requestUrl = 'http://localhost:8080/user/'+ username + '/tasks'
    return (fetch(requestUrl, {
        method: 'GET',
        credentials: 'include', // Necessary to Save COokies
    })
    .then(data => data.json())
    )
}

async function data_getAllTasks() {
    let requestUrl = 'http://localhost:8080/task/all'
    return (fetch(requestUrl, {
        method: 'GET',
        credentials: 'include', // Necessary to Save COokies
    })
    .then(data => data.json())
    )
}