export default async function updateTask(taskData) {
    console.log(taskData)
    let requestUrl = 'https://cryptohawks-api-testing-ueanhy6e5q-uk.a.run.app/task'
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
