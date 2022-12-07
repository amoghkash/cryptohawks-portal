import { Cookies } from 'react-cookie'

async function getTask(taskID) {

}


export default async function getAllUserTasks() {
    const cookies = new Cookies();
    let username = cookies.get('username')
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
        method: 'GET'
        //credentials: 'include', // Necessary to Save COokies
    })
    .then(data => data.json())
    )
}