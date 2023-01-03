// Make Task

export async function makeTask(taskData: any) {
    let requestUrl = 'http://localhost:8080/task'
    const req = JSON.stringify(taskData)
    return fetch(requestUrl, {
        method: 'POST',
        body: req,
        credentials: 'include', // Necessary to Save COokies
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(data => data.json())
}

// Update Task
export async function updateTask(taskData) {
    console.log(taskData)
    let requestUrl = 'http://localhost:8080/task'
    const req = JSON.stringify(taskData)
    console.log(req)
    return fetch(requestUrl, {
        method: 'PUT',
        body: req,
        //credentials: 'include', // Necessary to Save COokies
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(data => data.json())
}


// Get Task
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

// Delete Task
export async function deleteTask(taskID) {
    // TO DO: Implement get Singular Task
    let requestUrl = 'http://localhost:8080/task/'+taskID
    return (fetch(requestUrl, {
        method: 'DELETE',
        credentials: 'include', // Necessary to Save COokies
    })
    .then(data => data.json())
    )
    
}





// Get All Tasks
export async function getAllTasks() {
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

async function data_getAllTasks() {
    let requestUrl = 'http://localhost:8080/task/all'
    return (fetch(requestUrl, {
        method: 'GET',
        credentials: 'include', // Necessary to Save COokies
    })
    .then(data => data.json())
    )
}

// Get All of User's Tasks
export async function getAllUserTasks(username) {
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