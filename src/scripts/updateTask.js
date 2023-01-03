export default async function updateTask(taskData) {
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
