

export default async function makeTask(taskData) {
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
